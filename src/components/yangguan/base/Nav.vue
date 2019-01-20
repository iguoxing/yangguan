<template>
    <div class="header-page">
     <div class="header-nav">
       <div class="header-title second">
         <a class="logo">
           <img src="https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/common/logo.png">
         </a>
         <ul>
            <li class="active"><a href="/">首页</a></li>
            <li class="dot"></li>
            <li><a>留学申请</a></li>
            <li class="dot"></li>
            <li><a>单项服务</a></li>
            <li class="dot"></li>
            <li><a href="/feature">特色项目</a></li>
            <!-- <li class="dot"></li>
            <li><a>客户故事</a></li>
            <li class="dot"></li>
            <li><a>团队介绍</a></li> -->
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
.header-title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 12.05rem;
    .logo{
      display: flex;
      padding-top: .3rem;
      font-size: .36rem;
      img{
        width: 1.46rem;
        height: .4rem;
      }
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
          color: #1a3a7e;
          font-size: .2rem;
          text-decoration: none;
        }
        a:hover{
          text-decoration: underline;
          cursor: pointer;
          opacity: .8;
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
