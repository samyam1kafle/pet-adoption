const AnimalsModel = require("../Models/Animals");

const getAnimals = async(req, res) => {
    try {
        animalList = await AnimalsModel.find({
            'status': true,
            'is_adopted': false,
        }, '__id type name breed sex age contact description image pet_owner_id');

        res.json({
            data: animalList,
        });
    } catch (error) {
        console.error(error);
        res.json({
            success: false,
            message: "Something went wrong !",
        });
    }
};
const addAnimal = async(req, res) => {
    try {
        const body = req.body;
        let animalData = {
            "type": body.type,
            "name": body.name,
            "breed": body.breed,
            "sex": body.sex,
            "age": body.age,
            "contact": body.contact,
            "description": body.description,
            "image": body.image,
            "pet_owner_id": body.pet_owner_id
        };

        const animal = await AnimalsModel.create(animalData);
        res.json({
            success: true,
            message: "Pet added successfully !",
            data: animal,
        });
    } catch (error) {
        console.error(error);
        res.json({
            success: false,
            message: "Something went wrong !",
        });
    }
};

const showAnimal = async(req, res) => {
    try {
        const id = req.params.id;
        const animalData = await AnimalsModel.
        findOne({
            _id: id,
            status: true,
            'is_adopted': false,
        }, '_id type name breed sex age contact description image pet_owner_id').exec();
        res.json({
            success: true,
            message: animalData,
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Something went wrong !",
        });
    }
};

const editAnimal = async(req, res) => {
    try {
        let animal = await AnimalsModel.findById(req.params.id);
        if (!animal) {
            return res.json({
                success: false,
                message: "Invalid Id!"
            });
        }
        let body = req.body;
        animal.name = body.name ? body.name : animal.name;
        animal.breed = body.breed ? body.breed : animal.breed;
        animal.type = body.type ? body.type : animal.type;
        animal.sex = body.sex ? body.sex : animal.sex;
        animal.age = body.age ? body.age : animal.age;
        animal.contact = body.contact ? body.contact : animal.contact;
        animal.status = body.status ? body.status : animal.status;
        animal.description = body.description ? body.description : animal.description;
        animal.image = body.image ? body.image : animal.image;
        animal.pet_owner_id = animal.pet_owner_id;
        animal.save();
        res.json({
            success: true,
            message: "Pet updated sussessfully",
        });

    } catch (error) {
        console.error(error);
        res.json({
            success: false,
            message: "Something went wrong !",
        });
    }
};

const deleteAnimal = async(req, res) => {
    try {
        await AnimalsModel.findByIdAndDelete(req.params.id);
        res.json({
            success: true,
            message: "Pet removed successfully !",
        });
    } catch (error) {
        console.error(error);
        res.json({
            success: false,
            message: "Something went wrong !",
        });
    }
};

const searchFilterPets = async(req, res) => {
    try {
        const filters = req.body;
        if (!filters || filters.length <= 0) {
            return res.json({
                success: false,
                message: "Enter Filters to search the data ! ",
            });
        }
        const type = filters.type ? filters.type : null;
        const age = filters.age ? filters.age : null;
        const breed = filters.breed ? filters.breed : null;
        const sex = filters.sex ? filters.sex : null;
        let filterCriteria = {
            status: true,
            is_adopted: false
        };
        if (type != null) {
            filterCriteria.type = { $regex: type, $options: 'i' };
        }
        if (age != null) {
            filterCriteria.age = age;
        }
        if (breed != null) {
            filterCriteria.breed = { $regex: breed, $options: 'i' };
        }
        if (sex != null) {
            filterCriteria.sex = sex;
        }
        let filterData = await AnimalsModel.find(filterCriteria);
        res.json({
            success: true,
            message: filterData,
        });
    } catch (error) {
        res.json({
            success: false,
            message: "Something went wrong !",
        });
    }
}

const adopt_pet = async(req, res) => {
    try {
        let animal = await AnimalsModel.findById(req.params.id);
        if (!animal) {
            return res.json({
                success: false,
                is_adopted: false,
                message: "Invalid Pet Id!"
            });
        }
        let body = req.body;
        animal.pet_owner_id = animal.pet_owner_id;
        animal.adopted_owner_id = body.adopted_owner_id ? body.adopted_owner_id : null;
        animal.is_adopted = body.is_adopted ? body.is_adopted : false;
        animal.save();
        res.json({
            success: true,
            message: "Pet Adopted sussessfully",
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Something went wrong !"
        });
    }
}
module.exports = {
    getAnimals,
    addAnimal,
    showAnimal,
    editAnimal,
    deleteAnimal,
    searchFilterPets,
    adopt_pet
};