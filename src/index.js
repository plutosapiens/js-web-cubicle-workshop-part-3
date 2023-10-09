//Imports
const express = require("express");

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const dbConnect = require('./config/dbConfig');

const {PORT} = require('./constants');
const routes = require('./router');

//Connecting to the database
dbConnect()
.then(() => {
    console.log('Successfully connected to the DB!')
})

.catch((err) => console.log(`Error while connecting in DB: ${err}`));

//Local variables
const app = express();

//cConfigs
expressConfig(app);
handlebarsConfig(app);

//Roiting
 app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));