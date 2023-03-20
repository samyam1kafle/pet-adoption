const AnimalsModel = require("../../Models/Animals");
const ContactUsModel = require("../../Models/ContactUs");
const AdminLogin = async(req, res) => {
    res.render('index');
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
    AdminContact
}