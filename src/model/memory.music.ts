import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index';

interface MemoryMusicAttributes {
  link: string;
}

export class MemoryMusic extends Model<MemoryMusicAttributes> {
  public link!: string;
}

MemoryMusic.init(
  {
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
