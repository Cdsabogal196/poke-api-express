"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const database_1 = require("./config/database");
const app_1 = __importDefault(require("./app"));
database_1.AppDataSource.initialize().then(() => {
    app_1.default.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
});
//# sourceMappingURL=index.js.map