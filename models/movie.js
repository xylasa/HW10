'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.belongsToMany(models.User, {foreignKey: "movie_id", through: models.MovieUser})
      Movie.hasMany(models.MovieUser, {foreignKey: "movie_id"})
    }
  }
  Movie.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    year: DataTypes.INTEGER,
    genre: DataTypes.STRING,
    image_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};