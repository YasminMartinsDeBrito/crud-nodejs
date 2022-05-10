import updateUsersServices from "../services/updateUser.service";

const updateUsersController = (request,response) => {
    const {id} = request.params
    const {name, email} = request.body

    const updateUser = updateUsersServices(id, name, email)

    return response.json(updateUser)
}

export default updateUsersController