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
exports.create_table_capsules = void 0;
const capsule_1 = require("../capsule");
const create_table_capsules = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield capsule_1.Capsules.sync({ force: false });
        console.log('🚀 capsule table is created');
    }
    catch (e) {
        console.log('capsul table is not created', e);
    }
});
exports.create_table_capsules = create_table_capsules;
//# sourceMappingURL=capsule.table.js.map