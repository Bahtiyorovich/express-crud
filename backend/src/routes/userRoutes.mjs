// /importing modules
import express from 'express';
import { signup, verifyEmail, login} from '../controllers/userController.mjs';
import userAuth from '../middlewares/userAuth.mjs';

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
router.post('/signup', userAuth.saveUser, signup)
router.post('/login', login)
router.get('/verify-email/:id/:token', verifyEmail)
//login route
export default router;