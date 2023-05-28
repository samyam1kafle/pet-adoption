const ContactUsModel = require("../Models/ContactUs");
const addContactUs = async(req, res) => {
    try {
        const body = req.body;
        let contactusData = {
            "email": body.email,
            "name": body.name,
            "message": body.message,
            "status": false
        };

        const contactus = await ContactUsModel.create(contactusData);
        res.json({
            success: true,
            message: "Contact Query Created successfully !",
            data: contactus,
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Something Went Wrong !"
        });
    }
}

const getContactUs = async(req, res) => {
    try {
        contactMessageList = await ContactUsModel.find();
        res.json({
            data: contactMessageList,
        });
    } catch (error) {
        console.error(error);
        res.json({
            success: false,
            message: "Something went wrong !",
        });
    }
};
module.exports = {
    addContactUs,
    getContactUs
};