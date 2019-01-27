<template>
<div class="header-nav first">
  <div class="header-title">
    <a class="logo">
      <img src="https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/common/logo.png">
    </a>
    <ul>
      <li class="active"><a href="/">首页</a></li>
      <li class="dot"></li>
      <li><a href="/StudyApplication">留学申请</a></li>
      <li class="dot"></li>
      <li><a href="/uniqueService">单项服务</a></li>
      <li class="dot"></li>
      <li><a href="/feature">特色项目</a></li>
    </ul>
  </div> 
</div>
</template>
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
          color: #fff;
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
    background: transparent;
    box-shadow: none;
    .header-title.second{
      height: .7rem;
      color: #fff;
      .logo{padding-top: 0}
      ul{
        padding-top: 0;
        li.dot{
          background: #fff;
        }
      }
    }
  }
  .header-nav.first{
    position: absolute;
    left: 50%;
    margin-bottom: 0;
    margin-left: -6rem;
    z-index: 9;
  }
  


</style>
