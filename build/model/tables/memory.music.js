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
exports.create_table_memory_music = void 0;
const memory_music_1 = require("../memory.music");
const create_table_memory_music = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield memory_music_1.MemoryMusic.sync({ force: false });
        console.log('🚀 Memory Music table is created');
    }
    catch (e) {
        console.log('Memory Music table is not created', e);
    }
});
exports.create_table_memory_music = create_table_memory_music;
//# sourceMappingURL=memory.music.js.map