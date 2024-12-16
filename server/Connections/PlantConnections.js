require('dotenv').config({ path: './.env' });

const Plant = require('../Schema/PlantSchema')

const receiveData = async (req, res) => {
    const { wetness, temperature, humidity } = req.body;

    // Validate the data
    if (!wetness || !temperature || !humidity) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        // Create a new document and save it
        const plantData = new Plant({ wetness, temperature, humidity });
        await plantData.save();
        console.log('Data saved to MongoDB:', plantData);

        res.status(201).json({ message: 'Data received and stored successfully' });
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ error: 'Failed to save data' });
    }
};

const getData = async (req, res) => {
    console.log("This function will get all plant data from DB")

    try {  
        const response = await Plant.find()
        res.status(200).json(response) 

    } catch(error){
        console.error('Error getting data:', error);
        res.status(500).json({ error: 'Failed to get data from DB' });
    }
}

module.exports ={
    receiveData,
    getData
}
