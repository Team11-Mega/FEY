import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'
export default StyleSheet.create({
    
    
    containe: {
        flex: 1,
        backgroundColor:"#ffffff",
        alignItems:"center"
        
    },

    header: {
        flex:2,       
        backgroundColor:"#035121",
        height:300,
        width:'100%',
        justifyContent: "center",
        padding:50,       
        alignItems: 'center'
    },

    loginContainer: {
        flex: 2,
        padding: 10,
        height:10,
        backgroundColor: "#ffffff",
        marginBottom: 0,
        position:"relative",
        marginTop: 20,
        paddingBottom: 0,
        
    },

    title: {
        fontSize: 21,
        color: "white",
        textAlign: 'center',
        fontWeight: "bold",
        
    },


    title_login: {
        fontSize: 19,
        color: "black",
        fontWeight: "bold",
        marginTop: 90,
    },


    contactBox: {
        padding: 19,
        borderRadius: 8,
        backgroundColor: "#fff",
        marginBottom: 16,
        elevation: 30,

    },

    input: {
        width: '100%',
        fontSize: 18,
        borderRadius: 20,
        height: 60,
        borderWidth: 1,
        marginTop: 20,
        padding: 10,
        backgroundColor:"#ffffff"

    },

    image: {
        flex: 1,
        resizeMode: "stretch",

    },


    actions: {
        flex:3,
        marginTop:20,
        height:100,
        width:'100%',
        alignItems:"center"
     
    },

    actions2: {
        flex:3,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        height:25,
        width:'100%',

    },

    action: {
        flex:4,
        backgroundColor: "#487848",
        borderRadius: 20,
        height: 50,
        width: '100%',
        justifyContent:"center",
        alignItems: 'center',
        marginTop: 0,

    },
     text2:{
         marginTop:10,
         fontSize:20,
         fontWeight:"bold",
         color:"#000000",
         
        },

    action2: {
        backgroundColor: "#ffffff",
        borderRadius: 20,
        height: 50,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginLeft:15,
       
    },

   textStyle:{
      color:"#ffffff",
      marginTop:0,
     
   },

     actionText: {
        color: "#FFF",
        fontSize: 21,
        fontWeight: 'bold'
    },
    creatText: {
        marginTop: 10,
        color: "black",
        fontSize: 14,
    },

    progress: {
        zIndex: 1,
        justifyContent: 'center',

    },
    tinyLogo: {
        width: 100,
        height: 100,
        borderRadius:10,
        marginTop:30,
        marginBottom:30  
      },

      footer:{
        flex:5,
        justifyContent: 'center',
        
        height:100,
        width:'100%',
        alignItems:"center"  
      },

      imgbtn: {
        width: 20,
        height: 20,
        borderRadius:8,
               
      },
})