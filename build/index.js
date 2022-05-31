"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const model_1 = require("./model");
const user_table_1 = require("./model/tables/user.table");
const capsule_table_1 = require("./model/tables/capsule.table");
const collaborator_table_1 = require("./model/tables/collaborator.table");
const memoryImg_table_1 = require("./model/tables/memoryImg.table");
const memory_music_1 = require("./model/tables/memory.music");
const hidden_table_1 = require("./model/tables/hidden.table");
const memory_table_1 = require("./model/tables/memory.table");
const index_1 = require("./routes/index");
const PORT = 4000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: true,
    credentials: true,
}));
app.use(express_1.default.json());
app.use(express_1.default.static('./public'));
app.use('/api', index_1.router);
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(PORT, 'server start');
    try {
        yield model_1.sequelize.sync();
        console.log('db success');
        yield (0, user_table_1.create_table_users)();
        yield (0, capsule_table_1.create_table_capsules)();
        yield (0, collaborator_table_1.create_table_collaborator)();
        yield (0, memory_table_1.create_table_memory)();
        yield (0, memoryImg_table_1.create_table_memoryImg)();
        yield (0, memory_music_1.create_table_memory_music)();
        yield (0, hidden_table_1.create_table_hidden)();
    }
    catch (e) {
        console.log('db failed', e);
    }
}));
//# sourceMappingURL=index.js.map