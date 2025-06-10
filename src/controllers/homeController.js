import db from "../models/index";
import CRUDService from "../services/CRUDService";
let getHomePage = async (req, res) => {
    await CRUDService.getAllUsers();
}

let getCrudPage = (req, res) => {
    return res.render('crud.ejs');
}
let postCRUD = async (req, res) => {
    await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send('Post CRUD from server');
}

module.exports = {
    getHomePage,
    getCrudPage,
    postCRUD
};