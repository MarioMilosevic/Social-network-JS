"use strict";

export const displayComments = (hiddenCommentSection, userPost) => {
//   console.log(userPost.getCommentsArr());
  const commentsList = userPost.getCommentsArr();
  commentsList.forEach((comment) => {
    // console.log(comment);
    // console.log('LIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII',hiddenCommentSection);
    const commentDiv = document.createElement("div");
    // commentDiv.classList.add("comment__section", "hidden");
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

    // `<div class="comment__section__addComment">
    // <p>neka slika</p>
    // <input type="text" class="comment__input" placeholder="Write a comment">
    // </div>

    // <div class="comment__info">
    // <p>neka slika</p>
    // <div class="comment">
    // <h2>neki naslov</h2>
    // <p>neki tekst</p>
    // </div>
    // </div>`
  });
};
