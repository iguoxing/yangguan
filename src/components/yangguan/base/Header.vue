<template>
    <div class="header-page">
<div class="header">
       <div class="header-title">
         <a class="logo">LOGO</a>
         <ul>
            <li class="active"><a>首页</a></li>
            <li class="dot"></li>
            <li><a>留学申请</a></li>
            <li class="dot"></li>
            <li><a>单项服务</a></li>
            <li class="dot"></li>
            <li><a>特色服务</a></li>
            <li class="dot"></li>
            <li><a>客户故事</a></li>
            <li class="dot"></li>
            <li><a>团队介绍</a></li>
         </ul>  
       </div>
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
     <div class="header-nav">
       <div class="header-title second">
         <a class="logo">LOGO</a>
         <ul>
            <li class="active"><a>首页</a></li>
            <li class="dot"></li>
            <li><a>留学申请</a></li>
            <li class="dot"></li>
            <li><a>单项服务</a></li>
            <li class="dot"></li>
            <li><a>特色服务</a></li>
            <li class="dot"></li>
            <li><a>客户故事</a></li>
            <li class="dot"></li>
            <li><a>团队介绍</a></li>
         </ul>
        </div>
      </div>
    </div>  
</template>
<script>
export default {
  data () {
    return {
      msg: '洋观',
    }
  },
}
</script>
<style lang="less">
ul{
  margin: 0;
  padding: 0;
}
.header{
  width: 100%;
  height: 7.62rem;
  background: url(https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/index/header-bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
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
}

.header-title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 12.05rem;
    .logo{
      padding-top: .3rem;
      font-size: .36rem;
    }
    ul{
      display: flex;
      align-items: center;
      padding-top: .3rem;
      list-style: disc;
      li{
        display: inline;
        font-weight: 300;
        a{
          font-size: .2rem;
        }
        
      }
      li.dot{
        display: inline-block;
        margin: 0 .3rem;
        width: .04rem;
        height: .04rem;
        background: #fff;
        transform: rotate(-45deg);
      }
      li.active a{
        font-weight: 600;
      }
    }
  }
  .header-nav{
    margin-bottom: 1rem;
    height: .7rem;
    background: #fff;
    box-shadow: 0 0.125em 0.125em 0 rgba(0,0,0,.125);
    .header-title.second{
      height: .7rem;
      color: #1a3a7e;
      .logo{padding-top: 0}
      ul{
        padding-top: 0;
        li.dot{
          background: #1a3a7e;
        }
      }
    }
  }
  


</style>
