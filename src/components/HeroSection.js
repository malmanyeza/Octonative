import React, { useState } from "react";
import styled from "styled-components";
import backgroundImage from "../assets/pawel-czerwinski-4-Lo8Pkxs_s-unsplash.jpg";

const HeroSection = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    const input = e.target.elements.message.value.trim();
    if (!input) return;

    // Add user message
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);

    // Simulate AI response
    setTimeout(() => {
      setMessages([...newMessages, { sender: "ai", text: "Hello! How can I assist you?" }]);
    }, 1000);

    e.target.elements.message.value = "";
  };

  const handlePromptClick = (prompt) => {
    // When a prompt is clicked, simulate sending that prompt
    const newMessages = [...messages, { sender: "user", text: prompt }];
    setMessages(newMessages);
    setTimeout(() => {
      setMessages([...newMessages, { sender: "ai", text: "Hello! How can I assist you?" }]);
    }, 1000);
  };

  return (
    <ChatContainer>
      <ChatBox>
        <MessagesContainer>
          {messages.length === 0 ? (
            <PromptsContainer>
              <PromptCard onClick={() => handlePromptClick("What is Octonative? Learn about our mission, vision, and innovative digital solutions that drive transformation.")}>
                What is Octonative? Learn about our mission, vision, and innovative digital solutions that drive transformation.
              </PromptCard>
              <PromptCard onClick={() => handlePromptClick("Tell me about your services. Discover our range of tech solutions and expert consulting to empower your business.")}>
                Tell me about your services. Discover our range of tech solutions and expert consulting to empower your business.
              </PromptCard>
              <PromptCard onClick={() => handlePromptClick("How can I get started? Find out how to engage with our team and launch your digital journey.")}>
                How can I get started? Find out how to engage with our team and launch your digital journey.
              </PromptCard>
            </PromptsContainer>
          ) : (
            messages.map((msg, index) => (
              <Message key={index} sender={msg.sender}>
                {msg.text}
              </Message>
            ))
          )}
        </MessagesContainer>
        <ChatInput onSubmit={handleSendMessage}>
          <InputWrapper>
            <InputField type="text" name="message" placeholder="Type your message..." />
            <SendIcon type="submit">➤</SendIcon>
          </InputWrapper>
        </ChatInput>
      </ChatBox>
    </ChatContainer>
  );
};

/* Styled Components */

const ChatContainer = styled.section`
  min-height: 100vh;
  box-sizing: border-box;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${backgroundImage}) no-repeat center center/cover;
  color: white;
`;

const ChatBox = styled.div`
  max-width: 1200px;
  width: 90%;
  height: 500px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 15px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px 0;
  margin-bottom: 15px;
`;

const PromptsContainer = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: nowrap; /* Arrange horizontally */
  margin-top: 40px;  /* Position lower within the chatbox */
`;

const PromptCard = styled.div`
  background: rgba(255, 255, 255, 0.2);
  width: 300px;
  height: 150px;
  padding: 15px 30px;
  border: 1px solid rgba(255, 255, 255, 0.3); /* Very thin, faint border */
  border-radius: 12px;
  font-size: 1rem;
  text-align: center;
  cursor: pointer;
  transition: background 0.3s;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;

const Message = styled.div`
  background: ${({ sender }) => (sender === "user" ? "#ff4081" : "#3c096c")};
  color: white;
  padding: 12px 18px;
  border-radius: 12px;
  margin: 6px 0;
  align-self: ${({ sender }) => (sender === "user" ? "flex-end" : "flex-start")};
  max-width: 80%;
  font-size: 1.1rem;
`;

const ChatInput = styled.form`
  align-self: center;
  display: flex;
  width: 80%;
  margin-top: auto;
`;

const InputWrapper = styled.div`
  position: relative;
  flex: 1;
`;

const InputField = styled.input`
  width: 100%;
  padding: 12px 50px 12px 12px; /* extra right padding for the icon */
  border: none;
  border-radius: 20px; /* increased border radius */
  font-size: 1.1rem;
  outline: none;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const SendIcon = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: #ff4081;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
  &:hover {
    color: white;
  }
`;

export default HeroSection;
