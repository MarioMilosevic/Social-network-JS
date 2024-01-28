'use strict'
import { Post } from "../class/Post";
import { displayComments } from "./displayComments";
export const addComment = (target, user) => {
    const input = target.closest(".comment__input");
      const li = target.closest(".post__list__item");
      const commentSectionHidden = li.lastElementChild
      const commentNumber = li.querySelector('.comment__number')
      const selectedPost = user.findPost(li.id);
      const newUserPost = new Post(selectedPost);
      input.addEventListener("keydown", function (e) {
        if (e.keyCode === 13 && input.value !== '') {
          const userComment = {
            name: user.getFirstName(),
            lastName: user.getLastName(),
            commentText: input.value,
            img: user.getImg(),
          };
          newUserPost.addComment(userComment);
          commentNumber.textContent = commentNumber.textContent.length >= 2 ? `${newUserPost.getCommentsLength()} Comments` : `${newUserPost.getCommentsLength()} Comment`
          input.value = "";
          commentSectionHidden.innerHTML = ''
          displayComments(commentSectionHidden,newUserPost)
        }
      });
}