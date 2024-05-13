import express from 'express';
import helmet from 'helmet';
import dotenv from'dotenv'
import cookieParser from'cookie-parser'
import routes from './src/routes/index.mjs';
import db from './src/models/index.mjs';

dotenv.config();
//setting up your port
const PORT = process.env.PORT || 8080

//assigning the variable app to express
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(helmet())
//synchronizing the database and forcing it to false so we dont lose data
db.sequelize.sync({ force: true }).then(() => {
  console.log("connected successfully")
})

app.use(routes);
//listening to server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`))