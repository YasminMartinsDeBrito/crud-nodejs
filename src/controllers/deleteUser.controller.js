import deleteUserServices from "../services/deleteUser.service";

const deleteUserController = (request, response) => {
    const {id} = request.params

    const deleteUser = deleteUserServices(id)

    return response.json(deleteUser)
}
export default  deleteUserController