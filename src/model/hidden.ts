import { DataTypes, Model } from 'sequelize';
import { sequelize } from '.';
import { Capsules } from './capsule';
import { Users } from './user';

interface HiddenAttributes {
  u_idx: number;
  c_idx: number;
}

export class Hidden extends Model<HiddenAttributes> {
  public u_idx!: number;
  public c_idx!: number;
}

Hidden.init(
  {
    u_idx: {
      type: DataTypes.INTEGER,
    },
    c_idx: {
      type: DataTypes.INTEGER,
    },
  },
  {
    modelName: 'Hidden',
    tableName: 'hidden',
    sequelize,
    freezeTableName: true,
    timestamps: false,
  }
);

Hidden.belongsTo(Users, {
  foreignKey: 'u_idx',
});

Hidden.belongsTo(Capsules, {
  foreignKey: 'c_idx',
});

Users.hasMany(Hidden, {
  foreignKey: 'u_idx',
  sourceKey: 'u_idx',
});

Capsules.hasMany(Hidden, {
  foreignKey: 'c_idx',
  sourceKey: 'c_idx',
});
