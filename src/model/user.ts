import { DataTypes, Model, Association } from 'sequelize';
import { sequelize } from './index'; //방금 만들어주었던 sequelize객체 임포트

interface UsersAttributes {
  u_idx: number;
  u_id: string;
  u_alias: string;
  u_code: Date;
}

export class Users extends Model<UsersAttributes> {
  public readonly u_idx!: number;
  public u_id!: string;
  public u_alias!: string;
  public u_code!: Date;
  public readonly createdAt!: Date; //굳이 안넣어줘도 될 것 같지만 공식문서에 있으니깐 일단 넣어줌.
  public readonly updatedAt!: Date; //굳이 안넣어줘도 될 것 같지만 공식문서에 있으니깐 일단 넣어줌.
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
    u_code: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    modelName: 'Users',
    tableName: 'user',
    sequelize,
    freezeTableName: true,
    timestamps: true,
  }
);
