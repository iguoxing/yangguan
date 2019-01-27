<template>
  <div class="header-page">
    <nav-clarity></nav-clarity>
    <banner></banner>
      
    <nav-bar></nav-bar>
  </div>  
</template>
<script>

import NavBar from '@/components/yangguan/base/Nav';
import NavClarity from '@/components/yangguan/base/NavClarity';
import Banner from '@/components/yangguan/base/Banner';

export default {
  data () {
    return {
      msg: '洋观',
    }
  },
  components:{
    NavBar,Banner,NavClarity
  },
}
</script>
<style lang="less">
.header-page{
  position: relative;
}

</style>
