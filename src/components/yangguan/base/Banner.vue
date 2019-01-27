<template>
<div class="header">
  <div class="header-vision">
      <span class="vision-bigger">Vision</span>[愿景]
    </div>
    <div class="header-sub-vision">
      <p>每一所申请院校都应是你心仪且合适的</p>
      <p>精细拆分的 <b>8M</b> 单项服务，把钱用在最有价值的服务上</p>
      <p>服务不止于 <b>offer</b>，更加关注 <b>安全 文化 心理 职业</b> 软性辅导</p>
    </div>
    <a class="header-btn">了解更多</a>
</div>  
</template>
<script>

import NavBar from '@/components/yangguan/base/Nav';

export default {
  data () {
    return {
      msg: '洋观',
    }
  },
  components:{
    NavBar
  },
}
</script>
<style lang="less">
.header{
  width: 100%;
  height: 7.62rem;
  box-sizing: border-box;
  padding-top: 1rem;
  background: url(https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/index/header-bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
}
.header-vision{
    margin-top: 1.25rem;
    margin-bottom: .3rem;
    font-size: .36rem;
    .vision-bigger{
      font-size: .5rem;
      font-weight: 500;
    }
  }
  .header-sub-vision{
    font-size: .24rem;
    p{
      margin-top: 0;
      margin-bottom: .12rem;
      b{
        font-size: .36rem;
        font-weight: 400;
      }
    }
  
  }
  .header-btn{
    display: block;
    margin: .6rem auto;
    width: 1.8rem;
    height: .56rem;
    line-height: .56rem;
    border: solid .01rem #fff;
    border-radius: .5rem;
    font-size: .24rem;
    color: #fff;
    cursor: pointer;
  }
  .header-btn:hover{
    font-weight: 500;
    color: #666;
    background: #fff;
  }


</style>
