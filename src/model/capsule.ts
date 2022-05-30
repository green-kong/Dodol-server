import { DataTypes, Model, Association } from 'sequelize';
import { sequelize } from './index';
import { Users } from './user';

interface CapsulesAttribute {
  c_idx: number;
  c_title: string;
  c_content: string;
  c_thumb: string | null;
  c_openAt: Date;
  c_location: string | null;
  c_generator: number;
  isOpened: Boolean;
}

export class Capsules extends Model<CapsulesAttribute> {
  public readonly c_idx!: number;
  public c_title!: string;
  public c_content!: string;
  public c_openAt!: Date;
  public c_thumb!: string | null;
  public c_location!: string | null;
  public c_generator!: number;
  public isOpened!: Boolean;
}

Capsules.init(
  {
    c_idx: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    c_generator: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    c_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    c_content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    c_openAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    c_location: {
      type: DataTypes.STRING,
    },
    c_thumb: {
      type: DataTypes.STRING,
    },
    isOpened: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    modelName: 'Capsules',
    tableName: 'capsule',
    sequelize,
    freezeTableName: true,
    timestamps: true,
  }
);

Capsules.belongsTo(Users, {
  foreignKey: 'c_generator',
  onDelete: 'SET NULL',
});

Users.hasMany(Capsules, {
  foreignKey: 'c_generator',
  sourceKey: 'u_idx',
  onDelete: 'SET NULL',
});
