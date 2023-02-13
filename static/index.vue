<template>
  <div class="container">
    <TheHeader class="header"> <SearchInput /> </TheHeader>
    <SortBy />
    <PhonesList />
  </div>
</template>

<script>
import PhonesList from "../components/PhonesList.vue";
import PhoneInput from "../components/PhoneInput.vue";
import TheHeader from "../components/TheHeader.vue";
import SearchInput from "../components/SearchInput";
import SortBy from "../components/SortOrder.vue";

export default {
  name: "IndexPage",
  components: PhonesList,
  PhoneInput,
  TheHeader,
  SearchInput,
  SortBy,
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;700&display=swap");
@import url('https://fonts.cdnfonts.com/css/clash-display');
.container {
  padding: 8px;
}
.header{
  margin-bottom: 20px;
}
</style>
