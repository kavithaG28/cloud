const fs = require('fs').promises;
const devicesFile = 'devices.json';
const logFile = 'logs.txt';

async function registerDevice(deviceId, deviceType) {
    let devices = await getDevices();
    if (devices.some(device => device.deviceId === deviceId)) {
        throw new Error('Device already exists.');
    }
    devices.push({ deviceId, deviceType });
    await saveDevices(devices);
    await logData(`Registered device: ${deviceId} of type: ${deviceType}`);
}

async function getDevices() {
    try {
        let devices = await fs.readFile(devicesFile, 'utf8');
        return JSON.parse(devices);
    } catch (err) {
        if (err.code === 'ENOENT') {
            // File does not exist, return an empty array
            return [];
        } else {
            // Some other error occurred
            throw err;
        }
    }
}

async function saveDevices(devices) {
    await fs.writeFile(devicesFile, JSON.stringify(devices, null, 4), 'utf8');
}

async function logData(message) {
    const timestamp = new Date();
    const logEntry = `${timestamp.toISOString()}: ${message}\n`;
    await fs.appendFile(logFile, logEntry, 'utf8');
}

module.exports = {
    registerDevice,
    getDevices,
    logData
};
