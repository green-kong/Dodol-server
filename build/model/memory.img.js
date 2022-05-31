"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryImg = void 0;
const sequelize_1 = require("sequelize");
const index_1 = require("./index");
const memory_1 = require("./memory");
class MemoryImg extends sequelize_1.Model {
}
exports.MemoryImg = MemoryImg;
MemoryImg.init({
    m_idx: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    img: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    modelName: 'MemoryImg',
    tableName: 'memoryImg',
    sequelize: index_1.sequelize,
    freezeTableName: true,
    timestamps: false,
});
MemoryImg.belongsTo(memory_1.Memory, {
    foreignKey: 'm_idx',
});
memory_1.Memory.hasMany(MemoryImg, {
    foreignKey: 'm_idx',
    sourceKey: 'm_idx',
});
//# sourceMappingURL=memory.img.js.map