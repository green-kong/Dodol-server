"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const sequelize_1 = require("sequelize");
const index_1 = require("./index"); //방금 만들어주었던 sequelize객체 임포트
class Users extends sequelize_1.Model {
}
exports.Users = Users;
Users.init({
    u_idx: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    u_id: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    u_alias: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    u_code: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
}, {
    modelName: 'Users',
    tableName: 'user',
    sequelize: index_1.sequelize,
    freezeTableName: true,
    timestamps: true,
});
//# sourceMappingURL=user.js.map