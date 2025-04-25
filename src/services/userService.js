import db from '../models/index'
import bcrypt from 'bcryptjs'
let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let isExist = await checkUserEmail(email)
            if (isExist) {
                //compare password
                let user = await db.User.findOne({
                    where: { email: email },
                    attributes: {
                        exclude: ['password']
                    }

                })
                if (user) {
                    let check = await bcrypt.compareSync(password, user.password)
                    if (check) {
                        userData.errCode = 0;
                        userData.errMessage = `OK`;

                        userData.user = user
                    } else {
                        userData.errCode = 3;
                        userData.errMessage = `Wrong password`
                    }
                } else {
                    userData.errCode = 2;
                    userData.errMessage = `User's not found`
                }

            }
        } catch (error) {
            userData.errCode = 1;
            userData.errMessage = `Your's Email isn't in system.plz try other email`
            reject(error)
        }
    })
}

let checkUserEmail = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: userEmail }
            })
            if (user) {
                resolve(true)
            }
            else {
                reject(false)
            }
        } catch (e) {
            reject(e)
        }
    })
}


module.exports = {
    handleUserLogin,


}