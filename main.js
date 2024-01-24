"use strict";
import { user } from "./data.js";
import { User } from "./class/User.js";
import { showFriends } from "./class/HelperFunctions/showFriends.js";
import { displayUserInfo } from "./class/HelperFunctions/displayUserInfo.js";
console.log(user);

export const userText = document.querySelector(".user__text");
export const userName = userText.querySelector("h1");
export const userFriendsNumber = userText.querySelector("h2");
export const userAdress = userText.querySelector("h3");
export const friends = document.querySelector(".friends");
export const friendList = document.querySelector(".friend__list");

const mainUser = new User(user);

setTimeout(() => {
    displayUserInfo(mainUser)
    showFriends(mainUser);
    
}, 1000);

