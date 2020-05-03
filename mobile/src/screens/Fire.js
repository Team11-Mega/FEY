import firebase from 'firebase'
class Fire {
    constructor() {
        this.init()
        this.checkAuth()
    }

    init = () => {
        if (!firebase.apps.length) {
            firebase.initializeApp(
                {
                    apiKey: "AIzaSyDY5UNcTcFgGfdf6PkTLWZuSuxWfs_aZZg",
                    authDomain: "chatapphack.firebaseapp.com",
                    databaseURL: "https://chatapphack.firebaseio.com",
                    projectId: "chatapphack",
                    storageBucket: "chatapphack.appspot.com",
                    messagingSenderId: "718178922967",
                    appId: "1:718178922967:web:8cde0a61326b1f49015b92",
                    measurementId: "G-7FPDEQKZHE"
                }
            )
        }
    }

    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                firebase.auth().signInAnonymously()
            }
        })
    }

    send = messages => {
        messages.forEach(item => {
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            }

            this.db.push(message)
        })
    }

    parse = message => {
        const { user, text, timestamp } = message.val()
        const { key: _id } = message
        const createdAt = new Date(timestamp)

        return {
            _id,
            createdAt,
            text,
            user
        }
    }

    get = callback => {
        this.db.on('child_added', snapshot=>callback(this.parse(snapshot)))
    }

    off(){
        this.db.off()
    }

    get db() {
        return firebase.database().ref('messages')
    }

    get uid(){
        return (firebase.auth().currentUser || {}).uid
    }
}

export default new Fire()