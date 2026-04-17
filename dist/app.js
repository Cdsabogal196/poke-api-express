"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pokemon_routes_1 = __importDefault(require("./routes/pokemon.routes"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/', pokemon_routes_1.default);
app.use('/auth', auth_routes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map