# cloud computing 1

# IoT Device Management Application

This project is a simple IoT (Internet of Things) device management system built with Node.js and Express. It provides endpoints to register devices, send data from devices, and send commands to devices. The project also includes a front-end interface for interacting with these endpoints.



### Prerequisites

You'll need Node.js and npm installed on your machine. To install these, you can follow the instructions on the [Node.js website](https://nodejs.org/).

### Installing

Clone the repository to your local machine:


git clone https://github.com/kavithaG28/cloud
cd cloud

install the dependencies:
npm install

start server:
node server.js

The server will start running on http://localhost:3000.

Usage
The application supports the following endpoints:

POST /register: Register a new device with a deviceId and deviceType.
GET /show: Get a list of all registered devices.
POST /data: Send data from a device using its deviceId and the data you want to send.
POST /command: Send a command to a device using its deviceId and the command you want to send.
Using Postman to Test Endpoints
You can use Postman to test the endpoints by sending requests to http://localhost:3000 followed by the endpoint.

Built With
Node.js - The JavaScript runtime used
Express - The web framework used
npm - Dependency Management

Authord:
Kavitha Golla - kavithaG28.
