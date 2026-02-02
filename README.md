# I'M ALIVE - Personal Safety Check-in App

## 🚀 Setup Instructions for Replit

### Step 1: Import to Replit

1. Go to https://replit.com
2. Click "Create Repl"
3. Choose "Import from GitHub" OR "Upload files"
4. Upload all these files

### Step 2: Install Dependencies

Replit should auto-install, but if not:
```bash
npm install
```

### Step 3: Configure Environment

The `.env` file already has your:
- ✅ Firebase credentials
- ✅ Telegram bot token

**Your Telegram Bot:**
- Username: @imalive_safety_bot
- Token: 8029502092:AAF0hWEo_-5NRJTn1wIB8HxBHZotLb5-NWU

### Step 4: Run the App

Click the green "Run" button in Replit!

The app will start on port 3000.

### Step 5: Test It

1. Open the app URL (Replit will show it)
2. Sign up with email/password
3. Add an emergency contact
4. Share Telegram bot link with them: https://t.me/imalive_safety_bot
5. They click "Start" in Telegram
6. Press the "I'M ALIVE" button
7. Your contact gets a Telegram message!

## 📱 Features

### Pages:
- 🏠 **Home** - Big "I'M ALIVE" button with countdown timer
- 👥 **Contacts** - Manage emergency contacts
- 📍 **Location** - Share live location (Premium)
- ⚙️ **Settings** - Configure check-in intervals and messages
- 👤 **Profile** - User account management

### Features:
- ✅ 4-hour check-in intervals (customizable: 1, 2, 4, 8, 12 hours)
- ✅ Telegram notifications to emergency contacts
- ✅ Missed check-in alerts
- ✅ Custom messages
- ✅ Dark mode (green/black theme)
- ✅ Mobile-friendly design
- ✅ User authentication with Firebase

## 🤖 How Telegram Works

When you add a contact:
1. They receive a Telegram bot link
2. They click the link → Opens Telegram
3. They press "Start"
4. Bot connects them to your account
5. When you check in → They get a message
6. When you miss check-in → They get an alert

## 🔥 Firebase Setup (Already Done!)

Your Firebase project: `imalive-app`
- Authentication: Enabled
- Firestore Database: Enabled
- All credentials configured

## 💡 Next Steps

After testing on Replit:
1. Deploy to Firebase Hosting (for custom domain)
2. Add WhatsApp integration (Phase 2)
3. Implement Premium features
4. Add payment processing

## 🆘 Troubleshooting

**Bot not responding?**
- Check if token is correct in .env file
- Make sure bot is running (server must be online)

**Can't login?**
- Check Firebase console for errors
- Verify email/password rules

**No notifications?**
- Contact must start the bot first
- Check Telegram bot is active

## 📞 Support

Need help? Check:
- Firebase Console: https://console.firebase.google.com
- Telegram BotFather: @BotFather
- Your bot: @imalive_safety_bot
