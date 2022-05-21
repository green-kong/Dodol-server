import { Collaborator } from '../collaborator';

export const create_table_collaborator = async () => {
  try {
    await Collaborator.sync({ force: true });
    console.log('collaborator table is created');
  } catch (e) {
    console.log('collborator table is not created', e);
  }
};
