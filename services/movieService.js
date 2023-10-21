const MovieRepository = require("../repositories/movieRepository.js")
const {Category} = require("../models")


class MovieService {
    static create = async (params) => {
        try {
            const {title, description, year, genre, movie_user_attributes} = params;

            const moviePayload = {
                title,
                description,
                year,
                genre

            }
                const data = await MovieRepository.create(moviePayload, movie_user_attributes)
                return data;
        } catch(err) {
            throw err
        }
    }
    static findAll = async (params = {}) => {

        try {
            const {user_id} = params;

            const filterOptions = {
                include: {
                    model: User
                }
            }

            if(user_id) {
                filterOptions.include = {
                    model: User,
                    where: {
                        id: user_id
                    }
                }
            }
            const data = await MovieRepository.findAll(filterOptions)
            return data;
        } catch(err) {
            throw err;
        }
    }

    static findOne = async (params) => {

        try {
            const {id} = params;
            const queryOptions = {
                where: {
                    id
                },
                include: {
                    model: User
                }
            }

            const data = await MovieRepository.findOne(queryOptions)
            return data;
        } catch(err) {
            throw err
        }
    }

    static uploadImage = async (params) => {

        try {
            const {file, id} = params;

            const image_url = `http://localhost:3000/uploads/${file.filename}`
            const payload = {
                image_url
            }
            const data = await MovieRepository.uploadImage(id, payload);
            return data;
        } catch(err) {
            throw err;
        }
    }

    static destroy = async (params) => {
        try {
            const {id} = params;

            await MovieRepository.destroy(id)
        } catch(err) {
            throw err;
        }
    }







}



module.exports = MovieService;
