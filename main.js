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
//   const likeBtnDiv = document.querySelector(".like__button__div");
//   const likeBtnSvg = likeBtnDiv.querySelector(".like__button");
//   const likeText = likeBtnDiv.querySelector("p");
//   likeBtnDiv.addEventListener("click", function () {
//     toggleClass(likeBtnSvg, "liked");
//     toggleClass(likeText, "liked");
//   }
//   );



  posts.addEventListener('click',function(e){
    const target = e.target
    if(target.matches('.like__button__div')){
        const likeDiv = target.closest('.like__button__div')
        console.log(likeDiv)
        const likeBtn = likeDiv.firstElementChild
        const likeText = likeDiv.lastElementChild
        toggleClass(likeBtn,'liked')
        toggleClass(likeText,'liked')
    }
  })


//   const postListItem = document.querySelectorAll(".post__list__item");


//   postListItem.forEach(post => {
//     const commentDivs = post.querySelector('.comment__button__div')
//     const hiddenCommentSection = post.querySelector('.comment__section')
    
//   })
//   console.log(postListItem);
//   const commentDivs = postListItem.querySelectorAll(".comment__button__div");
//   const hiddenCommentSections =
//     postListItem.querySelectorAll(".comment__section");
//     commentDivs.forEach()
//   commentDivs.addEventListener("click", function () {
//     hiddenCommentSections.forEach((section) => {
//       toggleClass(section, "hidden");
//     });
//   }
//   );
  //   console.log(mainUser);
  // console.log(mainUser.getWhoLiked())
}, 1500);
