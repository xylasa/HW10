const UserRepository = require("../repositories/userRepository.js")

class UserService {

    static create = async (params) => {
        try {

            const data = await UserRepository.create(params)
            return data;
        


    } catch(err) {
            throw err
        }

    }
    static findAll = async () => {
        try {
            const data = await UserRepository.findAll();
            return data;
        } catch(err) {
            throw err
        }
    }
    static findOne = async (params) => {
        try {
            const {id} = params;
    
            const data = await UserRepository.findOne(id)
            return data;
        } catch(err) {
            throw err
        }
    }


}


module.exports = UserService