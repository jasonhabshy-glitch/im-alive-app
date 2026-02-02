require('dotenv').config();
const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Telegram Bot Setup
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

// Store user chat IDs (in production, use Firebase)
const userChatIds = new Map();

// Telegram Bot Commands
bot.onText(/\/start(.*)/, (msg, match) => {
  const chatId = msg.chat.id;
  const userId = match[1].trim(); // Get userId from deep link
  
  userChatIds.set(userId || chatId.toString(), chatId);
  
  bot.sendMessage(chatId, 
    `✅ Welcome to I'M ALIVE Safety Bot!\n\n` +
    `You're now connected and will receive safety check-in alerts.\n\n` +
    `Your connection ID: ${chatId}\n\n` +
    `Share this with the person who added you as their emergency contact.`,
    {
      reply_markup: {
        keyboard: [[{ text: '✅ I\'m Connected' }]],
        resize_keyboard: true
      }
    }
  );
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  
  if (msg.text && msg.text.includes('Connected')) {
    bot.sendMessage(chatId, '👍 Great! You\'ll receive alerts when your contact checks in or misses a check-in.');
  }
});

// API Endpoints

// Send check-in notification
app.post('/api/send-checkin', async (req, res) => {
  try {
    const { chatId, userName, message, timestamp } = req.body;
    
    if (!chatId) {
      return res.status(400).json({ error: 'Chat ID required' });
    }
    
    const alertMessage = 
      `✅ CHECK-IN RECEIVED\n\n` +
      `${userName} is safe!\n\n` +
      `Message: "${message}"\n` +
      `Time: ${new Date(timestamp).toLocaleString()}\n\n` +
      `All is well! 😊`;
    
    await bot.sendMessage(chatId, alertMessage);
    
    res.json({ success: true, message: 'Check-in sent' });
  } catch (error) {
    console.error('Error sending check-in:', error);
    res.status(500).json({ error: error.message });
  }
});

// Send missed check-in alert
app.post('/api/send-alert', async (req, res) => {
  try {
    const { chatId, userName, lastCheckIn, location } = req.body;
    
    if (!chatId) {
      return res.status(400).json({ error: 'Chat ID required' });
    }
    
    const alertMessage = 
      `⚠️ MISSED CHECK-IN ALERT\n\n` +
      `${userName} has not checked in!\n\n` +
      `Last check-in: ${new Date(lastCheckIn).toLocaleString()}\n` +
      `Status: Overdue\n\n` +
      `Please try contacting them immediately.`;
    
    const options = {
      reply_markup: {
        inline_keyboard: [[
          { text: '📞 Call Now', url: `tel:${req.body.phone || ''}` },
          { text: '✅ Mark as Safe', callback_data: 'mark_safe' }
        ]]
      }
    };
    
    await bot.sendMessage(chatId, alertMessage, options);
    
    if (location) {
      await bot.sendLocation(chatId, location.latitude, location.longitude);
    }
    
    res.json({ success: true, message: 'Alert sent' });
  } catch (error) {
    console.error('Error sending alert:', error);
    res.status(500).json({ error: error.message });
  }
});

// Test connection endpoint
app.get('/api/test-bot', async (req, res) => {
  try {
    const botInfo = await bot.getMe();
    res.json({ 
      success: true, 
      bot: botInfo,
      message: 'Bot is running!' 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get bot invite link
app.get('/api/bot-link', (req, res) => {
  const botUsername = 'imalive_safety_bot'; // Your bot username
  const userId = req.query.userId || '';
  const link = `https://t.me/${botUsername}?start=${userId}`;
  res.json({ link });
});

// Serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🤖 Telegram bot is active!`);
  console.log(`📱 Bot username: @imalive_safety_bot`);
});

// Handle callback queries
bot.on('callback_query', (query) => {
  const chatId = query.message.chat.id;
  
  if (query.data === 'mark_safe') {
    bot.answerCallbackQuery(query.id, { text: 'Marked as safe!' });
    bot.sendMessage(chatId, '✅ Contact marked as safe. Alert cancelled.');
  }
});

// Error handling
bot.on('polling_error', (error) => {
  console.error('Telegram polling error:', error);
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
});

process.on('unhandledRejection', (error) => {
  console.error('Unhandled Rejection:', error);
});
