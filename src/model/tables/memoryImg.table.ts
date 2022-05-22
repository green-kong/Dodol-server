import { MemoryImg } from '../memory.img';

export const create_table_memoryImg = async () => {
  try {
    MemoryImg.sync({ force: false });
    console.log('🚀 memory img table is created');
  } catch (e) {
    console.log('memory img table in not created');
  }
};
