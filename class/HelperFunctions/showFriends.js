"use strict";
import { friendList } from "../../main";

export const showFriends = (user, index) => {
  friendList.innerHTML = `<li class="friend__list__item">
<img src="${user.friends[index].img}">
<p class="friend__name">${user.friends[index].name} ${user.friends[index].lastName}</p>
</li>
`;
};

export const displayFriends = (user) => {
  console.log(user.friends);
  const friends = [...user.friends];
  console.log(friends);
  friends.forEach((f) => {
    const friend = document.createElement("li");
    friend.classList.add("friend__list__item");
    friend.innerHTML = `<img src="${f.img}">
    <p class="friend__name">${f.name} ${f.lastName}</p>`;
    console.log(f);
    console.log(friend);
    friendList.appendChild(friend);
  });
};
