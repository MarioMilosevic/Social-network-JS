"use strict";
import { user } from "./data.js";
import { User } from "./class/User.js";
import { showFriends } from "./HelperFunctions/showFriends.js";
import { displayUserInfo } from "./HelperFunctions/displayUserInfo.js";
import { displayPost } from "./HelperFunctions/displayPost.js";
import { toggleClass } from "./HelperFunctions/ToggleClass.js";
import { GlobalState } from "./class/GlobalState.js";

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
    if (target.matches(".like__button__div")) {
      const likeDiv = target.closest(".like__button__div");
      const likeBtn = likeDiv.firstElementChild;
      const likeText = likeDiv.lastElementChild;
      toggleClass(likeBtn, "liked");
      toggleClass(likeText, "liked");
    }

    if (
      target.matches(".comment__button__div") ||
      target.matches(".comment__button") ||
      target.matches(".comment__svg")
    ) {
      const commentDiv = target.closest(".comment__button__div");
      const hiddenCommentSection = commentDiv.parentElement.nextElementSibling;
      toggleClass(hiddenCommentSection, "hidden");
    }
  });
}, 1500);
