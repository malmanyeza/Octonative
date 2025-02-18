import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import backgroundImage from "../assets/pawel-czerwinski-4-Lo8Pkxs_s-unsplash.jpg";

const HeroSection = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    const input = e.target.elements.message.value.trim();
    if (!input) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);

    setTimeout(() => {
      setMessages([...newMessages, { sender: "ai", text: "Hello! How can I assist you?" }]);
    }, 1000);

    e.target.elements.message.value = "";
  };

  const handlePromptClick = (prompt) => {
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
            <>
              <PromptsContainer>
                <PromptCard onClick={() => handlePromptClick("Hey there! I'm your expert from Octonative. Want to know how we can transform your business with our cutting-edge solutions? 🚀💡")}>Hey there! I'm your expert from Octonative. Want to know how we can transform your business with our cutting-edge solutions? 🚀💡</PromptCard>
                <PromptCard onClick={() => handlePromptClick("Curious about what we do? Let me walk you through our innovative services and how we help businesses grow effortlessly. 🤔📈")}>Curious about what we do? Let me walk you through our innovative services and how we help businesses grow effortlessly. 🤔📈</PromptCard>
                <PromptCard onClick={() => handlePromptClick("You're in the right place! Let's chat about your ideas, and I'll show you how Octonative can bring them to life. 💬✨")}>You're in the right place! Let's chat about your ideas, and I'll show you how Octonative can bring them to life. 💬✨</PromptCard>
            </PromptsContainer>

              <Statement>
                <i style={{ fontSize: "1.2rem" }}>
                  "You dream it, we build it. Let’s turn your vision into reality with seamless digital solutions."
                </i>
              </Statement>


            </>
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

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ChatContainer = styled.section`
  min-height: 100vh;
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
  flex-wrap: nowrap;
  margin-top: 40px;
`;

const PromptCard = styled.div`
  background: rgba(255, 255, 255, 0.2);
  width: 300px;
  height: 200px;
  padding: 15px 30px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  font-size: 1rem;
  text-align: center;
  cursor: pointer;
  transition: background 0.3s;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  font-family: 'Sora', sans-serif; /* Applying Sora font */
  justify-content: center;
  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;

const Statement = styled.h2`
  margin-top: 40px;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: white;
  opacity: 0;
  animation: ${fadeIn} 1.5s ease-in-out forwards;
  font-family: 'Anton', sans-serif; /* Applying Anton font */
`;

const Message = styled.div`
  display: flex;
  flex-direction: ${({ sender }) => (sender === "user" ? "row" : "row-reverse")}; /* User starts from left, AI from right */
  align-items: center;
  margin: 6px 0;
  padding: 12px;
  border-radius: 12px;
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  align-self: ${({ sender }) => (sender === "user" ? "flex-end" : "flex-start")}; /* User aligned far right, AI aligned left */
  max-width: ${({ sender }) => (sender === "user" ? "70%" : "100%")}; /* User's message has 70% width, AI spans 100% */

  /* User message box styling */
  ${({ sender }) =>
    sender === "user" &&
    `
      background: transparent; /* Transparent background for user message */
      color: black; /* Black text color for user */
      border: 2px solid #ccc; /* Border for user message */
      align-self: flex-end; /* Ensures the user's message is aligned to the far right */
    `}
  
  /* AI message styling */
  ${({ sender }) =>
    sender === "ai" &&
    `
      background: none; /* No background for AI message */
      color: white; /* White text for AI */
      position: relative;
      padding-left: 50px; /* Space for the vertical line */
      &:before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 2px;
        background: rgba(255, 255, 255, 0.3); /* Faint vertical line */
        border-radius: 3px;
      }
    `}
  
  /* Avatar for AI message */
  ${({ sender }) =>
    sender === "ai" &&
    `
      .avatar {
        width: 35px;
        height: 35px;
        top: -20px; /* Adjust avatar position */
        left: 15px; /* Adjust avatar position */
        background: url(${({ logo }) => logo || "default-logo.png"}) no-repeat center;
        background-size: cover;
      }
    `}
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
  font-family: 'Poppins', sans-serif; /* Applying Poppins */
`;

const InputField = styled.input`
  width: 100%;
  padding: 12px 50px 12px 12px;
  border: none;
  border-radius: 20px;
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
  color:rgb(19, 210, 224);
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

export default HeroSection;