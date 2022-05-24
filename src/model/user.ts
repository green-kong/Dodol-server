import { DataTypes, Model, Association } from 'sequelize';
import { sequelize } from './index'; //방금 만들어주었던 sequelize객체 임포트

interface UsersAttributes {
  u_idx: number;
  u_id: string;
  u_alias: string;
}

export class Users extends Model<UsersAttributes> {
  public readonly u_idx!: number;
  public u_id!: string;
  public u_alias!: string;
}

Users.init(
  {
    u_idx: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    u_id: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    u_alias: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  {
    modelName: 'Users',
    tableName: 'user',
    sequelize,
    freezeTableName: true,
    timestamps: false,
  }
);
