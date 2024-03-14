import jwt from "jsonwebtoken";

export const  verifyToken = async (req, res, next) =>{
    try {
        let token = req.header("Authorization");

        if (!token) {
            return res.status(403).send("Access denied")
        }

        if (token.startsWith("Bearer "))
            token = token.slice(7, token.length).trimStart();
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (e) {
        res.status(500).json({success: false, message: e.message})
    }
}

// const authToken = (req, res, next) =>{
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1]; //to get token
//     if (!token)
//         return res.sendStatus(401);
//
//     jwt.verify(token, process.env.JWT_SECRET, (err, user) {
//         if (err)
//             return res.sendStatus(403);
//
//         req.user = user;
//         next();
//     })
// }

