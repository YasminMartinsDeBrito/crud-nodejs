import jwt from "jsonwebtoken";

const verifyAuthTokenMiddleware = (request, response, next) => {
    let token = request.headers.authorization;

    if (!token) {
        return response.status(401).json({ msg: "Missing Authorization Token" });
    }

    jwt.verify(token, "SECRET_KEY", (error, decoded) => {
        if (error) {
            return response.status(401).json({ msg: "Invalid Token" });
        }
        next();
    });
};
export default verifyAuthTokenMiddleware;
