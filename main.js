"use strict";
import { user } from "./data.js";
import { User } from "./class/User.js";
import { showFriends } from "./class/HelperFunctions/showFriends.js";
import { displayUserInfo } from "./class/HelperFunctions/displayUserInfo.js";
import { GlobalState } from "./class/GlobalState.js";

const app = document.querySelector('#app')
export const userText = document.querySelector(".user__text");
export const userName = userText.querySelector("h1");
export const userFriendsNumber = userText.querySelector("h2");
export const userAdress = userText.querySelector("h3");
export const friends = document.querySelector(".friends");
export const friendList = document.querySelector(".friend__list");
const loadingSpinner = document.querySelector('.loader')
const globalState = new GlobalState()
const mainUser = new User(user);

setTimeout(() => {
    loadingSpinner.style.display = 'none'
    app.style.opacity = 1
    globalState.setToLoaded()
    displayUserInfo(mainUser)
    showFriends(mainUser);
}, 1000);

