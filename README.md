# Plant Monitor 🌱  

A smart plant monitoring system that tracks soil wetness, temperature, and humidity using a Raspberry Pi and displays real-time data through a modern web interface.  

This project is inspired by the **Plant Monitor Kit** from MonkMakes ([see here](https://monkmakes.com/pmon)).  

## Features  
- Measure soil wetness, temperature, and humidity with sensors.  
- Real-time data transmission over WiFi using a Node.js server.  
- Persistent data storage in MongoDB.  
- Automatic chart updates on the React-based frontend using Pusher.  

## Materials  
- MonkMakes Plant Monitor Kit sensors for wetness, temperature, and humidity.  
- Raspberry Pi Zero 2W.
- Plant  

## Process  
1. **Hardware Setup:**  
   - Assembled and configured the monitor with the Raspberry Pi.  

2. **Backend Development:**  
   - Created a Node.js backend to receive data from the Raspberry Pi.  
   - Stored the data in a MongoDB database.  

3. **Frontend Development:**  
   - Developed a React-based frontend to display live charts.  
   - Used Pusher for real-time updates.  

4. **Code Modification:**  
   - Adapted the original code from the MonkMakes Plant Monitor ([repository here](https://github.com/monkmakes/pmon)).  
   - Modified it to send sensor data over WiFi to the Node.js server instead of displaying it locally on the dashboard.  

## Future Enhancements
* Add notifications for critical soil conditions. I haven't decided yet how this should be done, but I'm thinking of:
  - boring: sending myself an email / setting up a home assistant notification to tell me to water my plant
  - over the top: creating a twitter account for my plant and generating tweets crafted by ChatGPT at random intervals (or when my plant is thirsty) 
* Add a solar panel to power the Pi.
