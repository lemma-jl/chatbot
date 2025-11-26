# AI Chatbot Component

A beautiful, interactive AI chatbot component designed to look like a robot with a magnifying glass. The chatbot appears in the bottom right corner of the webpage and opens a chat window when clicked.

## Features

- 🤖 **Robot Design**: Custom-designed robot icon with magnifying glass
- 💬 **Chat Interface**: Modern, message-style chat window
- 📱 **Responsive**: Works on desktop and mobile devices
- ✨ **Smooth Animations**: Elegant transitions and animations
- 🎨 **Modern UI**: Clean, gradient-based design
- ⌨️ **Keyboard Support**: Press Enter to send messages

## Files

- `chatbot.html` - HTML structure
- `chatbot.css` - Styling and animations
- `chatbot.js` - JavaScript functionality

## Integration

### Option 1: Standalone HTML Page
Simply open `chatbot.html` in a browser to see the chatbot in action.

### Option 2: Integrate into Existing Website

1. **Copy the HTML structure** from `chatbot.html`:
   - Copy the `#chatbot-container` div and all its contents
   - Paste it before the closing `</body>` tag of your website

2. **Include the CSS**:
   ```html
   <link rel="stylesheet" href="chatbot.css">
   ```

3. **Include the JavaScript**:
   ```html
   <script src="chatbot.js"></script>
   ```

### Option 3: React/Vue/Angular Integration

The chatbot can be easily converted to a component for your framework. The core structure is framework-agnostic.

## Customization

### Colors
Edit the gradient colors in `chatbot.css`:
- `.chatbot-button` - Button gradient
- `.chat-header` - Header gradient
- `.user-message .message-content` - User message gradient

### API Integration
Replace the `getBotResponse()` function in `chatbot.js` with your actual AI API call. There's a commented example function `getAIResponse()` that shows how to make an API request.

### Initial Message
Change the initial bot message in `chatbot.html`:
```html
<p>What can I help you with?</p>
```

### Position
Adjust the position in `chatbot.css`:
```css
#chatbot-container {
    bottom: 20px;  /* Distance from bottom */
    right: 20px;   /* Distance from right */
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Free to use and modify for your projects.

