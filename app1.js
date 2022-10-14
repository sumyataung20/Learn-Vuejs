const app = Vue.createApp({
  //   template: "hello This is Vuejs",

  data() {
    return {
      familyname: "hsu",

      books: [
        {
          title: "Book1",
          author: "Person1",
          age: 20,
          img: "./img/user1.jpg",
        },
        {
          title: "Book2",
          author: "Person2",
          age: 30,
          img: "./img/user2.jpg",
        },
        {
          title: "Book3",
          author: "Person3",
          age: 40,
          img: "./img/user3.jpg",
        },
      ],

      link: "https://google.com",
      link2: "https://youtube.com",

      showbook: true,
    };
  },

  methods: {
    increaseage() {
      this.age++;
    },

    mouseoverhandler() {
      console.log("mouseover");
    },

    mouseleavehandler() {
      console.log("mouse leave");
    },

    dblclickhandler() {
      console.log("I'm double click");
    },
  },
});

app.mount("#app");
