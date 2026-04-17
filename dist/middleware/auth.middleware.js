"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authmiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authmiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: 'No token provided' });
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, "secretkey");
        req.user = decoded;
        next();
    }
    catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};
exports.authmiddleware = authmiddleware;
//# sourceMappingURL=auth.middleware.js.map