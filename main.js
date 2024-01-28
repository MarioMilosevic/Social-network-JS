"use strict";
import { user } from "./data.js";
import { User } from "./class/User.js";
import { showFriends } from "./HelperFunctions/showFriends.js";
import { displayUserInfo } from "./HelperFunctions/displayUserInfo.js";
import { displayPost } from "./HelperFunctions/displayPost.js";
import { toggleClass } from "./HelperFunctions/ToggleClass.js";
import { showComments } from "./HelperFunctions/showComments.js";
import { GlobalState } from "./class/GlobalState.js";
import { Post } from "./class/Post.js";
import { displayComments } from "./HelperFunctions/displayComments.js";
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
// console.log(mainUser);
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
      const input = target.closest(".comment__input");
      const li = target.closest(".post__list__item");
      const commentSectionHidden = li.lastElementChild
      console.log(commentSectionHidden);
      const selectedPost = mainUser.findPost(li.id);
      const newUserPost = new Post(selectedPost);
      input.addEventListener("keydown", function (e) {
        if (e.keyCode === 13 && input.value !== '') {
          const userComment = {
            name: mainUser.getFirstName(),
            lastName: mainUser.getLastName(),
            commentText: input.value,
            img: mainUser.getImg(),
          };
          newUserPost.addComment(userComment);
          console.log("enter");
          console.log(newUserPost.getCommentsArr());
          input.value = "";
          commentSectionHidden.innerHTML = ''
          displayComments(commentSectionHidden,newUserPost)
        }
      });

    }
  });
}, 1500);

// NA KLIK GORE DESNO PROFIL DA SE POJAVI LOG OUT I OSTALO
