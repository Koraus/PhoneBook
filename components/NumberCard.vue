<template>

  <li class="list-item">
    <div v-if="editWindow" class="bg" @click="showNumberWindow"></div>
    <EditNumberWindow
     v-if="editWindow" 
     :number="number" 
     @close="showNumberWindow" 
     @editNumber="editNumber" 
     />

    <span class="name"> {{ number.name }} </span>
    <span class="number"> {{ number.number }} </span>

    <button class="btn-list" @click="showNumberWindow">edit</button>

    <button class="btn-list" @click="deleteNumber"> <span class="desktop"> delete </span> <span class="mobile"> del </span> </button>

  </li>

</template>

<script>
import EditNumberWindow from "./EditNumberWindow.vue";
export default {
  name: "NumberCard",
  components: EditNumberWindow,
  props: {
    number: Object,
  },
  data() {
    return {
      editWindow: false,

    };
  },
  computed: {},
  methods: {
    deleteNumber() {
        this.$emit("deleteNumber", this.number.id)
    },
    showNumberWindow() {
      this.editWindow = !this.editWindow;
    },
    editNumber(numberData){
       this.$emit("editNumber", numberData);

    },
  },
};
</script>

<style lang="scss" scoped>
.name {
  width: 30%;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;
  color: #262626;
  margin-right: 10px;
}
.number {
  width: 40%;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;
  color: #262626;
}
.btn-list {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #000000;

  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 8px;

  margin-right: 16px;

  border: 1px solid rgba(38, 38, 38, 0.102);
  border-radius: 50px;
}
.list-item {
  padding-bottom: 30px;
  padding-top: 30px;
  padding-left: 32px;
  padding-right: 32px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  list-style-type: none;
  border-radius: 24px;
}
.bg {
  width: 100%;
  height: 100%;
  background: rgba(97, 97, 97, 0.441);
  position: fixed;
  top: 0;
  left: 0;
}
.desktop{
    display: inline;
}
.mobile{
  display: none;
}
@media (max-width: 800px) {
.name {
  width: 30%;
  font-size: 14px;

}
.number {
  width: 40%;
  font-size: 14px;

}
.btn-list {

  font-size: 10px;
  line-height: 140%;

  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
  padding-bottom: 6px;


}
 button:last-child {margin-right: 0px;}
.list-item{
    padding-bottom: 15px;
  padding-top: 15px;
  padding-left: 16px;
  padding-right: 16px;
}
.desktop{
    display: none;
}
.mobile{
  display: inline;
}
}
</style>
