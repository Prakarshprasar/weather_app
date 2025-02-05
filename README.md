# weather_app
# weather_app
# Weather Dashboard - React.js

A weather dashboard built using React.js that fetches real-time weather data from the OpenWeatherMap API. The app allows users to search for a city, view current weather details, and see a 5-day forecast. It also supports unit conversion between Celsius and Fahrenheit.

## Features

- **Current Weather**: Displays temperature, humidity, wind speed, and weather conditions.
- **5-Day Forecast**: Shows weather predictions for the next 5 days.
- **Unit Conversion**: Switch between Celsius and Fahrenheit.
- **Error Handling**: Displays user-friendly error messages for invalid city names or API failures.
- **URL Persistence**: Saves the selected city and unit in the URL for easy sharing and reloading.
- **Modern UI**: Responsive design with weather icons and a loading spinner.

## Technologies Used

- **React.js**: For building the user interface.
- **React Query**: For data fetching, caching, and polling.
- **Styled Components**: For styling the app.
- **OpenWeatherMap API**: For fetching weather data.
- **Vite**: For fast development and build tooling.

## Setup and Usage

**Clone the repository**:
   ```bash
   git clone https://github.com/your-username/weather-dashboard.git
   cd weather-dashboard
   npm i
   create .env file, and paste your valid api key with name VITE_API_KEY
   npm run dev




---

2. **Short Description of Approach**


```text
I approached the assignment by breaking it down into smaller, manageable tasks:

1. **Project Setup**: Used Vite for fast development and installed necessary dependencies like React Query and Styled Components.

2. **API Integration**: Integrated the OpenWeatherMap API to fetch real-time weather data and implemented polling to update the data every 30 seconds.

3. **State Management**: Used React Context API to manage global state for city, unit, weather data, and errors.

4. **URL Persistence**: Instead of using localStorage, I used URL parameters to persist the selected city and unit, making the app state shareable via the URL.

5. **UI Enhancements**: Added a modern, responsive design with weather icons, a loading spinner, and user-friendly error messages.

6. **Bonus Features**: Implemented a 5-day forecast and unit conversion between Celsius and Fahrenheit.

7. **Testing and Debugging**: Tested the app thoroughly to ensure all features work as expected and handled edge cases gracefully.

The app is fully functional, responsive, and ready for review. I hope you find it meets the requirements and demonstrates my skills effectively.
