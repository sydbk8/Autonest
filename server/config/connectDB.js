import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  logging: false,
  define: {
    timestamps: true
  }
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected successfully');
    await sequelize.sync();
  } catch (error) {
    console.error('Error:', error);
  }
};

export { sequelize }
export default connectDB;
