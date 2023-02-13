<template>
  <div class="edit-window">
    <h2 class="edit-window__title">Name:</h2>

    <input
      class="edit-window__input"
      type="text"
      placeholder="name"
      v-model="nameInput"
    />

    <h2 class="edit-window__title">Number:</h2>

    <input
      class="edit-window__input"
      placeholder="number"
      v-model="numberInput"
      @input="mask"
    />

    <div class="edit-window__btns">
      <button class="edit-window__btn" @click="editNumber" :disabled="!(numberInput && nameInput)">confirm</button>
      <button class="edit-window__btn" @click="close">cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    number: Object,
  },
  name: "EditNumberWindow",
  data() {
    return {
      numberData: {},
      numberInput: "",
      nameInput: "",
    };
  },
  mounted() {
    this.numberData = {
      name: this.number.name,
      number: this.number.number,
      creationDate: this.number.creationDate,
      id: this.number.id,
    };
    this.numberInput = this.number.number;
    this.nameInput = this.number.name;
  },
  watch: {},
  methods: {
    close() {
      this.$emit("close");
    },
    editNumber() {
      this.numberData.name = this.nameInput;
      this.numberData.number = this.numberInput;
      this.$emit("editNumber", this.numberData);
      this.close();
    },
    mask() {
      this.numberInput = this.numberInput.replace(/[^+\d]/g, "");
    },
  },
};
</script>

<style lang="scss" scoped>
.edit-window {
  box-sizing: border-box;
  min-width: 350px;

  color: white;
  position: fixed;
  z-index: 100;
  padding: 30px;
  padding-bottom: 55px;

  background: #262626;
  border-radius: 50px;
  top: 30%;
  transform: translateY(-30%) translateX(-50%);
  left: 50%;

  &__title {
    color: white;
    font-family: "Manrope";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
    background: transparent;
    border: none;
    margin-bottom: 18px;
  }
  &__input {
    color: white;
    font-family: "Manrope";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 140%;
    background: transparent;
    border: none;
    margin-bottom: 18px;
    background: #2c2c2c;
    text-align: center;
    width: 100%;
  }
  &__btns {
    display: flex;
    justify-content: space-between;
  }
}

.edit-window__btn {
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

    &:disabled {
    background: #8b8989;
    color: #b7b7b7;
  }
}



@media (max-width: 800px) {
  .edit-window__btn {
    font-size: 10px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 6px;
    padding-bottom: 6px;

    margin-top: 30px;
  }
  .edit-window {
    padding: 40px;
    min-height: 260px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &__title {
      font-size: 10px;
      margin-bottom: 8px;
    }

    &__input {
      font-size: 14px;
      margin-bottom: 8px;
    }
  }
}
</style>
