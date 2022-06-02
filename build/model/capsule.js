"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Capsules = void 0;
const sequelize_1 = require("sequelize");
const index_1 = require("./index");
const user_1 = require("./user");
class Capsules extends sequelize_1.Model {
}
exports.Capsules = Capsules;
Capsules.init({
    c_idx: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    c_generator: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    c_title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    c_content: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    c_openAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    c_location: {
        type: sequelize_1.DataTypes.STRING,
    },
    c_thumb: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    modelName: 'Capsules',
    tableName: 'capsule',
    sequelize: index_1.sequelize,
    freezeTableName: true,
    timestamps: true,
});
Capsules.belongsTo(user_1.Users, {
    foreignKey: 'c_generator',
});
//# sourceMappingURL=capsule.js.map