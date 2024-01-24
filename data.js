"use strict";

export const user = {
  id: crypto.randomUUID(),
  name: "Nemanja",
  lastName: "Malesija",
  adress: {
    country: "Montenegro",
    city: "Podgorica",
    street: "Vukosava Bozovica b.b.",
    socialMedia: {
      facebook: "Nemanja Malesija",
      instagram: "nemanjamalesija",
    },
  },

  friends: [
    {
      id: crypto.randomUUID(),
      name: "Gordana",
      lastName: "Stouns",
      img: "/img/friendImages/friend1.jpeg",
    },
    {
      id: crypto.randomUUID(),
      name: "Petar",
      lastName: "Pan",
      img: "/img/friendImages/friend2.jpeg",
    },
    {
      id: crypto.randomUUID(),
      name: "Kilibarda",
      lastName: "Petrovska",
      img: "/img/friendImages/friend3.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Majda",
      lastName: "Odzaklijevska",
      img: "/img/friendImages/friend4.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Hoklberi",
      lastName: "Haund",
      img: "/img/friendImages/friend5.avif",
    },
    {
      id: crypto.randomUUID(),
      name: "Sadam",
      lastName: "Husein",
      img: "/img/friendImages/friend6.png",
    },
  ],

  posts: [
    {
      id: crypto.randomUUID(),
      postText: "Danas se osjecam kao Knez mihajlova",
      likes: [
        {
          name: "Gordana",
          lastName: "Stouns",
        },
        {
          name: "Petar",
          lastName: "Pan",
        },
      ],
      comments: [
        {
          name: "Gordana",
          lastName: "Stouns",
          commentText: "Hahaha, ti preludi djecace",
        },
        {
          name: "Sadam",
          lastName: "Husein",
          commentText: "Mi smo dvije strane istog novcica",
        },
        {
          name: "Petar",
          lastName: "Pan",
          commentText: "Nekad kasljem, nekad vodu nosim",
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      postText: "Iskasljao sam danas jedan zeleni klobuk",
      likes: [
        {
          name: "Hoklberi",
          lastName: "Haund",
        },
      ],
      comments: [],
    },
    {
      id: crypto.randomUUID(),
      postText: "Ako umremo, umrecemo zajedno",
      likes: [
        { name: "Kilibarda", lastName: "Petrovska" },
        { name: "Petar", lastName: "Pan" },
        { name: "Sadam", lastName: "Husein" },
        { name: "Maja", lastName: "Odzaklijevska" },
      ],
      comments: [
        {
          name: "Gordana",
          lastName: "Stouns",
          commentText: "Zna se ko kosi, a ko vodu nosi",
        },
        {
          name: "Sadam",
          lastName: "Husein",
          commentText: "Zaspati necu, ali umreti necu nikada",
        },
        {
          name: "Hoklberi",
          lastName: "Haund",
          commentText: "Snekakos proljeca, ja se sjetim starih drugova",
        },
        {
          name: "Majda",
          lastName: "Odzaklijevska",
          commentText: "Plastimo sijeno na Hilandar",
        },
      ],
    },
  ],
};
