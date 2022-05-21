import { Capsules } from '../capsule';

export const create_table_capsules = async () => {
  try {
    await Capsules.sync({ force: true });
    console.log('capsule table is created');
  } catch (e) {
    console.log('capsul table is not created', e);
  }
};
