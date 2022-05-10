import listUsersService from "../services/listUser.services";

const listUsersController = (request,response) => {
    const users = listUsersService()

    return response.json(users)
}

export default listUsersController