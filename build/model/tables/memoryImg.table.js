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
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_table_memoryImg = void 0;
const memory_img_1 = require("../memory.img");
const create_table_memoryImg = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        memory_img_1.MemoryImg.sync({ force: false });
        console.log('🚀 memory img table is created');
    }
    catch (e) {
        console.log('memory img table in not created');
    }
});
exports.create_table_memoryImg = create_table_memoryImg;
//# sourceMappingURL=memoryImg.table.js.map