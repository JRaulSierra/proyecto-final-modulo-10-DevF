import  express  from "express";
import { userController } from "../controllers/index.js";
import { registerUser } from "../middlewares/index.js";

const router = express.Router();

router.post('/register', registerUser ,userController.createUser);
router.delete('/user/:id', userController.deleteUser);

export { router };