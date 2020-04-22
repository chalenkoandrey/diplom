const Fixtures = require('node-mongodb-fixtures');
const uri = 'mongodb://mongo/cafe';
const options = null;

const fixtures = new Fixtures({
  dir: './fixtures',
  filter: '.*',
});

fixtures
  .connect('mongodb://mongo:27017/cafe')
  .then(() => fixtures.unload())
  .then(() => fixtures.load())
  .catch(e => console.error(e))
  .finally(() => fixtures.disconnect());