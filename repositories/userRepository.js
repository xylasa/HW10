// Berhubungan langsung dengan database
const {User} = require("../models")


class UserRepository {

    static create = async (params) => {
        try {
            const data = await User.create(params, {
                returning: true
            })
            return data;

            } catch(err) {
                throw err
            }
    }

    static findAll = async () => {
        try {
            const data = await User.findAll();
            return data;
        } catch(err) {
            throw err
        }
    }

    static findOne = async (id) => {
        try {
            const data = await User.findOne({
                where: {
                    id
                }
            })

            return data;
        } catch(err) {
            throw err;
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




}
module.exports = UserRepository;