// HomeController.js
import db from '../models/index.js'; // ✅ Đúng file

let getHomePage = async (req, res) => {
    try {
        const users = await db.User.findAll(); // ✅ Sử dụng model từ db
        return res.render('index.ejs', { users: JSON.stringify(users) }); // ✅ Chuyển đổi users thành JSON
    } catch (err) {
        console.error('Error:', err);
        return res.status(500).send('Server error');
    }
};

export default {
    getHomePage
};
