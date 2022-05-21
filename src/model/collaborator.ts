import { Model } from 'sequelize';
import { Users } from './user';
import { Capsules } from './capsule';
import { sequelize } from './index';

interface CollaboratorAttributes {}

export class Collaborator extends Model<CollaboratorAttributes> {}

Collaborator.init(
  {},
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

Collaborator.belongsTo(Capsules, {
  foreignKey: 'c_idx',
});
