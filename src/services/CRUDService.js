import bcrypt from 'bcryptjs';
import db from '../models/index.js'; // điều chỉnh đường dẫn đúng với project của bạn

const salt = bcrypt.genSaltSync(10);

let hashUserPassword = (password) => {
    return new Promise((resolve, reject) => {
        try {
            const hash = bcrypt.hashSync(password, salt);
            resolve(hash);
        } catch (error) {
            console.error("Error hashing password:", error);
            reject(error);
        }
    });
};

let createNewUser = async (data) => {
    try {
        let hashedPassword = await hashUserPassword(data.password);

        let user = await db.User.create({
            email: data.email,
            password: hashedPassword,
            firstName: data.firstName,
            lastName: data.lastName,
            address: data.address,
            phoneNumber: data.phoneNumber,
            gender: data.gender === '1' ? true : false, // Assuming
            roleId: data.roleId,
        });

        return user;
    } catch (error) {
        console.error("Error creating new user:", error);
        throw error;
    }
};

let getAllUsers = async () => {
    try {
        let users = await db.User.findAll();
        return users;
    } catch (error) {
        console.error("Error fetching all users:", error);
        throw error;
    }
};

export default {
    createNewUser,
    getAllUsers
};
