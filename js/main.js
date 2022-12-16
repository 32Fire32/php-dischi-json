const { createApp } = Vue;

createApp({
  data() {
    return {
      discs: [],
      searchTitle: "",
      searchAuthor: "",
    };
  },

  created() {
    //richiamo il file json da api.php
    axios.get("http://localhost/php-dischi-json/api.php").then((res) => {
      this.discs = res.data;
    });
  },

  computed: {
    filteredTitle() {
      return this.discs.filter((disc) => {
        return (
          disc.title.toLowerCase().indexOf(this.searchTitle.toLowerCase()) > -1
        );
      });
    },
    filteredAuthor() {
      return this.discs.filter((disc) => {
        return (
          disc.author.toLowerCase().indexOf(this.searchAuthor.toLowerCase()) >
          -1
        );
      });
    },
  },
}).mount("#app");
