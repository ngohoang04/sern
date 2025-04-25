import userService from '../services/userService'

handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    // Check if email and password are provided
    if (!email || !password) {
        return res.status(400).json({
            message: 'Missing email or password!',
            errcode: 1
        });
    }

    let userData = await userService.handleUserLogin(email, password);


    return res.status(200).json({
        message: userData.errMessage,
        errcode: userData.errCode,
        userData
    });
}


module.exports = {
    handleLogin
};