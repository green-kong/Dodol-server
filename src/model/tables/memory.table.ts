import { Memory } from '../memory';

export const create_table_memory = async () => {
  try {
    await Memory.sync({ force: false });
    console.log('🚀 memory table is created');
  } catch (e) {
    console.log('memory table is not created', e);
  }
};
