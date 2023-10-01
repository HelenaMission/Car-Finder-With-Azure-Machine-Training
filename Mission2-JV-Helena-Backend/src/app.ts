import express from "express"; // Express web application framework
import bodyParser from "body-parser"; // Middleware for parsing incoming request bodies in different format, such as JSON 
import carFinderRouter from "./routes/carFinderRoutes"; // import router
const cors = require("cors"); // Middleware for enabling cross-origin resource sharing to allow request from different domains

//Enable express
const app = express(); // creates an instance of the express application
require("dotenv").config(); // loads configuration into process.env

// Middlewares
app.use(cors({ origin: "http://localhost:3000" })); //middleware to enable CORS for express app. configuration allows requests from the specified origin to access the server.  
app.use(bodyParser.json()); //middleware to parse incoming JSON request bodies. This makes the request body data available in req.body for routes that handle JSON data. 

app.use("/", carFinderRouter); //Mount the router on the root path

const PORT = process.env.PORT || 4000; // Defines the port number which will listne on
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`); // once the server is up and running, it logs a message
});
