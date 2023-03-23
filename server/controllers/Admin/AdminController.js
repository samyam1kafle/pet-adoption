const AnimalsModel = require("../../Models/Animals");
const ContactUsModel = require("../../Models/ContactUs");
const AdminLogin = async(req, res) => {
    res.render('login');
}
const Adminportal = async(req, res) => {
    //authentication code here
    const username = req.body.username;
    const password = req.body.password;

    if (username == "admin" && password == "admin") {
        res.render('index');
    } else {
        res.redirect('/admin?error=1');
    }
}
const AdminPets = async(req, res) => {
    const petsData = await AnimalsModel.find();
    res.render('pets', { petsData });
}
const AdminContact = async(req, res) => {
    const contactData = await ContactUsModel.find();
    res.render('contact', { contactData });
}
module.exports = {
    AdminLogin,
    AdminPets,
    AdminContact,
    Adminportal
}