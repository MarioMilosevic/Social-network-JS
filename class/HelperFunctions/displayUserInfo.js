'use strict'
import { userName,userAdress,userFriendsNumber } from "../../main"

export const displayUserInfo = (user) => {
userName.textContent = `${user.name} ${user.lastName}`
userFriendsNumber.textContent = `${user.friends.length} friends`
userAdress.textContent =`${user.adress.street}`
}