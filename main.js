"use strict";
import { user } from "./data.js";
import { User } from "./class/User.js";
import { showFriends } from "./HelperFunctions/showFriends.js";
import { displayUserInfo } from "./HelperFunctions/displayUserInfo.js";
import { displayPost } from "./HelperFunctions/displayPost.js";
import { showComments } from "./HelperFunctions/showComments.js";
import { GlobalState } from "./class/GlobalState.js";
import { addComment } from "./HelperFunctions/addComment.js";
import { findFriend } from "./HelperFunctions/findFriend.js";
// Query selectors

const app = document.querySelector("#app");
export const userText = document.querySelector(".user__text");
export const userName = userText.querySelector("h1");
export const userFriendsNumber = userText.querySelector("h2");
export const userAdress = userText.querySelector("h3");
export const friends = document.querySelector(".friends");
export const friendList = document.querySelector(".friend__list");
const loadingSpinner = document.querySelector(".loader");
const friendsInfo = document.querySelector(".friends__info");
export const friendsText = friendsInfo.querySelector("h2");
export const totalFriendsNumber = friendsInfo.querySelector("p");
export const posts = document.querySelector(".posts");
const navBtn = document.querySelector(".nav__btn");
const logOut = document.querySelector(".log__out__container");
const searchBar = document.querySelector("#social__network__search__bar");
const searchResults = document.querySelector(".search__results");
// Class instances
const globalState = new GlobalState();
export const mainUser = new User(user);
setTimeout(() => {
  loadingSpinner.style.display = "none";
  app.style.opacity = 1;
  globalState.setToLoaded();
  displayUserInfo(mainUser);
  showFriends(mainUser);
  displayPost(mainUser);

  posts.addEventListener("click", function (e) {
    const target = e.target;
    if (
      target.matches(".comment__button__div") ||
      target.matches(".comment__button") ||
      target.matches(".comment__svg")
    ) {
      showComments(target);
    }
    if (target.matches(".comment__input")) {
      addComment(target, mainUser);
    }
  });
}, 1500);

// NA KLIK GORE DESNO PROFIL DA SE POJAVI LOG OUT I OSTALO
navBtn.addEventListener("click", function () {
  if (!logOut.classList.contains("visible")) {
    logOut.classList.add("visible");
  } else {
    logOut.classList.remove("visible");
  }
});

searchBar.addEventListener("input", function () {
  const friends = mainUser.getFriendsArr();
  const search = searchBar.value.toLowerCase();
  const friend = friends.filter(({ name, lastName }) => {
    const fullName = `${name} ${lastName}`.toLowerCase();
    return fullName.toLowerCase().includes(search);
  });
  if (friend) {
    findFriend(searchResults, friend);
    searchResults.classList.remove("hidden");
  }
  if (searchBar.value.length === 0) {
    searchResults.classList.add("hidden");
  }
});
