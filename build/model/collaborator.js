"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collaborator = void 0;
const sequelize_1 = require("sequelize");
const user_1 = require("./user");
const capsule_1 = require("./capsule");
const index_1 = require("./index");
class Collaborator extends sequelize_1.Model {
}
exports.Collaborator = Collaborator;
Collaborator.init({
    c_idx: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    u_idx: {
        type: sequelize_1.DataTypes.INTEGER,
    },
}, {
    modelName: 'Collaborator',
    tableName: 'collaborator',
    sequelize: index_1.sequelize,
    freezeTableName: true,
    timestamps: false,
});
Collaborator.belongsTo(user_1.Users, {
    foreignKey: 'u_idx',
});
Collaborator.belongsTo(capsule_1.Capsules, {
    foreignKey: 'c_idx',
});
//# sourceMappingURL=collaborator.js.map