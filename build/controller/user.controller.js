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
exports.search = exports.editAlias = void 0;
const user_1 = require("../model/user");
const editAlias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { u_idx, u_alias } = req.body;
        const result = yield user_1.Users.update({ u_alias }, { where: { u_idx } });
        const data = (yield user_1.Users.findOne({
            where: { u_idx: result[0] },
        }));
        const response = {
            result: 'success',
            data,
        };
        res.send(response);
    }
    catch (e) {
        console.log(e);
        let msg = '';
        if (typeof e === 'string') {
            msg = e;
        }
        else if (e instanceof Error) {
            msg = e.message;
        }
        const response = {
            result: 'fail',
            error: msg,
        };
        res.send(response);
    }
});
exports.editAlias = editAlias;
const search = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { u_id } = req.body;
    try {
        const data = (yield user_1.Users.findOne({ where: { u_id } }));
        const response = {
            result: 'success',
            data,
        };
        res.send(response);
    }
    catch (e) {
        console.log(e);
        let msg = '';
        if (typeof e === 'string') {
            msg = e;
        }
        else if (e instanceof Error) {
            msg = e.message;
        }
        const response = {
            result: 'fail',
            error: msg,
        };
        res.send(response);
    }
});
exports.search = search;
//# sourceMappingURL=user.controller.js.map