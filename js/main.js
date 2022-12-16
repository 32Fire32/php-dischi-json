const { createApp } = Vue;

createApp({
  data() {
    return {
      discs: [],
    };
  },
  created() {
    axios.get("http://localhost/php-dischi-json/api.php").then((res) => {
      this.discs = res.data;
      console.log(this.discs);
    });
  },
}).mount("#app");
