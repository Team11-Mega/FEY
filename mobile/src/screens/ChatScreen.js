import React, { useEffect, useState, Link } from 'react'
import { Platform, SafeAreaView, View, Image, Text, TouchableOpacity } from 'react-native'
import { GiftedChat, MessageText, InputToolbar, Switch, checked, Bubble } from 'react-native-gifted-chat'
// import Fire from './Fire'/
const customtInputToolbar = props => {
    return (
        <InputToolbar
            {...props}
            containerStyle={{
                backgroundColor: "white",
                borderRadius: 50,
                marginBottom: 10,
                marginLeft: 20,
                marginRight: 20,

            }}
        />
    );
};

let renderMessageText = (props, userID) => {
    //console.log(props)
    let { currentMessage, } = props;

    if (userID!= 1) {
        return (
            <View
                style={{
                    backgroundColor: "white",
                    padding: 20,
                    alignItems: "center",
                    borderTopRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                }}
            >
                <Text style={{ color: "white" }}>{currentMessage.text}</Text>
            </View>
        )
    }else{
        return(
            <View
            style={{
                backgroundColor: "#257B49",
                padding: 20,
                alignItems: "center",
                borderTopRightRadius: 5,
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 30,
            }}
        >
            <Text style={{ color: "white" }}>{currentMessage.text}</Text>
        </View>
        )
    }

}


// export default class ChatScreen extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { messages: [] };
//         this.onSend = this.onSend.bind(this);

//     }


//     componentWillMount() {
//         this.setState({
//             messages: [
//                 {
//                     _id: 2,
//                     text: 'Hello developer',
//                     createdAt: new Date(Date.UTC(2020, 5, 3, 1, 40, 0)),
//                     user: {
//                         _id: 2,
//                         name: 'React Native',
//                         avatar: 'https://facebook.github.io/react/img/logo_og.png',
//                     },
//                 },

//                 {
//                     _id: 3,
//                     text: 'Hello developer',
//                     createdAt: new Date(Date.UTC(2020, 5, 3, 1, 40, 0)),
//                     user: {
//                         _id: 2,
//                         name: 'React Native',
//                         avatar: 'https://facebook.github.io/react/img/logo_og.png',
//                     },
//                 },
//             ],
//         });

//     }
//     onSend(messages = []) {
//         console.log(this.props.state.name)
//         this.setState((previousState) => {
//             return {
//                 messages: GiftedChat.append(previousState.messages, messages),
//             };
//         });

//     }


//     render() {

//         return (
//             <GiftedChat

//                 messages={this.state.messages}
//                 onSend={this.onSend}
//                 renderMessageText={props => renderMessageText(props, props.user._id)}
//                 renderInputToolbar={props => customtInputToolbar(props)}
//                 placeholder="digite uma mensagem"
//                 user={{
//                     _id: 1,
//                 }}
//             />
//         );
//     }

// }


export default function ChatScreen() {

    const [messages, setMessages] = useState([])
    const [user, setUser] = useState({ _id: -1 })
    let m = [
        {
            _id: 2,
            text: 'Hello developer',
            createdAt: new Date(Date.UTC(2020, 5, 3, 1, 40, 0)),
            user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://facebook.github.io/react/img/logo_og.png',
            },
        },

        {
            _id: 3,
            text: 'Hello developer',
            createdAt: new Date(Date.UTC(2020, 5, 3, 1, 40, 0)),
            user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://facebook.github.io/react/img/logo_og.png',
            },
        },
    ]

    useEffect(() => {
        setMessages(m)
    }, [])

    function onSend(previousState = []) {
        setMessages(GiftedChat.append(previousState, messages, false))
        console.log(previousState[0].user)
        setUser(previousState[0].user)

    }
    return (
        <GiftedChat

            messages={messages}
            onSend={messages => onSend(messages)}
            renderMessageText={props => renderMessageText(props, props.user._id)}
            renderInputToolbar={props => customtInputToolbar(props)}
            placeholder="digite uma mensagem"
            user={{
                _id: 1,
            }}
        />

    )
}