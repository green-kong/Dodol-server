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
exports.create_table_users = void 0;
const user_1 = require("../../model/user"); //방금 만들어준 user model
const create_table_users = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield user_1.Users.sync({ force: false });
        console.log('🚀 user table is created!');
    }
    catch (e) {
        console.log('user table is not created!');
    }
});
exports.create_table_users = create_table_users;
//# sourceMappingURL=user.table.js.map