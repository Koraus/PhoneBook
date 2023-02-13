<template>
  <div class="container">
    <TheHeader class="header" @addNewNumber="addNewNumber">
      <SearchInput />
    </TheHeader>
    <SortOrder />
    <PhonesList
      @nextPage="nextPage"
      @previosPage="previosPage"
      @deleteNumber="deleteNumber"
      @editNumber="editNumber"
    />
  </div>
</template>

<script>
import PhonesList from "../components/PhonesList.vue";
import PhoneInput from "../components/PhoneInput.vue";
import TheHeader from "../components/TheHeader.vue";
import SearchInput from "../components/SearchInput.vue";
import SortOrder from "../components/SortOrder.vue";

export default {
  name: "IndexPage",
  components: {
    PhonesList,
    PhoneInput,
    TheHeader,
    SearchInput,
    SortOrder,
  },
  data() {
    return {
      queryStr: "",
      selectedID: "",
      returnedVal: "",
      currentPage: 1,
    };
  },
  async mounted() {
    this.$store.dispatch("sendRequest", this.getURL);
  },
  watch: {
    getURL() {
      this.$store.dispatch("sendRequest", this.getURL);
    },
  },
  computed: {
    getURL() {
      const url = new URL(
        "https://63e38077619fce55d41a5d49.mockapi.io/phonesNumbers"
      );

      const page = this.$store.getters.getCurrentPage;
      const limit = this.$store.getters.getNumbersPerPage;
      const number = this.$store.getters.getSearchNumber;
      const sortOption = this.$store.getters.getSortBy;

      url.searchParams.append("number", number);
      url.searchParams.append("page", page);
      url.searchParams.append("limit", limit);
      url.searchParams.append("sortBy", "creationDate");
      url.searchParams.append("order", sortOption);
      return url;
    },
  },
  methods: {
    nextPage() {
      this.currentPage = this.currentPage + 1;
      this.$store.dispatch("updCurrentPage", this.currentPage);
    },
    previosPage() {
      this.currentPage = this.currentPage - 1;
      this.$store.dispatch("updCurrentPage", this.currentPage);
    },
    async deleteNumber(numberID) {
      await this.$store.dispatch("deleteNumber", numberID);
      this.$store.dispatch("sendRequest", this.getURL);
    },
    async editNumber(numberData) {
      await this.$store.dispatch("editNumber", numberData)
      this.$store.dispatch("sendRequest", this.getURL);
    },
    async addNewNumber(numberData) {
      await this.$store.dispatch("addNewNumber", numberData);
      this.$store.dispatch("sendRequest", this.getURL);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;700&display=swap");
@import url("https://fonts.cdnfonts.com/css/clash-display");
</style>

<style lang="scss" scoped>
.container {
  padding: 8px;
}
.header {
  margin-bottom: 20px;
}
</style>
