import users from '../database'

const updateUsersServices = (id, name, email) => {
    const updateUser = {
        id, 
        name,
        email
    }

    const userIndex = users.findIndex(element => element.id === id)

    if(userIndex === -1){
        return "User not found"
    }
    users[userIndex] = {...users[userIndex], ...updateUser}

    return users[userIndex]
}
export default updateUsersServices