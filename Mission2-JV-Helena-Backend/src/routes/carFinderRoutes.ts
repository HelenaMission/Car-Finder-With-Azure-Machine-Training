import express from "express";
import { handleImage } from "../controllers/carFinderController";
import multer from "multer"; //middleware to handle file uploads. 

const carFinderRouter = express.Router(); //use to define routes
const upload = multer(); //store uploaded files in memory as buffers. responsible for parsing the uploaded image and making it available in the req.file object when the handle image function is excuted

carFinderRouter.post("/car_Finder", upload.single("image"), handleImage);

/* 
- Defindes a post route with the path
- uploading a single file name "image"
- when a request is made to this route, 
the uploaded image will be availbe as 'req.file' in the handleImage function 
- handleImage function: the callback function that will be executed 
when the route is accessed. (the function is imported form controller)
*/

export default carFinderRouter;
