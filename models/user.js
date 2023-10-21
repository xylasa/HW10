'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Movie, {foreignKey: "user_id", through: models.MovieUser})
      User.hasMany(models.MovieUser, {foreignKey: "userid"})
    }
  }
  User.init({
    user: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};