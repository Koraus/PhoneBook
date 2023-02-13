<template>
  <header class="header">
    <div v-if="newNumberWindow" class="bg" @click="showNumberWindow"></div>
    <div class="header__top">
      <svg
        class="logo"
        width="136"
        height="28"
        viewBox="0 0 136 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.8273 24.8323V18.6519H15.9071C16.3058 20.4661 17.7414 21.6424 19.9745 21.6424C23.0649 21.6424 24.7597 19.569 24.7597 16.4987C24.7597 13.4285 23.0251 11.3351 19.9546 11.3351C17.6218 11.3351 16.2261 12.4516 15.8273 14.2858H15.6479V11.5345H13.674V24.8323H15.8273ZM15.8273 16.6582V16.4788C15.8273 14.3456 17.0635 13.3089 19.2767 13.3089C21.3502 13.3089 22.6064 14.1063 22.6064 16.4987C22.6064 18.8712 21.3702 19.6886 19.2368 19.6886C17.1233 19.6886 15.8273 18.6918 15.8273 16.6582Z"
          fill="white"
        />
        <path
          d="M28.4056 21.443V16.6383C28.4056 14.5449 29.243 13.269 31.5957 13.269C33.6494 13.269 34.5466 14.0665 34.5466 16.0601V21.443H36.68V15.5418C36.68 13.1294 35.3441 11.3351 32.6126 11.3351C30.0804 11.3351 28.8642 12.8902 28.5252 14.5649H28.4056V8.08545H26.2523V21.443H28.4056Z"
          fill="white"
        />
        <path
          d="M43.6807 21.6424C46.9905 21.6424 49.2036 19.5491 49.2036 16.4987C49.2036 13.4086 46.9905 11.3351 43.6807 11.3351C40.3909 11.3351 38.1777 13.4086 38.1777 16.4987C38.1777 19.5491 40.3909 21.6424 43.6807 21.6424ZM43.6807 19.7285C41.2881 19.7285 40.2912 18.5921 40.2912 16.4987C40.2912 14.3854 41.2881 13.2291 43.6807 13.2291C46.0932 13.2291 47.0901 14.3854 47.0901 16.4987C47.0901 18.5921 46.0932 19.7285 43.6807 19.7285Z"
          fill="white"
        />
        <path
          d="M52.9196 21.443V16.5386C52.9196 14.3854 53.8966 13.269 56.0699 13.269C58.1235 13.269 58.9609 14.206 58.9609 16.0601V21.443H61.1143V15.482C61.1143 13.1892 59.7585 11.3351 57.007 11.3351C54.4947 11.3351 53.1788 12.9301 52.8797 14.6048H52.7402V11.5345H50.7663V21.443H52.9196Z"
          fill="white"
        />
        <path
          d="M68.0176 21.6424C70.9685 21.6424 73.0421 20.187 73.0421 18.0737V17.8943H70.8887V18.0538C70.8887 19.2301 70.0314 19.9079 67.9578 19.9079C65.6649 19.9079 64.7278 18.8911 64.648 16.9772H73.062C73.1218 16.6782 73.1417 16.3991 73.1417 16.0402C73.1417 13.0298 71.0482 11.3351 67.9777 11.3351C64.7477 11.3351 62.6343 13.4086 62.6343 16.4987C62.6343 19.8082 64.7677 21.6424 68.0176 21.6424ZM67.9378 13.0298C70.0513 13.0298 71.108 13.907 71.108 15.7411V15.781H64.668C64.7876 14.0067 65.7446 13.0298 67.9378 13.0298Z"
          fill="white"
        />
        <path
          d="M80.1359 21.443V18.5921H80.2755C80.6942 20.5658 82.1497 21.6424 84.4027 21.6424C87.553 21.6424 89.2477 19.5491 89.2477 16.4987C89.2477 13.4086 87.5729 11.3351 84.5223 11.3351C82.1497 11.3351 80.8337 12.5513 80.435 14.226H80.3153V8.08545H78.162V21.443H80.1359ZM80.3153 16.5984V16.4389C80.3153 14.3256 81.5316 13.2889 83.7647 13.2889C85.8781 13.2889 87.0944 14.1063 87.0944 16.4987C87.0944 18.8712 85.8981 19.6687 83.7248 19.6687C81.5914 19.6687 80.3153 18.6718 80.3153 16.5984Z"
          fill="white"
        />
        <path
          d="M95.8046 21.6424C99.1144 21.6424 101.328 19.5491 101.328 16.4987C101.328 13.4086 99.1144 11.3351 95.8046 11.3351C92.5148 11.3351 90.3016 13.4086 90.3016 16.4987C90.3016 19.5491 92.5148 21.6424 95.8046 21.6424ZM95.8046 19.7285C93.412 19.7285 92.4151 18.5921 92.4151 16.4987C92.4151 14.3854 93.412 13.2291 95.8046 13.2291C98.2172 13.2291 99.2141 14.3854 99.2141 16.4987C99.2141 18.5921 98.2172 19.7285 95.8046 19.7285Z"
          fill="white"
        />
        <path
          d="M107.955 21.6424C111.264 21.6424 113.477 19.5491 113.477 16.4987C113.477 13.4086 111.264 11.3351 107.955 11.3351C104.665 11.3351 102.452 13.4086 102.452 16.4987C102.452 19.5491 104.665 21.6424 107.955 21.6424ZM107.955 19.7285C105.562 19.7285 104.565 18.5921 104.565 16.4987C104.565 14.3854 105.562 13.2291 107.955 13.2291C110.367 13.2291 111.364 14.3854 111.364 16.4987C111.364 18.5921 110.367 19.7285 107.955 19.7285Z"
          fill="white"
        />
        <path
          d="M117.193 21.443V17.3959H120.025L122.956 21.443H125.488L121.779 16.2994L125.508 11.5345H122.996L120.025 15.462H117.193V8.08545H115.04V21.443H117.193Z"
          fill="white"
        />
        <path
          opacity="0.24"
          d="M5.1038 28V26.6177H1.52405V1.38228H5.1038V0H0V28H5.1038Z"
          fill="white"
        />
        <path
          opacity="0.24"
          d="M130.265 26.6177V28H135.333V0H130.265V1.38228H133.844V26.6177H130.265Z"
          fill="white"
        />
      </svg>
      <NewNumberWindow
        v-if="newNumberWindow"
        @addNewNumber="addNewNumber"
        @close="showNumberWindow"
      />
      <div class="new-number-box">
        <button class="new-number-btn" @click="showNumberWindow">new number</button>
        <div class="btn-decor" @click="showNumberWindow"></div>
      </div>
    </div>

    <h1 class="main-title">
      👋 Hello! <br />
      Let’s found needly phone number
    </h1>
    <slot> </slot>
  </header>
