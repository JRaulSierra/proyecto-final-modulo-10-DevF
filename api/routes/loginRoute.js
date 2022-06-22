import { Router } from 'express';
import { loginController } from '../controllers/index.js';
import { loggedIn, registerUser } from '../middlewares/index.js';

const router = Router();

router.post('/login', loggedIn, loginController.login);
router.post('/registerLogin', registerUser, loginController.register);
export { router };
