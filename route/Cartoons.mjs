import express from 'express';
import { faker } from '@faker-js/faker';

const route = express.Router();

const data = [];
route.get('/get_all', async (req, res) => {
  for (let i = 0; i < 100; i++) {
    const newFakeData = {
      fullName: faker.person.fullName(),
      bio: faker.person.bio(),
    };
    data.push(newFakeData);
  }
  await res.json(data);
});

export default route;
