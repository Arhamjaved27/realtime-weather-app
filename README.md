# 🌤️ Weather App

A beautiful, modern weather application built with React that provides real-time weather information for any city worldwide. Features a stunning UI with dynamic background images that change based on weather conditions.

## ✨ Features

- **Real-time Weather Data**: Get current weather information for any city worldwide
- **Dynamic Backgrounds**: Background images automatically change based on weather conditions (sunny, cloudy, rainy, snowy, thunder, night)
- **Comprehensive Weather Details**: 
  - Current temperature and condition
  - Humidity percentage
  - Wind speed
  - Cloud cover
  - Feels like temperature
  - Visibility
  - UV Index
- **Quick City Access**: Pre-configured quick access buttons for popular cities
- **Search Functionality**: Search for weather in any city by name
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI/UX**: Beautiful gradient cards with glassmorphism effects and smooth animations
- **Error Handling**: User-friendly error messages for invalid cities and API issues
- **Loading States**: Smooth loading indicators while fetching weather data

## 🚀 Technologies Used

- **React** (v19.2.0) - Frontend framework
- **CSS3** - Styling with modern features (gradients, animations, glassmorphism)
- **WeatherAPI.com** - Weather data provider
- **React Hooks** - State management (useState)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn package manager
- A WeatherAPI.com account (free tier available)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Arhamjaved27/realtime-weather-app.git
   cd task-23-weather-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_API_KEY=your_api_key_here
   ```
   
   To get your API key:
   - Visit [WeatherAPI.com](https://www.weatherapi.com/)
   - Sign up for a free account
   - Navigate to your dashboard to get your API key
   - Replace `your_api_key_here` with your actual API key

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   
   The app will automatically open at `http://localhost:3000`

## 📖 Usage

1. **Search for a City**
   - Type the city name in the search box
   - Press Enter or click the search button
   - View the weather information displayed in a beautiful card

2. **Quick City Access**
   - Click on any of the pre-configured city buttons (Sambrial, Sialkot, Islamabad, Lahore, New York, London, Tokyo, Sydney)
   - Instantly view weather for that city

3. **View Weather Details**
   - Current temperature with weather icon
   - Weather condition description
   - Detailed metrics in an organized grid layout

## 🏗️ Project Structure

```
task-23-weather-app/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── Assets/              # Background images
│   │   ├── sunny.jpg
│   │   ├── cloudy.jpg
│   │   ├── rainy.jpg
│   │   ├── snow.jpg
│   │   ├── thunder.jpg
│   │   ├── night.jpg
│   │   └── default.jpg
│   ├── Components/
│   │   ├── Navbar.js        # Navigation component
│   │   ├── Navbar.css
│   │   ├── SearchBox.js     # Search input component
│   │   ├── SearchBox.css
│   │   ├── WeatherCard.js   # Main weather display card
│   │   ├── WeatherCard.css
│   │   ├── Loader.js        # Loading spinner
│   │   └── Loader.css
│   ├── App.js               # Main application component
│   ├── App.css              # Main app styles
│   ├── index.js             # Entry point
│   └── index.css            # Global styles
├── .env                     # Environment variables (not in git)
├── .gitignore
├── package.json
└── README.md
```

## 🎨 Features in Detail

### Weather Card
- **Wide horizontal layout** for better information organization
- **Two-column design**: Main weather info on the left, detailed stats on the right
- **Glassmorphism effects** with backdrop blur
- **Hover animations** on detail cards
- **Responsive grid layout** for weather statistics

### Dynamic Backgrounds
The app automatically changes the background image based on:
- Time of day (night/day)
- Weather conditions (sunny, cloudy, rainy, snowy, thunder)

### Error Handling
- Invalid city names
- API rate limits
- Network errors
- Clear, user-friendly error messages

## 🔐 Environment Variables

The application uses environment variables to securely store the API key. Make sure to:

1. Create a `.env` file in the root directory
2. Add your API key: `REACT_APP_API_KEY=your_key_here`
3. Never commit the `.env` file to version control (already in `.gitignore`)


## 🌐 API Information

This project uses [WeatherAPI.com](https://www.weatherapi.com/) for weather data.

**API Endpoint**: `https://api.weatherapi.com/v1/current.json`

**Features**:
- Free tier available
- Real-time weather data
- Global coverage
- No credit card required for free tier

## 🚀 Build for Production

To create a production build:

```bash
npm run build
```

This creates an optimized production build in the `build/` directory.

## 🧪 Testing

Run the test suite:

```bash
npm test
```

## 📝 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Creates a production build
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (irreversible)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available for personal and educational use.

## 👨‍💻 Developer

**Developed by Arham**

---

---

**Note**: Make sure to keep your API key secure and never expose it in public repositories. The `.env` file is already included in `.gitignore` for your protection.

