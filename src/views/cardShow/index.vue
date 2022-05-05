<template>
  <div>
    <component :is="cardName"></component>
  </div>
</template>

<script>
import CardList from '../card/index';
export default {
  name: 'CARDPAGE',
  components: { ...CardList.List },
  data() {
    return {
      cardName: ''
    };
  },
  created() {
    console.log(this.$route.path);
    const customRouter = JSON.parse(sessionStorage.getItem('aaa'));
    const currRoute = customRouter.path === this.$route.path;
    if (currRoute) {
      this.cardName = this.$route.params.name;
    } else {
      this.$router.push('/404');
    }
  }
};
</script>

<style>
</style>