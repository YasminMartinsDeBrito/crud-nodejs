import users from "../database";

const deleteUserServices = (id) => {
const userIndex = users.findIndex((element) => element.id === id)

if(userIndex === -1){
    return "User not found"
}

users.splice(userIndex,1)

return "Usuario excluido com sucesso"
}

export default deleteUserServices