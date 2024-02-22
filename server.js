const express = require('express');
const app = express();
const port = 3000;

// Import the device management functions
const { registerDevice, getDevices, logData } = require('./deviceManager');

app.use(express.json());
app.use(express.static('public'));

// Endpoint to register a new device
app.post('/register', async (req, res) => {
    try {
        const { deviceId, deviceType } = req.body;
        if (!deviceId || !deviceType) {
            return res.status(400).send('Device ID and Type are required.');
        }
        await registerDevice(deviceId, deviceType);
        res.status(201).send('Device registered successfully.');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Endpoint to display all registered devices
app.get('/show', async (req, res) => {
    try {
        const devices = await getDevices();
        res.status(200).json(devices);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Endpoint for devices to send data
app.post('/data', async (req, res) => {
    try {
        const { deviceId, data } = req.body;
        if (!deviceId || !data) {
            return res.status(400).send('Device ID and Data are required.');
        }
        await logData(`Data from ${deviceId}: ${JSON.stringify(data)}`);
        res.status(200).send('Data received successfully.');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Endpoint to send commands to devices
app.post('/command', async (req, res) => {
    try {
        const { deviceId, command } = req.body;
        if (!deviceId || !command) {
            return res.status(400).send('Device ID and Command are required.');
        }
        await logData(`Command to ${deviceId}: ${command}`);
        res.status(200).send('Command sent successfully.');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
