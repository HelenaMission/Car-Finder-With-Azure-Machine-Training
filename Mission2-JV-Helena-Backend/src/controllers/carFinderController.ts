import { Request, Response } from "express";
import {
  carMakeSearcher,
  carModelSearcher,
} from "../services/carFinderService";

export const handleImage = async (req: Request, res: Response) => { // take two parameter : req & res -express request object
  try {
    // object provided by the multer middleware to access the uploaded file's buffer.
    // req.file!.buffer is used to access the buffer
    // ! assertes req.file is not 'null' or 'undefined'
    const arrayBuffer = req.file!.buffer;
    const buffer = Buffer.from(arrayBuffer); //buffer object: converts arrayBuffer in a regular Node.js 'Buffer'
    const carMakePredic = await carMakeSearcher(buffer); // passing buffer(the image buffer) as an argument
    const carModelPredic = await carModelSearcher(buffer); // passing buffer(the image buffer) as an argument

    res.json({
      carMakePredic,
      carModelPredic,
    }); // send a JSON response using res.json - response contains the predictions from those two functions. 
  } catch (error) {
    res.status(500).json({ error: "An error occurred" }); // error handling
  }
};
