"use strict";

import { posts } from "../main";
import { Post } from "../class/Post";

export const displayPost = (user) => {
  const userPosts = user.getPosts();
  userPosts.forEach((post) => {
    const userPost = new Post(post);
    let firstPersonName;
    let firstPersonLastName;
    let secondPersonName;
    let secondPersonLastName;
    let othersLength;
    let likedTextContent;
    if (userPost.getLikesLength() === 2) {
      firstPersonName = userPost.getWhoLiked().first.name;
      firstPersonLastName = userPost.getWhoLiked().first.lastName;
      secondPersonName = userPost.getWhoLiked().second.name;
      secondPersonLastName = userPost.getWhoLiked().second.lastName;
      likedTextContent = `${firstPersonName} ${firstPersonLastName} and ${secondPersonName} ${secondPersonLastName}`;
    }
    if (userPost.getLikesLength() === 1) {
      firstPersonName = userPost.getWhoLiked().first.name;
      firstPersonLastName = userPost.getWhoLiked().first.lastName;
      secondPersonLastName = "";
      secondPersonName = "";
      othersLength = "";
      likedTextContent = `${firstPersonName} ${firstPersonLastName}`;
    }
    if (userPost.getLikesLength() === 0) {
      firstPersonLastName = "";
      firstPersonName = "";
      secondPersonLastName = "";
      secondPersonName = "";
      othersLength = "";
      likedTextContent = "";
    }
    if (userPost.getLikesLength() > 2) {
      firstPersonName = userPost.getWhoLiked().first.name;
      firstPersonLastName = userPost.getWhoLiked().first.lastName;
      secondPersonName = userPost.getWhoLiked().second.name;
      secondPersonLastName = userPost.getWhoLiked().second.lastName;
      othersLength = userPost.getWhoLiked().others.length;
      likedTextContent = `${firstPersonName} ${firstPersonLastName}, ${secondPersonName} ${secondPersonLastName} and ${othersLength} more`;
    }
    const li = document.createElement("li");
    li.classList.add("post__list__item");
    li.innerHTML = `<div class="post">
<div class="post__info">
<img src=${user.getImg()}>
<div class="user__post__info">
<h2>${user.getFullName()}</h2>
<p class="time__of__post">${userPost.getDate()}</p>
</div>
</div>
<p class="post__text">${userPost.getPostText()}</p>
<div class="likes__comments__number">
<div class="like__button__container">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 like__number">
<path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
</svg>
<span>${userPost.getLikesLength()}</span>
</div>
<p class="liked__by">${likedTextContent}</p>
<div class="comment__container">
<span class="comment__number">${post.comments.length}</span>
<p class="comments__button">Comments</p>
</div>
</div>
</div>

<div class="post__buttons">
<div class="like__button__div">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 like__button">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
</svg>
<p>Like</p>
</div>

<div class="comment__button__div">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>

<p class="comment__button">Comment</p>
</div>
</div>
<div class="comment__section hidden">
<div class="comment__section__addComment">
<img src="${user.img}">
<input type="text" class="comment__input" placeholder="Write a comment">
</div>

<div class="comment__info">
<img src="${user.getImg()}">
<div class="comment">
<h2>${user.getFullName()}</h2>
<p>Ovo je probni komentar</p>
</div>
</div>
</div>`;
    posts.append(li);
  });
};
