import { DataTypes, UUIDV4 } from 'sequelize';
import { sequelize } from '../config/connectDB.js';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    primaryKey: true
  },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false }
});

export default User;
