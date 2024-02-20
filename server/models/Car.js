import { DataTypes, UUIDV4 } from 'sequelize';
import { sequelize } from '../config/connectDB.js';
import User from './User.js';

const Car = sequelize.define('Car', {
  id: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    primaryKey: true
  },
  make: { type: DataTypes.STRING, allowNull: false },
  model: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  miles: { type: DataTypes.INTEGER, allowNull: false },
  fuelType: {
    type: DataTypes.ENUM('Gasoline', 'Electric'),
    allowNull: false
  },
  transmission: {
    type: DataTypes.ENUM('Automatic', 'Manual'),
    allowNull: false
  },
  image: { type: DataTypes.STRING, allowNull: false },
  color: { type: DataTypes.STRING, allowNull: false },
  year: { type: DataTypes.INTEGER, allowNull: false },
  condition: {
    type: DataTypes.ENUM('New', 'Used'),
    allowNull: false
  },
  type: {
    type: DataTypes.ENUM(
      'Convertible',
      'Coupe',
      'Hatchback',
      'Minivan',
      'Sedan',
      'SUV',
      'Truck',
      'Van',
      'Wagon'
    ),
    allowNull: false
  },
  userId: { 
    type: DataTypes.UUID,
    allowNull: false
  }
});

User.hasMany(Car, { foreignKey: 'userId' });
Car.belongsTo(User, { foreignKey: 'userId' });

export default Car;
