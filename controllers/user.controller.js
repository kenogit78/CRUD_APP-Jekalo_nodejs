const responseHandler = require('../utils/response');
const User = require('../model/user');

exports.findUser = async(req, res) => {
    try {
    const user = await User.find().select([ 'name_prefix', 'first_name', 'last_name', 'username', 'date_of_birth' ]); 
        if (user) {
            return responseHandler.sendSuccess(res, {
            message: 'Users Information',
            data: user      
            })}
        }
        catch (error) {
            return responseHandler.internalServerError(res, {
                message: error.message || 'An Error Occurred'
         })
    }
}

exports.createUser = async(req, res) => {
    const {first_name, last_name, username, date_of_birth} = req.body
    let name_prefix = `${first_name.charAt(0)}${last_name.charAt(0)}`;
    
    try {
        let user = await User.create({name_prefix, first_name, last_name, username, date_of_birth})
        console.log(user)
        return responseHandler.sendSuccess(res, {
            message: ' User created successfully',
            data: user
            
        });
    }catch (error) {
        return responseHandler.internalServerError(res, {
            message: error.message || 'An Error Occurred'
        })
    }
}

exports.deleteUser = async(req, res) => {
    const { username} = req.body
    
    try {  
        let deleteUser =  await User.findOneAndDelete({ username: req.params.username })
        return responseHandler.sendSuccess(res, {
            message: 'You deleted the user successfully',
            data: deleteUser
        });
    }catch (error) {
        return responseHandler.internalServerError(res, {
            message: error.message || 'An Error Occurred'
        })
    }
}