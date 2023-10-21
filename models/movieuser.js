'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MovieUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MovieUser.belongsTo(models.Movie, {foreignKey: "movie_id"})
      MovieUser.belongsTo(models.User, {foreignKey: "user_id"})
    }
  }
  MovieUser.init({
    movie_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MovieUser',
  });
  return MovieUser;
};