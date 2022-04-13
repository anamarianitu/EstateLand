package com.estate.demo.controller;

import com.estate.demo.model.ChatMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class ChatResource {

//    @MessageMapping("/chat.register")
//    @SendTo("/topic/public")
//    public ChatMessage register(@Payload ChatMessage chatMessage, SimpleMessageHeaderAccessor )



    @MessageMapping("/chat.send")
    @SendTo("/topic/public")
    public ChatMessage greeting(ChatMessage message) throws Exception {
        return message;
    }
}
