import Animal from "../models/Animal.js";

const getAnimal = async(req, res, next) => {
    try {
        const animal = await Animal.findById(req.params.id)
        if (animal === null)
            return res.status(404).json({ message: 'Animal not found' });
        res.animal = animal;
    } catch (e) {

    }
    next();
}

export { getAnimal };