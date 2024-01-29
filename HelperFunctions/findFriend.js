"use strict";

export const findFriend = (list, person) => {
  list.innerHTML = "";
  person.forEach(p => {
      const friendDiv = document.createElement("div");
      friendDiv.classList.add("friend__search__div");
      friendDiv.innerHTML = `<img src="${p.img}">
      <p class="person__name">${p.name} ${p.lastName}</p>
      `;
      list.appendChild(friendDiv);
    })
};
