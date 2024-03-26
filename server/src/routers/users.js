import {Router} from "express";
import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import {verifyToken} from "../middleware/users.js";
import {login, register} from "../controllers/auth.js";
import {deleteAccount, getUserData, updateUserSettings} from "../controllers/users.js";
// import jsonwebtoken;

const router = Router ();
mongoose.set("strictQuery", false);

router.get('/', verifyToken, getUserData);
//ノート： patch: 特定なフィールドを変えるときにしか使わない ; put：レコードの全部を更新するとき
router.post('/login', login);
router.post('/register', register);
router.patch('/', verifyToken, updateUserSettings);


router.delete('/:id', verifyToken, deleteAccount);

export default router;