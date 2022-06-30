<template>
  <div>
    <button>按钮1</button>1
  </div>
</template>

<script>
export default {
  name: "c-button",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
  font-size: 32px;
}
button{
  background: #fff;
  border: 0;
  box-shadow: 1px 1px 1px #000;
}
</style>
