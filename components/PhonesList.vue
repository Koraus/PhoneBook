<template>
  <div>
    <h2 v-if="list !== undefined && list.length == 0" class="error-text">
      nothing found
    </h2>
    <ul v-if="!list.length == 0" class="numbers-list">
      <number-card
        v-for="number in list"
        :key="number.id"
        :number="number"
        @deleteNumber="deleteNumber"
        @editNumber="editNumber"
        class="numbers-list__item"
      >
      </number-card>
    </ul>
    <div class="pagination">
      <button :disabled="page <= 1" class="btn" @click="previosPage"> 	
 Previos Page </button>
      <button
        :disabled="list.length < this.$store.getters.getNumbersPerPage"
        class="btn"
        @click="nextPage"
      >
        Next Page
      </button>
    </div>
  </div>
</template>

<script>
import NumberCard from "./NumberCard.vue";

export default {
  components: {
    NumberCard,
  },
  name: "PhonesList",
  data() {
    return {};
  },

  computed: {
    list() {
      return this.$store.getters.getNumbersList;
    },
    page() {
      return this.$store.getters.getCurrentPage;
    },
  },
  methods: {
    nextPage() {
      this.$emit("nextPage");
    },
    previosPage() {
      this.$emit("previosPage");
    },
    deleteNumber(numberID) {
      this.$emit("deleteNumber", numberID);
    },
    editNumber(numberData) {
      this.$emit("editNumber", numberData);
    },
  },
};
</script>
<style lang="scss" scoped>
.numbers-list {
  padding-left: 0px;
  &__item {
  }
}
li:nth-child(odd) {
  background: rgba(38, 38, 38, 0.03);
}
.error-text {
  margin-top: 30px;
  margin-bottom: 30px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;
  color: #262626;
  text-align: center;
}
.btn {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 0.01em;
  text-transform: uppercase;

  color: #ffffff;

  background: #262626;
  border: 1px solid rgba(38, 38, 38, 0.12);

  border-radius: 50px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 13px;
  padding-bottom: 13px;

  margin: 10px;

  &:disabled {
    background: #8b8989;
    color: #b7b7b7;
  }
}
.pagination {
  display: flex;
  justify-content: center;
}

@media (max-width: 800px) {
  .btn {
    font-size: 10px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 6px;
    padding-bottom: 6px;
  }
}
</style>
