// server.js
const createApp = require('./src/app');

const PORT = process.env.PORT || 3000;
const app = createApp();

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports = app;

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
