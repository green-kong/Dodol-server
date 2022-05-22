import { MemoryMusic } from '../memory.music';

export const create_table_memory_music = async () => {
  try {
    await MemoryMusic.sync({ force: false });
    console.log('🚀 Memory Music table is created');
  } catch (e) {
    console.log('Memory Music table is not created', e);
  }
};
