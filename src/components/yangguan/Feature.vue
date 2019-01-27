<template>

  <div class="index-section">
    <nav-bar></nav-bar>
    <project></project>
    <school></school>
    <page-footer></page-footer>
  </div>
</template>
<script>
import NavBar from '@/components/yangguan/base/Nav';
import Project from '@/components/yangguan/feature/Project';
import School from '@/components/yangguan/feature/School';
import PageFooter from '@/components/yangguan/base/Footer';
export default {
  components:{
    NavBar,Project,School,PageFooter
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



