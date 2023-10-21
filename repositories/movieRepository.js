const {Movie, User, MovieUser} = require("../models")
class MovieRepository {
    static create = async (movieParams, movieUserParams) => {

        try {

            const data = await Movie.create(movieParams, {
                returning: true
            })

            for(let i = 0; i < movieCategoryParams.length; i++) {
                const currentItem = movieCategoryParams[i]

                const newObject = {
                    movie_id: data.id,
                    user_id: currentItem.user_id
                }

                await MovieUser.create(newObject)
            }

            return data;
        } catch(err) {
            throw err;
        }

    }

    static findAll = async(params) => {
        try {
            const data = await Movie.findAll(params)
            return data;
        } catch(err) {
            throw err;
        }
    }

    static findOne = async (params) => {
        try {
            const data = await Movie.findOne(params);
            return data;
        } catch(err) {
            throw err;
        }
    }

    static uploadImage = async (id, payload) => {
        try {
            const foundMovie = await Movie.findOne({
                where: {
                    id
                }
            })

            if(!foundMovie) {
                throw {name: "ErrorNotFound"}
            }

            await foundMovie.update(payload)
            return foundMovie
        } catch(err) {
            throw err;
        }
    }

    static destroy = async (id) => {
        try {
            const foundMovie = await Movie.findOne({
                where: {
                    id
                }
            })

            if(!foundMovie) {
                throw {name: "ErrorNotFound"}
            }

            await foundMovie.destroy();

        } catch(err) {
            throw err;
        }
    }

    








}
module.exports = MovieRepository;