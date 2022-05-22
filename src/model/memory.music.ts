import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index';
import { Memory } from './memory';

interface MemoryMusicAttributes {
  m_idx: number;
  link: string;
}

export class MemoryMusic extends Model<MemoryMusicAttributes> {
  public m_idx!: number;
  public link!: string;
}

MemoryMusic.init(
  {
    m_idx: {
      type: DataTypes.INTEGER,
    },
    link: {
      type: DataTypes.STRING,
    },
  },
  {
    modelName: 'MemoryMusic',
    tableName: 'memoryMusic',
    sequelize,
    freezeTableName: true,
    timestamps: false,
  }
);

MemoryMusic.belongsTo(Memory, {
  foreignKey: 'm_idx',
});
