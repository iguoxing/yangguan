<template>

  <div class="index-section">
    <toolbar></toolbar>
    <div class="index-feature">
      <div class="index-title">Features</div>
    </div>
  </div>
</template>
<script>
import Toolbar from '@/components/yangguan/base/Header';
export default {
  data () {
    return {
      msg: 'Welcome'
    }
  },
  created () {},
  components:{
    Toolbar
  }
}
</script>
<style lang="less">
.index-section{
  font-size: .12rem;
  .index-title{

  }
}

.index-title{

}



</style>



