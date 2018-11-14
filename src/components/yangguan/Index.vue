<template>

  <div class="index-section">
    <toolbar></toolbar>
    <feature></feature>
    <team></team>
    <process></process>
    <grant></grant>
    <story></story>
    <page-footer></page-footer>
    
  </div>
</template>
<script>
import Toolbar from '@/components/yangguan/base/Header';
import Feature from '@/components/yangguan/index/Feature';
import Team from '@/components/yangguan/index/Team';
import Process from '@/components/yangguan/index/Process';
import Grant from '@/components/yangguan/index/Grant';
import Story from '@/components/yangguan/index/Story';
import PageFooter from '@/components/yangguan/base/Footer';
export default {
  data () {
    return {
      msg: 0
    }
  },
  created () {},
  components:{
    Toolbar,Feature,Team,Process,Grant,Story,PageFooter

  },
  methods:{
    
  },
}
</script>
<style lang="less">
.index-section{
  font-size: .12rem;  
}

.index-sub-title{
  font-size: .14rem;
  font-weight: 500;
  color: #666;
}

.index-item{
  margin: 0 auto;
  width: 12.05rem;
}

</style>



