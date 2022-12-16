const { createApp } = Vue;

createApp({
  data() {
    return {
      discs: [],
      searchTitle: "",
    };
  },
  created() {
    //richiamo il file json da api.php
    axios.get("http://localhost/php-dischi-json/api.php").then((res) => {
      this.discs = res.data;
    });
  },

  computed: {
    filteredDiscs() {
      return this.discs.filter((disc) => {
        return (
          disc.title.toLowerCase().indexOf(this.searchTitle.toLowerCase()) > -1
        );
      });
    },
  },
}).mount("#app");
