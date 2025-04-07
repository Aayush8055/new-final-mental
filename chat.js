 const chatMessages = document.getElementById('chatbot-messages');
const chatInput = document.getElementById('chatbot-input');
const sendMessageBtn = document.getElementById('send-message');

function addMessage(text, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
    messageDiv.textContent = text;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage() {
    const message = chatInput.value.trim();
    if (message) {
        addMessage(message, true);
        chatInput.value = '';
        
        setTimeout(() => {
            const responses = [
                "I hear you. Can you tell me more about how you're feeling?",
                "That's interesting. How has this been affecting you?",
                "I understand. Have you noticed any patterns with these feelings?",
                "Thank you for sharing. What would you like to focus on today?",
                "I appreciate you opening up about this. Let's explore this further."
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            addMessage(randomResponse, false);
        }, 1000);
    }
}

sendMessageBtn.addEventListener('click', sendMessage);

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Initial message
addMessage("Hello! I'm here to help you with your mental wellness. What's on your mind today?", false);