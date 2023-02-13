<template>
  <div class="editing-window">
    <h2 class="number__title">Name:</h2>
    <input
      class="number__input"
      type="text"
      ref="name"
      placeholder="name"
      v-model="nameInput"
    />

    <h2 class="number__title">Number:</h2>

    <input
      type="number"
      class="number__input"
      ref="number"
      placeholder="number"
      v-model="numberInput"
    />

    <div class="number__btns">
      <button @click="editNumber" v-if="windowType == 'edit'">confirm changes</button>

      <button v-if="windowType == 'new'" @click="createNew">
        create new phone number
      </button>

      <button @click="close">cancel changes</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    number: Object,
  },
  name: "NumberPopupWindow",
  data() {
    return {
      numberData: {},
      newNumberTemplate: {
        name: "",
        number: "",
      },
      numberInput: "",
      nameInput: "",
    };
  },
  computed: {},
  created() {},
  unmount() {},
  watch: {},
  mounted() {
    if (this.windowType == "edit") {
      this.numberData = {
        name: this.number.name,
        number: this.number.number,
        creationDate: this.number.creationDate,
        id: this.number.id,
      };
      this.numberInput = this.number.number;
      this.nameInput = this.number.name;
    }
  },
  methods: {
    close() {
      this.$emit("close");
    },
    editNumber() {
      this.$emit("editNumber", this.numberData);
      this.close();
      
    },
    createNew(){}
  },
};
</script>
<style lang="scss" scoped>
.editing-window {
  color: white;
  position: fixed;
  z-index: 100;
  padding: 20px;
  width: 400px;
  height: 400px;
  background: #262626;
  border-radius: 50px;
  top: 30%;
  transform: translateY(-30%)  translateX(-50%);
  left: 50%;
  
}
.number {
  color: white;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;
  color: #262626;
  background: transparent;
  border: none;

  &__input {
    color: white;
    font-family: "Manrope";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
    background: transparent;
    border: none;
    margin-bottom: 18px;
    background: transparent;
    text-align: center;
  }
  &__title {
    color: white;
    font-family: "Manrope";
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    font-size: 30px;
  }

  &__btns {
    display: flex;
    justify-content: space-around;
  }
}
button {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: white;

  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 8px;

  margin-right: 16px;

  border: 1px solid rgb(255, 255, 255);
  border-radius: 50px;
  background: #262626;
}
</style>
