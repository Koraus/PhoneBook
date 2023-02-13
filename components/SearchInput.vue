<template>
  <div class="search-input-box">
    <svg
      class="svg-ico"
      viewBox="0 0 27 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="13.7139"
        cy="13.9138"
        r="9.6"
        transform="rotate(30 13.7139 13.9138)"
        stroke="#2626261F"
      />
      <rect
        x="22.2843"
        y="17.4763"
        width="5.1966"
        height="2.4"
        rx="1"
        transform="rotate(30 22.2843 17.4763)"
        fill="#2626261F"
      />
    </svg>
    <input v-model="contactNumber" class="input" placeholder="Enter phone number" />
    <button @click="clearInput" class="btn-clear" :class="{ empty: !contactNumber }">
      X
    </button>
    <button class="btn-search">search</button>
  </div>
</template>

<script>
export default {
  name: "PhoneInput",
  data() {
    return {
      contactNumber: "",
    };
  },
  computed: {},
  watch: {
    contactNumber() {
      this.$store.dispatch("updSearchNumber", this.contactNumber);
      this.$store.dispatch("resetCurrentPage");
    },
  },
  methods: {
    clearInput() {
      this.contactNumber = "";
      this.$store.dispatch("resetCurrentPage");
    },
  },
};
</script>
<style lang="scss" scoped>
.svg-ico {
  width: 43px;
  height: 27px;
  margin-right: 16px;
}
.input {
  margin: 10px 0 10px 0;
  width: 100%;
  border: none;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: #262626;

  &::placeholder {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 140%;
    color: #262626;
    opacity: 0.4;
  }
}
.search-input-box {
  box-sizing: border-box;
  border: 1px solid rgba(38, 38, 38, 0.12);
  border-radius: 50px;
  position: relative;
  width: 562px;

  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 14px;
  padding-right: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
}
@media (max-width: 700px) {
  .search-input-box {
    width: 100%;
  }
}
.btn-search {
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

  &:active {
    border: 1px solid rgba(38, 38, 38, 0.82);
    background: #3b3b3bea;
  }
}
.btn-clear {
  border: none;
  background-color: transparent;
  padding-right: 10px;
}
.empty {
  opacity: 0.1;
}

@media (max-width: 800px) {
  .btn-search {
    font-size: 12px;
    padding-left: 14px;
    padding-right: 14px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .input {
    font-size: 12px;
    &::placeholder {
      font-size: 12px;
    }
  }
}
</style>
