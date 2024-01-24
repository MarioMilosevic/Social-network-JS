"use strict";
import { friendList } from "../../main";

export const showFriends = (user) => {
  const friends = [...user.friends];
  friends.forEach((f) => {
    const friend = document.createElement("li");
    friend.classList.add("friend__list__item");
    friend.innerHTML = `<img src="${f.img}">
    <p class="friend__name">${f.name} ${f.lastName}</p>`;
    friendList.appendChild(friend);
  });
};
