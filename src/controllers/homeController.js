// HomeController.js
import db from '../models/index.js'; // ✅ Đúng file
import userService from '../services/CRUDservice.js'; // ✅ Đúng file
let getHomePage = async (req, res) => {
    try {
        const allUsers = await db.User.findAll(); // ✅ Sử dụng model từ db
        return res.render('displayUser.ejs', { dataUsers: allUsers }); // ✅ Chuyển đổi users thành JSON
    } catch (err) {
        console.error('Error:', err);
        return res.status(500).send('Server error');
    }
};

let getAboutPage = (req, res) => {
    return res.render('crud.ejs'); // ✅ Đường dẫn đúng đến file about.ejs
}

let postCRUD = async (req, res) => {
    try {
        // Tạo người dùng mới bằng cách gọi service
        await userService.createNewUser(req.body);



        // Render lại trang với dữ liệu người dùng
        return res.redirect('/');
    } catch (error) {
        console.error(error);
        return res.status(500).send('Có lỗi xảy ra khi tạo người dùng.');
    }
};

let putCRUD = async (req, res) => {
    try {
        // Cập nhật người dùng bằng cách gọi service
        await userService.updateUserData(req.body);



        // Render lại trang với dữ liệu người dùng
        return res.redirect('/');
    } catch (error) {
        console.error(error);
        return res.status(500).send('Có lỗi xảy ra khi cập nhật người dùng.');
    }
}

let editCRUD = async (req, res) => {
    try {
        // Lấy ID từ URL
        let userId = req.params.id;

        // Tìm người dùng trong cơ sở dữ liệu
        let userData = await db.User.findOne({ where: { id: userId } });

        // Nếu không tìm thấy người dùng, gửi thông báo lỗi
        if (!userData) {
            return res.send("User not found!");
        }

        // Render trang chỉnh sửa với dữ liệu người dùng
        return res.render('editUser.ejs', { user: userData });
    } catch (error) {
        console.error(error);
        res.status(500).send("Có lỗi xảy ra.");
    }
};



let deleteCRUD = async (req, res) => {
    try {
        // Lấy ID từ URL
        let userId = req.params.id;
        // Xóa người dùng bằng cách gọi service
        await userService.deleteUserById(userId);

        // Render lại trang với dữ liệu người dùng
        return res.redirect('/');
    } catch (error) {
        console.error(error);
        return res.status(500).send('Có lỗi xảy ra khi xóa người dùng.');
    }
}

export default {
    getHomePage,
    getAboutPage,
    postCRUD,
    putCRUD,
    deleteCRUD,
    editCRUD
};
