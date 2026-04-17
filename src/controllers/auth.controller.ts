import {Request, Response} from 'express';
import jwt from 'jsonwebtoken';

export class AuthController { 
    
    async login (req: Request, res: Response) {
    const {username, password} = req.body;

    if(username === 'admin' && password === 'password'){
        const token = jwt.sign(
            {user: username},
            "secretkey"
        
        )
        return res.json({token});
    }

    return res.status(401).json({message: 'Invalid credentials'});

}}

