const MovieService = require("../services/movieService.js")

class MovieController {

    static create = async (req, res, next) => {
        try {

            const data = await MovieService.create(req.body)

            res.status(201).json(data);
        } catch(err) {
            next(err);
        }
    }
    static findAll = async (req, res, next) => {
        try {

            const data = await MovieService.findAll(req.query)

            res.status(200).json(data)
        } catch(err) {
            next(err)
        }
    }

    static findOne = async (req, res, next) => {
        try {
            const data = await MovieService.findOne(req.params)
            res.status(200).json(data);
        } catch(err) {
            next(err);
        }
    }

    static uploadImage = async (req, res, next) => {
        try {
            const params = {
                file: req.file,
                id: req.params.id
            }

            const data = await MovieService.uploadImage(params)

            res.status(200).json(data);
        } catch(err) {
            next(err);
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

module.exports = MovieController;