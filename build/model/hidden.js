"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hidden = void 0;
const sequelize_1 = require("sequelize");
const _1 = require(".");
const capsule_1 = require("./capsule");
const user_1 = require("./user");
class Hidden extends sequelize_1.Model {
}
exports.Hidden = Hidden;
Hidden.init({
    u_idx: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    c_idx: {
        type: sequelize_1.DataTypes.INTEGER,
    },
}, {
    modelName: 'Hidden',
    tableName: 'hidden',
    sequelize: _1.sequelize,
    freezeTableName: true,
    timestamps: false,
});
Hidden.belongsTo(user_1.Users, {
    foreignKey: 'u_idx',
});
Hidden.belongsTo(capsule_1.Capsules, {
    foreignKey: 'c_idx',
});
user_1.Users.hasMany(Hidden, {
    foreignKey: 'u_idx',
    sourceKey: 'u_idx',
});
capsule_1.Capsules.hasMany(Hidden, {
    foreignKey: 'c_idx',
    sourceKey: 'c_idx',
});
//# sourceMappingURL=hidden.js.map