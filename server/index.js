/* eslint no-console: "off" */
const server = require('./server');

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`The Server is listening on ${PORT} and likely judging you`));
