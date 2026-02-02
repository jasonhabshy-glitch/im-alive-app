# 🚀 DEPLOY TO RENDER.COM - COMPLETE GUIDE

## ✅ What You Need:
- GitHub account (free)
- Render.com account (free)
- 10 minutes

---

## 📋 STEP-BY-STEP DEPLOYMENT

### **STEP 1: Create a GitHub Repository**

1. Go to https://github.com
2. Click the **"+"** icon → **"New repository"**
3. Name it: `imalive-app`
4. Keep it **Public** (free)
5. Click **"Create repository"**

### **STEP 2: Upload Your Code to GitHub**

**Option A: Using GitHub Web Interface (Easiest)**
1. In your new repo, click **"uploading an existing file"**
2. Drag and drop ALL these files:
   - `server.js`
   - `package.json`
   - `README.md`
   - `render.yaml`
   - The entire `public` folder
   - **DO NOT upload `.env`** (we'll add these as secrets)
3. Click **"Commit changes"**

**Option B: Using Git Command Line**
```bash
cd imalive-replit-project
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/imalive-app.git
git push -u origin main
```

---

### **STEP 3: Deploy on Render.com**

1. Go to https://render.com
2. Click **"Get Started"** → Sign up with GitHub (easiest)
3. Click **"New +"** → **"Web Service"**
4. Click **"Connect GitHub"** → Select your `imalive-app` repository
5. Fill in the details:

   **Name:** `imalive-app` (or anything you want)
   
   **Environment:** `Node`
   
   **Build Command:** `npm install`
   
   **Start Command:** `npm start`
   
   **Instance Type:** Select **FREE**

6. Click **"Advanced"** and add these **Environment Variables**:

   ```
   TELEGRAM_BOT_TOKEN = 8029502092:AAF0hWEo_-5NRJTn1wIB8HxBHZotLb5-NWU
   FIREBASE_API_KEY = AIzaSyCjM8GeHs-baysTgN2HCj5JRgX4X4wOx1E
   FIREBASE_AUTH_DOMAIN = imalive-app.firebaseapp.com
   FIREBASE_PROJECT_ID = imalive-app
   FIREBASE_STORAGE_BUCKET = imalive-app.firebasestorage.app
   FIREBASE_MESSAGING_SENDER_ID = 252241342603
   FIREBASE_APP_ID = 1:252241342603:web:279a9edd032a7c8ee8e48e
   NODE_ENV = production
   PORT = 3000
   ```

7. Click **"Create Web Service"**

---

### **STEP 4: Wait for Deployment**

- Render will build and deploy your app (takes 2-5 minutes)
- Watch the logs - you'll see:
  ```
  🚀 Server running on port 3000
  🤖 Telegram bot is active!
  ```
- Your app URL will be: `https://imalive-app-XXXX.onrender.com`

---

### **STEP 5: Test Your App**

1. Open your Render URL
2. Sign up with email/password
3. Add an emergency contact
4. Test the Telegram bot!

---

## 🔄 KEEP YOUR FREE APP AWAKE (Important!)

Render's free tier sleeps after 15 minutes of inactivity. Here's how to keep it alive:

### **Option 1: Use UptimeRobot (Free & Easy)**

1. Go to https://uptimerobot.com
2. Sign up (free)
3. Add New Monitor:
   - **Type:** HTTP(s)
   - **URL:** Your Render app URL
   - **Monitoring Interval:** 5 minutes
4. Click **"Create Monitor"**

**Done!** UptimeRobot will ping your app every 5 minutes to keep it awake.

### **Option 2: Use Cron-Job.org (Free Alternative)**

1. Go to https://cron-job.org
2. Sign up (free)
3. Create new cron job:
   - **URL:** Your Render app URL
   - **Interval:** Every 14 minutes
4. Save

---

## 🎯 YOUR APP IS NOW LIVE 24/7 (for FREE!)

Your final setup:
- ✅ App hosted on Render.com (FREE)
- ✅ Kept alive by UptimeRobot (FREE)
- ✅ No credit card needed
- ✅ Works 24/7

---

## 🛠 TROUBLESHOOTING

### **App won't start?**
- Check the logs in Render dashboard
- Make sure all environment variables are added correctly
- Verify Telegram bot token is correct

### **Telegram bot not responding?**
- Make sure the app is running (check Render logs)
- Test the bot directly: https://t.me/imalive_safety_bot
- Send `/start` command

### **App keeps sleeping?**
- Set up UptimeRobot monitoring
- Make sure interval is less than 15 minutes

---

## 📞 NEED HELP?

- **Render Docs:** https://render.com/docs
- **Telegram Bot:** @imalive_safety_bot
- **Your Firebase Console:** https://console.firebase.google.com

---

## 🎉 NEXT STEPS

After deployment works:
1. Customize your check-in intervals
2. Invite emergency contacts
3. Test missed check-in alerts
4. Share with friends/family who need safety check-ins

**Your app is ready to save lives! 🚀**
