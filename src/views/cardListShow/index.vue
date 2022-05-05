<template>
  <div class="box">
    <div v-for="item in list" :key="item.name">
      <div @click="btn(item)">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CARDLIST',
  data() {
    return {
      list: [
        { name: 'Home', title: 'Home' },
        { name: 'About', title: 'About' },
        { name: 'Goods', title: 'Goods' }
      ]
    };
  },
  methods: {
    btn(val) {
      // console.log(val);
      this.$router.push({ path: `/cardPage/${val.name}` });
      sessionStorage.setItem('aaa', JSON.stringify({ path: `/cardPage/${val.title}` }));
    }
  }
};
</script>

<style>
.box {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>