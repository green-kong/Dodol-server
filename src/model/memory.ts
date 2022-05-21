import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index';
import { Users } from './user';
import { Capsules } from './capsule';

interface MemoryAttributes {
  m_idx: number;
  content: string;
}

export class Memory extends Model<MemoryAttributes> {
  public readonly m_idx!: number;
  public content!: string;
}

Memory.init(
  {
    m_idx: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.STRING,
    },
  },
  {
    modelName: 'Memory',
    tableName: 'memory',
    sequelize,
    freezeTableName: true,
    timestamps: false,
  }
);

Memory.belongsTo(Users, {
  foreignKey: 'm_author',
});

Memory.belongsTo(Capsules, {
  foreignKey: 'c_idx',
});
