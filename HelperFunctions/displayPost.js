'use strict'

import { posts } from "../main"

export const displayPost = (user) => {
const friends = user.getFriendsArr()
const userPosts = user.getPosts()

const li = document.createElement('li')
li.innerHTML = `<div class="post">
<div class="post__info">
<img src="${user.img}">
<h2>${user.getFullName()}</h2>
<p class="time__of__post">8 days ago</p>
</div>
<div class="likes__comments__number">
<button class="like__number">Like</button>
<p class="comments__number">1 Comments</p>
</div>
</div>

<div class="post__buttons">
<div class="like__button__div">
<button class="like__button">Odje treba lajk</button>
<p>Like</p>
</div>
<div>
<button>Odje treba svg slika</button>
<p class="comment__button">Comment</p>
</div>
</div>
<div class="comment__section hidden">
<div>
<img src="${user.img}">
<input type="text" class="comment__input" placeholder="Write a comment">
</div>

<div class="comment__info">
<img src="${user.img}">
<div class="comment">
<h2>${user.getFullName()}</h2>
<p>Ovo je probni komentar</p>
</div>
</div>
</div>`

posts.appendChild(li)
}
