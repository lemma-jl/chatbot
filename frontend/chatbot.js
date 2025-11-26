// Chatbot functionality
document.addEventListener('DOMContentLoaded', function() {
    const chatbotButton = document.getElementById('chatbot-button');
    const chatWindow = document.getElementById('chat-window');
    const closeChat = document.getElementById('close-chat');
    const chatInput = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-btn');
    const chatMessages = document.getElementById('chat-messages');

    // Toggle chat window
    chatbotButton.addEventListener('click', function() {
        chatWindow.classList.toggle('chat-window-hidden');
        chatWindow.classList.toggle('chat-window-visible');
        if (chatWindow.classList.contains('chat-window-visible')) {
            chatInput.focus();
        }
    });

    // Close chat window
    closeChat.addEventListener('click', function() {
        chatWindow.classList.remove('chat-window-visible');
        chatWindow.classList.add('chat-window-hidden');
    });

    // Send message function
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message === '') return;

        // Add user message
        addMessage(message, 'user');
        chatInput.value = '';

        // Show typing indicator
        showTypingIndicator();

        // Simulate bot response (replace with actual API call)
        setTimeout(() => {
            hideTypingIndicator();
            const botResponse = getBotResponse(message);
            addMessage(botResponse, 'bot');
        }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
    }

    // Add message to chat
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;

        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';

        const p = document.createElement('p');
        p.textContent = text;

        contentDiv.appendChild(p);
        messageDiv.appendChild(contentDiv);
        chatMessages.appendChild(messageDiv);

        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Show typing indicator
    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing-indicator';
        typingDiv.id = 'typing-indicator';
        typingDiv.innerHTML = '<span></span><span></span><span></span>';
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Hide typing indicator
    function hideTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    // Get bot response (replace with actual AI API integration)
    function getBotResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();

        // Sample responses based on keywords
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
            return "Hello! I'm here to help you navigate the Mapping Global China platform. What would you like to know?";
        } else if (lowerMessage.includes('belt') || lowerMessage.includes('road') || lowerMessage.includes('bri')) {
            return "The Belt and Road Initiative (BRI) is a global development strategy. You can explore BRI projects and investments on the map. Would you like to know more about specific regions or sectors?";
        } else if (lowerMessage.includes('investment') || lowerMessage.includes('invest')) {
            return "You can view investment data by country, sector, and time period using the timeline and filters. The map shows investment locations with different colored markers. What specific investment information are you looking for?";
        } else if (lowerMessage.includes('map') || lowerMessage.includes('geography')) {
            return "The interactive map displays global investment data. You can zoom, pan, and click on markers to see detailed information. Use the timeline to filter by year. How can I help you explore the map?";
        } else if (lowerMessage.includes('sector') || lowerMessage.includes('industry')) {
            return "The platform tracks investments across various sectors including infrastructure, energy, transportation, healthcare, and more. Use the sidebar icons to filter by sector. Which sector interests you?";
        } else if (lowerMessage.includes('country') || lowerMessage.includes('region')) {
            return "You can explore investments by country or region on the map. Click on any marker to see detailed information about projects in that location. Which country or region would you like to learn about?";
        } else if (lowerMessage.includes('time') || lowerMessage.includes('year') || lowerMessage.includes('timeline')) {
            return "Use the timeline at the bottom to filter data by year range (2000-2024). You can drag the slider or use the playback controls to see how investments have changed over time.";
        } else if (lowerMessage.includes('help') || lowerMessage.includes('how')) {
            return "I can help you understand how to use the Mapping Global China platform. You can ask me about: the map features, investment data, specific countries or sectors, the timeline, or how to navigate the site. What would you like to know?";
        } else if (lowerMessage.includes('research') || lowerMessage.includes('data')) {
            return "The platform provides comprehensive research data on global investments. You can access detailed reports, statistics, and visualizations. Check out the Research section in the navigation bar for more resources.";
        } else {
            return "I understand you're asking about: \"" + userMessage + "\". While I'm still learning, I can help you navigate the Mapping Global China platform. Try asking about the map, investments, countries, sectors, or timeline features. How else can I assist you?";
        }
    }

    // Send message on button click
    sendButton.addEventListener('click', sendMessage);

    // Send message on Enter key
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Close chat when clicking outside (optional)
    document.addEventListener('click', function(e) {
        if (chatWindow.classList.contains('chat-window-visible')) {
            if (!chatWindow.contains(e.target) && !chatbotButton.contains(e.target)) {
                // Uncomment the line below if you want to close on outside click
                // chatWindow.classList.remove('chat-window-visible');
                // chatWindow.classList.add('chat-window-hidden');
            }
        }
    });
});

// Function to integrate with actual AI API (replace getBotResponse with this)
async function getAIResponse(userMessage) {
    try {
        // Replace with your actual API endpoint
        const response = await fetch('YOUR_API_ENDPOINT', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: userMessage,
                context: 'Mapping Global China platform'
            })
        });
        
        const data = await response.json();
        return data.response || "I'm sorry, I couldn't process that request.";
    } catch (error) {
        console.error('Error fetching AI response:', error);
        return "I'm having trouble connecting right now. Please try again later.";
    }
}

