import bcrypt from "bcryptjs";
import db from '../models/index.js';
const salt = bcrypt.genSaltSync(10);
let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    });
};

let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Mã hóa mật khẩu trước khi lưu
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);

            // Lưu người dùng mới vào cơ sở dữ liệu
            await db.User.create({
                fullname: data.fullName,
                password: hashPasswordFromBcrypt,
                email: data.email,
                address: data.address,
                phoneNumber: data.phoneNumber,
                gender: data.gender,
                roleId: data.roleId,
            });

            // Khi tạo thành công, resolve thông báo
            resolve("Create a new user succeed!");
        } catch (e) {
            reject(e);  // Nếu có lỗi xảy ra, reject lỗi
        }
    });
};

let updateUserData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Tìm người dùng theo ID
            let user = await db.User.findOne({
                where: { id: data.id }
            });

            // Nếu không tìm thấy người dùng
            if (!user) {
                return resolve("User not found!");
            }

            // Nếu có cập nhật password, cần mã hóa trước
            let hashedPassword = data.password
                ? await hashUserPassword(data.password)
                : user.password;

            // Cập nhật thông tin người dùng
            user.fullname = data.fullName;
            user.password = hashedPassword;
            user.email = data.email;
            user.address = data.address;
            user.phoneNumber = data.phoneNumber;

            await user.save(); // Cần lưu lại thay đổi

            resolve("Update the user succeed!");
        } catch (e) {
            reject(e);  // Nếu có lỗi xảy ra, reject lỗi
        }
    });
}


let deleteUserById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Tìm người dùng theo ID và xóa
            await db.User.destroy({
                where: { id: userId }
            });
            resolve("Delete the user succeed!");
        } catch (e) {
            reject(e);  // Nếu có lỗi xảy ra, reject lỗi
        }
    });
}

module.exports = {
    createNewUser,
    updateUserData,
    deleteUserById,
};