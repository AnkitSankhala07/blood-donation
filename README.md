# 🩸 LifeLink - Blood Donation Management System

A **modern, full-stack blood donation platform** that connects blood donors with hospitals and patients needing blood transfusions. Built with Node.js, MongoDB, and a beautiful dark-themed UI.

![Status](https://img.shields.io/badge/status-active-success)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 🌟 Features

### 🏠 Home Page
- Dark hero section with urgent messaging
- **Live stats bar** showing total donors, lives saved, cities covered
- 4-card quick action grid for main features
- Responsive design with smooth animations

### 👥 Donor Management
**Register as Donor:**
- 3-step progress indicator
- 2-column form layout (name+email, phone+city)
- 8-button blood group selector
- Success toast notification
- Form validation

**View Donors:**
- Card-based layout with colored avatars
- Real-time filtering by blood group & city
- One-click phone contact button (`tel:` integration)
- Responsive grid layout

### 🚨 Blood Request Management
**Create Blood Request:**
- Prominent urgency toggle with visual feedback
- Dynamic form styling (red border when urgent)
- Auto-detect city feature (Geolocation + Nominatim reverse geocoding)
- 8-button blood group selector
- Form validation

**View Requests:**
- Request cards with all details
- Urgent requests pinned to top (auto-sorted)
- Relative timestamps ("2 hours ago", updates automatically)
- "I Can Help" CTA button with phone dialer
- Real-time filtering by urgency & blood group

### 🎨 UI/UX Highlights
- 🌑 Dark theme (#0d0d0d navbar, #ff4444 red accents)
- ✨ Smooth animations and transitions
- 📱 Mobile-responsive design (tested on all devices)
- 🔘 Custom CSS toggle switches
- 🏷️ Interactive filter chips
- 🔔 Toast notifications
- 📍 Geolocation integration
- 📞 Phone dialer links

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose ODM) |
| **Frontend** | EJS, HTML5, CSS3, Vanilla JavaScript |
| **Fonts** | Google Fonts (Sora - 400, 700, 800) |
| **APIs** | Browser Geolocation, OpenStreetMap Nominatim |
| **DevTools** | Nodemon, npm |

---

## 📦 Prerequisites

Before running the project, ensure you have:
- **Node.js** (v14.0.0 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (v4.0+) - [Download](https://www.mongodb.com/try/download/community)
- **npm** (comes with Node.js)
- **Git** for version control

---

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/blood-donation-app.git
cd blood-donation-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory:
```env
MONGO_URI=mongodb://127.0.0.1:27017/blood_donation
PORT=5000
```

### 4. Start MongoDB
```bash
mongod
```
(Run in a separate terminal)

### 5. Start the Server

**Development mode** (with auto-reload):
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

### 6. Access the App
Open your browser and navigate to:
```
http://localhost:5000
```

---

## 📁 Project Structure

```
blood_donation/
├── config/
│   └── db.js                      # MongoDB connection configuration
├── controllers/
│   ├── homeController.js          # Home page with stats aggregation
│   ├── donorController.js         # Donor CRUD operations
│   └── requestController.js       # Blood request operations
├── models/
│   ├── Donor.js                   # Donor schema with validation
│   └── BloodRequest.js            # Request schema with urgency flag
├── routes/
│   └── index.js                   # All application routes
├── views/
│   ├── layout.ejs                 # Master template (navbar, structure)
│   ├── home.ejs                   # Home with hero & stats
│   ├── add_donor.ejs              # Donor registration form
│   ├── donor_list.ejs             # Donor cards with filters
│   ├── request_blood.ejs          # Blood request form
│   └── request_list.ejs           # Request cards with filters
├── public/
│   ├── css/
│   │   └── style.css              # All styling (1000+ lines)
│   └── js/
│       └── main.js                # Global utilities
├── server.js                      # Entry point & Express config
├── package.json                   # Dependencies
├── .env                           # Environment variables (don't commit)
├── .gitignore                     # Git ignore rules
└── README.md                      # Documentation
```

---



## 🎯 Key Features Explained

### ✨ Live Stats Aggregation
The home controller calculates real-time statistics using MongoDB aggregation:
- **Total Donors:** Count of registered donors
- **Lives Saved:** Count of blood requests
- **Cities Covered:** Unique cities from donor database

### 🔴 Urgent Request Sorting
Requests are sorted automatically:
```javascript
sort({ is_urgent: -1, date_requested: -1 })
```
This ensures urgent requests always appear at the top.

### 📍 Geolocation & Reverse Geocoding
Uses browser Geolocation API + Nominatim (OpenStreetMap):
- Gets user's coordinates
- Reverse geocodes to city name
- Auto-fills form field
- Graceful fallback to manual entry

### ⏱️ Relative Timestamps
JavaScript function converts dates to human-readable format:
- "just now" → 0-30 seconds
- "5 minutes ago" → under 1 hour
- "2 hours ago" → hours
- Updates automatically every 60 seconds

### 🎨 Color-Coded Avatars
Avatar colors assigned based on first letter:
- 6-color palette for consistency
- Based on character code (`charCode % 6`)
- Enhances visual recognition

---

## 📱 Responsive Design

Fully responsive across all devices:
- **Desktop:** Full-featured layout with multi-column grids
- **Tablet:** 2-column grid becomes 1-column
- **Mobile:** Single column, full-width buttons, optimized touch targets

---


## 🔐 Security Notes

- `.env` file is in `.gitignore` - never commit secrets
- Email validation on donor registration
- Phone number validation
- MongoDB injection protection via Mongoose
- CORS headers can be added for API security

---

## 🐛 Troubleshooting

**MongoDB Connection Error**
```bash
# Make sure MongoDB is running
mongod

# Or check connection string in .env
MONGO_URI=mongodb://127.0.0.1:27017/blood_donation
```

**Port 5000 Already in Use**
```bash
# Find process using port 5000
netstat -ano | findstr :5000

# Kill process
taskkill /PID <PID> /F

# Or change PORT in .env
PORT=3000
```

**Geolocation Not Working**
- Check browser permissions (allow location)
- Must use HTTPS in production
- Falls back to manual entry if denied

---

## 📈 Future Enhancements

- 🔐 User authentication (login/signup)
- 📧 Email notifications for blood matches
- 🗺️ Google Maps integration
- 🔍 Advanced search with distance radius
- 📊 Admin dashboard with analytics
- 📱 Native mobile app (React Native)
- 🔄 Real-time updates (WebSockets)
- 💳 Payment integration for blood bank

---

## 📄 License

This project is licensed under the **MIT License** - see LICENSE file for details.

---

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📧 Contact

For questions or feedback:
- **Email:** ankitsankhala617@gmail.com
- **LinkedIn:** [Your LinkedIn](https://www.linkedin.com/in/Ankit-Sankhala7)
- **GitHub:** [@yourusername](https://github.com/AnkitSankhala07)

---

## 🙏 Acknowledgments

- **MongoDB** for powerful database
- **Express.js** for minimal web framework
- **OpenStreetMap Nominatim** for reverse geocoding
- **Google Fonts** for beautiful typography

---

### ⭐ If you found this project helpful, please give it a star! 🌟
