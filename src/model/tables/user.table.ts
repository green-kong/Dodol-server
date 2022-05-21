import { Users } from '../../model/user'; //방금 만들어준 user model

export const create_table_users = async () => {
  try {
    await Users.sync({ force: true });
    console.log('user table is created!');
  } catch (e) {
    console.log('user table is not created!');
  }
};
