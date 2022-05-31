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
exports.list = exports.create = void 0;
const memory_1 = require("../model/memory");
const memory_img_1 = require("../model/memory.img");
const memory_music_1 = require("../model/memory.music");
const user_1 = require("../model/user");
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = req.body, { music } = _a, rest = __rest(_a, ["music"]);
    try {
        const result = yield memory_1.Memory.create(rest);
        const files = req.files;
        files
            .map((v) => v.filename)
            .forEach((v) => __awaiter(void 0, void 0, void 0, function* () {
            yield memory_img_1.MemoryImg.create({ m_idx: result.m_idx, img: v });
        }));
        yield memory_music_1.MemoryMusic.create({ m_idx: result.m_idx, link: music });
        const response = {
            result: 'success',
            data: null,
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
exports.create = create;
const list = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield memory_1.Memory.findAll({
            where: req.body,
            include: [
                {
                    model: user_1.Users,
                    attributes: ['u_alias'],
                },
                {
                    model: memory_music_1.MemoryMusic,
                    attributes: ['link'],
                },
                {
                    model: memory_img_1.MemoryImg,
                    attributes: ['img'],
                },
            ],
        });
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
exports.list = list;
//# sourceMappingURL=memory.controller.js.map