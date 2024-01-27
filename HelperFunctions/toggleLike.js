"use strict";
import { toggleClass } from "./ToggleClass";

export const toggleLike = (target) => {
  const likeDiv = target.closest(".like__button__div");
  console.log(likeDiv);
  console.log(likeDiv.parentElement.previousElementSibling);
  // const likeNumber = likeDiv.querySelector('.like__button__container__span')
  // console.log(likeNumber);
  const likeBtn = likeDiv.firstElementChild;
  const likeText = likeDiv.lastElementChild;
  toggleClass(likeBtn, "liked");
  toggleClass(likeText, "liked");
};
