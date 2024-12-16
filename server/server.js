require("dotenv").config({ path: './.env' });

const express = require('express')
const cors = require('cors')

const plantRoutes = require('./routes/plantRoutes.js')

const PORT = 3000
const app = express();

// Use CORS middleware
app.use(cors({
    origin: 'http://localhost:5173/', // Allow this origin to access the server
    methods: ['GET', 'POST'], // Specify methods you want to allow
    credentials:true
}));

app.use(express.json());

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

app.use('/api', plantRoutes)


// Set up routes
app.get('/', (req, res) => {
    res.send("Welcome to the API!");
});

// connect to db
const mongoose = require('mongoose')
mongoose.connect(process.env.MONG_URI)
    .then(()=>{
        // start listen for requests
        app.listen(PORT, '0.0.0.0', () => {
            console.log(`Server running on port ${PORT} and accessible within the local network.`);
        });
    })
    .catch((error)=>{console.log(error)})
