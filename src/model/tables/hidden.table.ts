import { Hidden } from '../hidden';

export const create_table_hidden = async () => {
  try {
    await Hidden.sync({ force: false });
    console.log('🚀 hidden table is created');
  } catch (e) {
    console.log('hidden table is created');
  }
};
