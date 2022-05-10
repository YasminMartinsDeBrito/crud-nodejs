import users from "../database";

const verifyEmailAvailabilityMiddleware = (request,response,next) => {
const { email } = request.body

const userAlreadyExists = users.find((user) => user.email === email)

if(userAlreadyExists){
    return response
    .status(400)
    .json({msg: "This email adress is already being used"})
}
next()
}

export default verifyEmailAvailabilityMiddleware