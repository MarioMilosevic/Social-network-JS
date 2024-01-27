"use strict";

export const displayComments = (hiddenCommentSection, userPost) => {
  const commentsList = userPost.getCommentsArr();
  commentsList.forEach((comment) => {
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment__section");
    commentDiv.innerHTML = `
<div class="comment__info">
<img src="${comment.img}">
<div class="comment">
<h2>${comment.name} ${comment.lastName}</h2>
<p>${comment.commentText}</p>
</div>
</div>
`;
    hiddenCommentSection.appendChild(commentDiv);
  });
};
