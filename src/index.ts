import 'dotenv/config';
import express from 'express';
import { sequelize } from './model';
import { create_table_users } from './model/tables/user.table';
import { create_table_capsules } from './model/tables/capsule.table';
import { create_table_collaborator } from './model/tables/collaborator.table';
import { create_table_memoryImg } from './model/tables/memoryImg.table';
import { create_table_memory_music } from './model/tables/memory.music';
import { create_table_hidden } from './model/tables/hidden.table';

import { router } from './routes/index';

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.static('./public'));

app.use('/api', router);

app.listen(PORT, async () => {
  console.log(PORT, 'server start');
  try {
    await sequelize.sync();
    console.log('db success');
    await create_table_users();
    await create_table_capsules();
    await create_table_collaborator();
    await create_table_memoryImg();
    await create_table_memory_music();
    await create_table_hidden();
  } catch (e) {
    console.log('db failed', e);
  }
});
