document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat-form');
    const messageInput = document.getElementById('message-input');
    const messages = document.getElementById('messages');

    // Load messages from localStorage
    loadMessages();

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const messageText = messageInput.value.trim();
        if (messageText !== '') {
            addMessage(messageText);
            saveMessage(messageText);
            messageInput.value = '';
        }
    });

    function addMessage(text) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = text;
        messages.appendChild(messageElement);
        messages.scrollTop = messages.scrollHeight;
    }

    function saveMessage(text) {
        const chatHistory = getChatHistory();
        chatHistory.push(text);
        localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
    }

    function loadMessages() {
        const chatHistory = getChatHistory();
        chatHistory.forEach((message) => addMessage(message));
    }

    function getChatHistory() {
        const chatHistory = localStorage.getItem('chatHistory');
        return chatHistory ? JSON.parse(chatHistory) : [];
    }
});
