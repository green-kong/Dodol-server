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
exports.create_table_memory = void 0;
const memory_1 = require("../memory");
const create_table_memory = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield memory_1.Memory.sync({ force: false });
        console.log('🚀 memory table is created');
    }
    catch (e) {
        console.log('memory table is not created', e);
    }
});
exports.create_table_memory = create_table_memory;
//# sourceMappingURL=memory.table.js.map