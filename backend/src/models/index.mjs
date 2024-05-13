//importing modules
import {Sequelize, DataTypes} from 'sequelize';
import dotenv from 'dotenv';
import UserModel from './userModel.mjs';
import UserToken from './token.mjs';
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_URL, 
  {dialect: "postgres"})

//checking if connection is done
    sequelize.authenticate()
      .then(() =>  console.log(`Database connected to discover`))
      .catch((err) => console.log(err))

    const db = {}
    db.Sequelize = Sequelize
    db.sequelize = sequelize

//connecting to model
db.users = UserModel(sequelize, DataTypes)
db.tokens = UserToken(sequelize, DataTypes)

//foydalanuvchilar munosabati va token birga bir munosabat
//har bir foydalanuvchi bitta tokenga ega bo'ladi.
//users.hasOne har bir foydalanuvchi faqat bitta tokenga ega bo'lishini anglatadi
//tokens.belongsTo har bir token foydalanuvchilar jadvaliga tegishli bo'lishini anglatadi
// va boshqa jadval emas

db.users.hasOne(db.tokens, {
  as: 'token',
  foreignKey:"userId"
})

db.tokens.belongsTo(db.users, {
  as: 'user',
  foreignKey:"userId"
})

//exporting the module
export default db;