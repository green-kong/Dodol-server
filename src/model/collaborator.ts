import { DataTypes, Model } from 'sequelize';
import { Users } from './user';
import { Capsules } from './capsule';
import { sequelize } from './index';

interface CollaboratorAttributes {
  c_idx: number;
  u_idx: number;
}

export class Collaborator extends Model<CollaboratorAttributes> {
  public c_idx!: number;
  public u_idx!: number;
}

Collaborator.init(
  {
    c_idx: {
      type: DataTypes.INTEGER,
    },
    u_idx: {
      type: DataTypes.INTEGER,
    },
  },
  {
    modelName: 'Collaborator',
    tableName: 'collaborator',
    sequelize,
    freezeTableName: true,
    timestamps: false,
  }
);

Collaborator.belongsTo(Users, {
  foreignKey: 'u_idx',
});

Users.hasMany(Collaborator, {
  foreignKey: 'u_idx',
  sourceKey: 'u_idx',
});

Collaborator.belongsTo(Capsules, {
  foreignKey: 'c_idx',
});

Capsules.hasMany(Collaborator, {
  foreignKey: 'c_idx',
  sourceKey: 'c_generator',
});
