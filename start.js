const app = require("./app");

// This logger doesn't work, it should declare before the route in the ./app
//app.use(logger);

const server = app.listen(3000, () => {
  console.log(`Express is running on port ${server.address().port}`);
});
