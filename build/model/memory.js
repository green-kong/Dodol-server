"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Memory = void 0;
const sequelize_1 = require("sequelize");
const index_1 = require("./index");
const user_1 = require("./user");
const capsule_1 = require("./capsule");
class Memory extends sequelize_1.Model {
}
exports.Memory = Memory;
Memory.init({
    m_idx: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    m_content: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    modelName: 'Memory',
    tableName: 'memory',
    sequelize: index_1.sequelize,
    freezeTableName: true,
    timestamps: false,
});
Memory.belongsTo(user_1.Users, {
    foreignKey: 'm_author',
});
Memory.belongsTo(capsule_1.Capsules, {
    foreignKey: 'c_idx',
});
//# sourceMappingURL=memory.js.map