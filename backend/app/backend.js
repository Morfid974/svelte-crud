const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('permissive-cors');
const migration = require('./migration.js');
const bookRoutes = require('./Routes/bookRoutes')
const customTableRoutes = require('./Routes/customTableRoutes')
const userRoutes = require('./Routes/userRoutes')
const settingRoutes = require('./Routes/settingRoutes')
const cookieParser = require('cookie-parser');

console.log("Start migrations, please wait until it's done");
setTimeout(function () {
  migration.postgresMigration();
}, 15000);

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser())
app.use('/backend/books/', bookRoutes);
app.use('/backend/login/', userRoutes);
app.use('/backend/generic/', customTableRoutes);
app.use('/backend/settings/', settingRoutes);
const server = app.listen(3000, function () {
  console.log('Backend running, wait 15 seconds for migrations initialization');
});

