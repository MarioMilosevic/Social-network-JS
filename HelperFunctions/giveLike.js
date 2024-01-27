'use strict'
import { toggleClass } from "./ToggleClass";

export const giveLike = (target) => {
    const likeDiv = target.closest(".like__button__div");
      const likeBtn = likeDiv.firstElementChild;
      const likeText = likeDiv.lastElementChild;
      toggleClass(likeBtn, "liked");
      toggleClass(likeText, "liked");
}