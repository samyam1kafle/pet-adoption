const UserModel = require("../Models/User");

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
    try {} catch (error) {
        console.error(error);
        res.json({
            success: false,
            message: "Something went wrong !",
        });
    }
};

const deleteUser = async(req, res) => {
    try {} catch (error) {
        console.error(error);
        res.json({
            success: false,
            message: "Something went wrong !",
        });
    }
};

module.exports = {
    getUsers,
    addUser,
    editUser,
    deleteUser,
};