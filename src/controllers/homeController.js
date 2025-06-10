import db from "../models/index";

let getHomePage = async (req, res) => {
    try {

        let data = await db.User.findAll();
        return res.render('home.ejs', { data: JSON.stringify(data) });
    } catch (error) {
        console.error("Error fetching home page:", error);
        return res.status(500).send("Internal Server Error");
    }
}

module.exports = {
    getHomePage
    // Add more controller functions as needed
};