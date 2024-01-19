import User from "../models/User.js";

const getUser = async(req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        if (user === null)
            return res.status(404).json({ message: 'Animal not found' });
        res.user = user;
    } catch (e) {

    }
    next();
}

export { getUser };