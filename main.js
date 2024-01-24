'use strict'
import {user} from './data.js'
import { User } from './class/User.js';
import { showFriends, displayFriends } from './class/HelperFunctions/showFriends.js';
console.log(user);

const friends = document.querySelector('.friends')
export const friendList = document.querySelector('.friend__list')



const mainUser = new User(user)
// showFriends(mainUser, 3)
// console.log(mainUser);

displayFriends(mainUser)