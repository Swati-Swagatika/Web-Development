const express = require('express');
const app = express();
const dbConn = require('./config/db.conn');
const logger = require('./Middleware/logger');
const postRoutes = require('./Routes/contacts');
const userRoutes = require('./Routes/user');
const cors = require('cors');
const port = process.env.PORT || 3001
let contactsData = [];
const corsOption = {
    "origin":"*"
}
app.use(cors(corsOption));
app.use(logger);
app.use(express.json())
app.use('/api/contact',postRoutes);
app.use('/api/user',userRoutes);
dbConn();
app.listen(port,()=>{
    console.log(`Server started at port ${port}`)

})