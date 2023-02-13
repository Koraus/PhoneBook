<template>
  <div>
    <h1>PhoneInput</h1>
    <input type="text" v-model="newContactNumber" class="input" />
    <span>number</span> <br />
    <input type="text" v-model="newContactName" class="input" />
    <span>Name</span> <br />
    <button @click="postNumber">send</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PhoneInput",
  data() {
    return {
      newContactName: "",
      newContactNumber: "",
    };
  },
  computed: {
    newNumber() {
      return {
        name: this.newContactName,
        number: this.newContactNumber,
      };
    },
  },
  watch: {
    newContactNumber() {
      this.newContactNumber = this.newContactNumber.toString().replace(/\D/g, "");
    },
  },
  methods: {
    postNumber() {
      this.$store.dispatch("postNumber", this.newNumber);
      this.newContactName = this.newContactNumber = "";
    },
  },
};
</script>
<style lang="scss" scoped>
.input {
  margin: 10px 0 10px 0;
}
</style>
