import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index';
import { Memory } from './memory';

interface MemoryImgAttributes {
  img: string;
}

export class MemoryImg extends Model<MemoryImgAttributes> {
  public img!: string;
}

MemoryImg.init(
  {
    img: {
      type: DataTypes.STRING,
    },
  },
  {
    modelName: 'MemoryImg',
    tableName: 'memoryImg',
    sequelize,
    freezeTableName: true,
    timestamps: false,
  }
);

MemoryImg.belongsTo(Memory, {
  foreignKey: 'm_idx',
});
