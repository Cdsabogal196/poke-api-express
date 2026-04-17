import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';

export const authmiddleware = (req: Request, res: Response, next: NextFunction) => {

    const authHeader= req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({message: 'No token provided'});
    }
    const token = authHeader.split(' ')[1];

    if(!token){
        return res.status(401).json({message: 'No token provided'});
    }

    try {
        const decoded = jwt.verify(token, "secretkey");
        (req as any).user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({message: 'Invalid token'});
    }
    

}