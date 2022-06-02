"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryMusic = void 0;
const sequelize_1 = require("sequelize");
const index_1 = require("./index");
const memory_1 = require("./memory");
class MemoryMusic extends sequelize_1.Model {
}
exports.MemoryMusic = MemoryMusic;
MemoryMusic.init({
    m_idx: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    link: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    modelName: 'MemoryMusic',
    tableName: 'memoryMusic',
    sequelize: index_1.sequelize,
    freezeTableName: true,
    timestamps: false,
});
MemoryMusic.belongsTo(memory_1.Memory, {
    foreignKey: 'm_idx',
});
memory_1.Memory.hasOne(MemoryMusic, {
    foreignKey: 'm_idx',
    sourceKey: 'm_idx',
});
//# sourceMappingURL=memory.music.js.map