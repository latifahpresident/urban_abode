require('dotenv').config()
const server = require('./app');
const PORT = process.env.PORT || 5001

server.listen(PORT, () => console.log(`server listening on ${PORT}`));