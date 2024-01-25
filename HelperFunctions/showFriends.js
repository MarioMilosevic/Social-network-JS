"use strict";
import {friendList, friendsText, totalFriendsNumber } from '../main'
export const showFriends = (user) => {
  friendsText.textContent =  `Friends`
  totalFriendsNumber.textContent = `${user.getFriendsNumber()} friends`
  // const friends = [...user.getFriendsArr()];
  const friends = user.getFriendsArr();
  friends.forEach((f) => {
    const friend = document.createElement("li");
    friend.classList.add("friend__list__item");
    friend.innerHTML = `<img src="${f.img}">
    <p class="friend__name">${f.name} ${f.lastName}</p>`;
    friendList.appendChild(friend);
  });
};
