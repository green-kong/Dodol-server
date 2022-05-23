import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index';
import { Memory } from './memory';

interface MemoryImgAttributes {
  m_idx: number;
  img: string;
}

export class MemoryImg extends Model<MemoryImgAttributes> {
  public m_idx!: number;
  public img!: string;
}

MemoryImg.init(
  {
    m_idx: {
      type: DataTypes.INTEGER,
    },
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

Memory.hasMany(MemoryImg, {
  foreignKey: 'm_idx',
  sourceKey: 'm_idx',
});
