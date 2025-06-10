let getHomePage = (req, res) => {
    return res.render('home.ejs');
}

module.exports = {
    getHomePage
    // Add more controller functions as needed
};