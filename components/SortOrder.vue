<template>
  <div class="sort-order" @click="sortOrder = !sortOrder">
    <span class="sort-order__text"> Sort by: </span>
    <span v-if="sortOrder" class="sort-order__text sort-order__text--active"> Newest</span>
    <span v-if="!sortOrder" class="sort-order__text sort-order__text--active">Oldest </span>
  </div>
</template>

<script>
export default {
  name: "sortOrder",
  data() {
    return {
      sortOrder: false,
    };
  },
  computed: {
        sortOrderSelected() {
      return this.sortOrder
        ? "desc"
        : "asc";
    },
  },

  watch: {
    sortOrder() {
      this.$store.dispatch("selectSortingOption", this.sortOrderSelected);

    },
  },
  methods: {
  },
};
</script>
<style lang="scss" scoped>

.input {
}
.sort-order {
  max-width: 200px;
  margin: 0 auto;
  padding: 10px 16px 10px 16px;
  border: 1px solid rgba(38, 38, 38, 0.12);
  border-radius: 50px;
  &__text {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: rgba(38, 38, 38, 0.4);
  }
  &__text--active {
    color: rgba(38, 38, 38, 1);
  }
}
</style>
