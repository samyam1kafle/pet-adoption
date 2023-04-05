const UserModel = require("../Models/User");
const bcrypt = require("bcrypt");

const getUsers = async(req, res) => {
    try {
        userList = await UserModel.find();
        res.json({
            data: userList,
        });
    } catch (error) {
        console.error(error);
        res.json({
            success: false,
            message: "Something went wrong !",
        });
    }
};
const addUser = async(req, res) => {
    try {
        const body = req.body;
        const user = await UserModel.create(body);
        res.json({
            success: true,
            message: "User added successfully !",
            data: user,
        });
    } catch (error) {
        console.error(error);
        res.json({
            success: false,
            message: "Something went wrong !",
        });
    }
};

const editUser = async(req, res) => {
    try {
        let user = await UserModel.findById(req.params.id);
        if (!user) {
            return res.json({
                success: false,
                message: "Counldnot find User"
            });
        }
        let body = req.body;
        user.name = body.name ? body.name : user.name;
        user.email = body.email ? body.email : user.email;
        user.password = body.password ? body.password : user.password;
        user.contact = body.contact ? body.contact : user.contact;
        user.status = body.status ? body.status : user.status;
        user.save();
        res.json({
            success: true,
            message: "User details updated sussessfully",
        });

    } catch (error) {
        console.error(error);
        res.json({
            success: false,
            message: "Something went wrong !",
        });
    }
};

const loginUser = async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // find the user in the database
    const user = await UserModel.findOne({
        name: username
    });
    console.log(user);
    if (!user) {
        return res.json({
            success: false,
            message: "Invalid Username or Password!"
        });
    }
    const passwordsMatch = await user.comparePassword(password);
    // (password === user.password) ? true: false;

    if (passwordsMatch) {

        return res.json({
            success: true,
            message: user
        });
    };
    return res.json({
        success: false,
        message: "Incorrect Password!"
    });
};


module.exports = {
    getUsers,
    addUser,
    editUser,
    loginUser
};