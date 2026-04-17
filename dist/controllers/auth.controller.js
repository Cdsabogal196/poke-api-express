"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthController {
    async login(req, res) {
        const { username, password } = req.body;
        if (username === 'admin' && password === 'password') {
            const token = jsonwebtoken_1.default.sign({ user: username }, "secretkey");
            return res.json({ token });
        }
        return res.status(401).json({ message: 'Invalid credentials' });
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map