</template>

<script>
import NewNumberWindow from "./NewNumberWindow.vue";
export default {
  name: "TheHeader",
  components: NewNumberWindow,
  data() {
    return {
      newNumberWindow: false,
    };
  },
  methods: {
    addNewNumber(data) {
      this.$emit("addNewNumber", data);
    },
    showNumberWindow() {
      this.newNumberWindow = !this.newNumberWindow;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  border-radius: 32px;
  background-color: rgba(38, 38, 38, 1);
  padding: 30px;
  min-height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__top {
    width: 100%;
    display: flex;

    justify-content: space-between;
    align-items: center;
  }
}
.main-title {
  font-family: "Clash Display", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 56px;
  line-height: 100%;
  color: #ffffff;
  text-align: center;
}
.logo {
  align-self: flex-start;
}
.new-number-box {
  display: flex;
}
.new-number-btn {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 0.01em;
  text-transform: uppercase;

  color: #ffffff;

  background: #262626;
  border: 1px solid rgb(255, 255, 255);

  border-radius: 50px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 13px;
  padding-bottom: 13px;

  margin: 0 2px 0px 10px;
}
.btn-decor {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: white;
  position: relative;

  &::before {
    content: "";
    width: 2px;
    height: 12px;
    background: #000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &::after {
    content: "";
    width: 12px;
    height: 2px;
    background: #000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.bg {
  width: 100%;
  height: 100%;
  background: rgba(97, 97, 97, 0.441);
  position: fixed;
  top: 0;
  left: 0;
}
@media (max-width: 800px) {
  .main-title {
    font-size: 36px;
  }
  .new-number-btn {
    font-size: 12px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 6px;
    padding-bottom: 6px;
  }
  .btn-decor {
    width: 30px;
    height: 30px;

    &::before {
      content: "";
      width: 1px;
      height: 8px;
    }
    &::after {
      content: "";
      width: 8px;
      height: 1px;
    }
  }
}
</style>
