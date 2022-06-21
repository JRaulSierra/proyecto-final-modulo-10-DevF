import  express  from "express";
import { userController } from "../controllers";
import { registerUser } from "../middlewares";

const router = express.Router();

router.post('/register', registerUser ,userController.createUser);
router.delete('/user/:id', userController.deleteCliente);

export default router;