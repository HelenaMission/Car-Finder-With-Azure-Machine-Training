import axios from "axios"; //axios library. HTTP client for making req to APIs and servers

// Define constants
const carMakeApi =
  "https://australiaeast.api.cognitive.microsoft.com/customvision/v3.0/Prediction/2cc008b9-dce4-47d0-b564-b136defda947/detect/iterations/carMakeIteration7/image";
const carModelApi =
  "https://australiaeast.api.cognitive.microsoft.com/customvision/v3.0/Prediction/d2f42496-7b60-4fc7-97a5-f3bd070ec545/detect/iterations/carModelIteration3/image";
const predictionKey = "fc3396495c99401fbdb0f6593a944298";


export const carMakeSearcher = async (buffer: Buffer) => { //takes a buffer argument (object representing the image data) 
  const res = await axios.post(carMakeApi, buffer, { //axios.post() to make a POST request to carMakeApi endpoint 
    headers: {
      "Content-Type": "application/octet-stream", // indicating binary data
      "Prediction-Key": predictionKey, // pass the prediction key for authentication
    },
  });
  return res.data; // response from the API is stored in the res variable, and 'res.data' is returned from the function.
};

export const carModelSearcher = async (buffer: Buffer) => {
  const res = await axios.post(carModelApi, buffer, {
    headers: {
      "Content-Type": "application/octet-stream",
      "Prediction-Key": predictionKey,
    },
  });
  return res.data;
};

/* 
The 'buffer' containing the image data is sent as the request payload.
The headers include the necessary authentication informatio. 
The responses from the API are returned as the results of the respective functions
*/