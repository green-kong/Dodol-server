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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hidden = exports.create = exports.list = void 0;
const capsule_1 = require("../model/capsule");
const collaborator_1 = require("../model/collaborator");
const sequelize_1 = require("sequelize");
const hidden_1 = require("../model/hidden");
const list = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('check');
    const { u_idx } = req.body;
    try {
        const collarborator = (yield collaborator_1.Collaborator.findAll({ where: { u_idx } })).map((v) => v.c_idx);
        const tmp = yield capsule_1.Capsules.findAll({
            where: {
                [sequelize_1.Op.or]: [
                    { c_generator: u_idx },
                    { c_idx: { [sequelize_1.Op.or]: collarborator } },
                ],
            },
        });
        const hiddenTmp = yield hidden_1.Hidden.findAll({
            where: { u_idx },
            attributes: ['c_idx'],
        });
        const hiddenIdx = hiddenTmp.map((v) => v.c_idx);
        const data = tmp.filter((v) => !hiddenIdx.includes(v.c_idx));
        const response = {
            result: 'success',
            data,
        };
        res.send(response);
    }
    catch (e) {
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
exports.list = list;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = req.body, { collaborator } = _a, rest = __rest(_a, ["collaborator"]);
    try {
        const result = yield capsule_1.Capsules.create(rest);
        collaborator.forEach((v) => __awaiter(void 0, void 0, void 0, function* () {
            yield collaborator_1.Collaborator.create({ c_idx: result.c_idx, u_idx: v });
        }));
        const response = {
            result: 'success',
            data: null,
        };
        res.send(response);
    }
    catch (e) {
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
exports.create = create;
const hidden = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield hidden_1.Hidden.create(req.body);
        const response = {
            result: 'success',
            data: null,
        };
        res.send(response);
    }
    catch (e) {
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
exports.hidden = hidden;
//# sourceMappingURL=capsule.controller.js.map