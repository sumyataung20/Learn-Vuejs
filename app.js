// console.log("I am Vue");

const app = Vue.createApp({
  //   template: "Hi Hi Hi",

  data() {
    return {
      books: [
        {
          title: "Book1",
          author: "author1",
          age: 20,
          img: "img/user1.jpg",
          isFav: true,
        },

        {
          title: "Book2",
          author: "author2",
          age: 25,
          img: "img/user2.jpg",
          isFav: false,
        },

        {
          title: "Book3",
          author: "author3",
          age: 30,
          img: "img/user3.jpg",
          isFav: true,
        },
      ],

      showBook: true,

      link: "https://www.google.com",
    };
  },

  methods: {
    clickhandler(book) {
      book.isFav = !book.isFav;
    },

    increaseage() {
      this.age++;
    },

    mouseoverhandler(event, data) {
      console.log(" I am mouse over", event, data);
    },

    mouseleavehandler() {
      console.log("mouse is leaving");
    },

    dblclickhandler() {
      console.log("Double Click");
    },
  },

  computed: {
    filteredbook() {
      return this.books.filter((book) => {
        return book.isFav;
      });
    },
  },
});

app.mount("#app");
