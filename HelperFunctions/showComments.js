"use strict";
import { toggleClass } from "./ToggleClass";
export const showComments = (target) => {
  const commentDiv = target.closest(".comment__button__div");
  const hiddenCommentSection =
    commentDiv.parentElement.parentElement.lastElementChild;
  toggleClass(hiddenCommentSection, "hidden");
};
