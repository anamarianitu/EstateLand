import React, { useState, useEffect } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import "./Chat.css"
import AuthService from "../../../services/auth.service"


const ENDPOINT = "http://localhost:8080/ws";

function Chat() {

    const [stompClient, setStompClient] = useState(null);
    const [chatToDisplay, setChatToDisplay] = useState([]);
    const [msgToSend, setSendMessage] = useState({
        content: "",
        username: AuthService.getCurrentAdmin().username
    });
    const chatMessages = new Array();

    function onConnect() {
        const socket = SockJS(ENDPOINT);
        const stompClient = Stomp.over(socket);
        stompClient.connect({}, () => {
            // subscribe to the backend
            stompClient.subscribe('/topic/public', (data) => {
                onMessageReceived(data);
                chatMessages.push(JSON.parse(data.body));
                setChatToDisplay(chatMessages);
            });
        });
        setStompClient(stompClient);
    }

    useEffect(() => {
        onConnect();
    }, []);


    // display the received data
    function onMessageReceived(data) {
        const result = JSON.parse(data.body);
    };

    function send() {
        stompClient.send("/app/chat.send", {}, JSON.stringify({ 'content': msgToSend.content, 'username': msgToSend.username }));
        chatMessages.push(msgToSend.content);
        setChatToDisplay(chatMessages);
    }

    return (
        <div className="home">
            <div className="userTitleContainer">
                <h1 style={{ marginLeft: '30px' }} className="userTitle">Personal Chat</h1>
            </div>

            <div className='chatMessageContainer'>
                {
                    chatToDisplay.map((item) => {
                        return (<div className='singleMessageContainer'>
                            <h4>Username: {item.username}</h4>
                            <p key={item}>{item.content}</p>
                            {console.log(item.username)}
                        </div>);
                    })
                }
                {/* <p>{chatMessages[0]}</p> */}
                <div className='chatMessageActions'>
                    <input className='chatMessageInput' onChange={(event) => setSendMessage({ ...msgToSend, content: event.target.value })} placeholder='Type your message here...'></input>

                    <button className='buttonSendChatMessage userAddButton' onClick={send}>Send Message</button>

                </div>
            </div>
        </div>
    )
}

export default Chat
