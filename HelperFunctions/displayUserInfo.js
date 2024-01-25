'use strict'
import { userName,userAdress,userFriendsNumber } from '../main'

export const displayUserInfo = (user) => {
userName.textContent = `${user.getFullName()}`
userFriendsNumber.textContent = `${user.getFriendsNumber()} friends`
userAdress.textContent =`${user.getAdress()}`
}