
<template>
    <div class="index-service">
      <div class="service-banner">
        <p>相信 <span>制度</span> 的力量！</p>
        <p class="sec"><span>[制度]</span> + <span>[专业]</span> = <span>[高水准]</span></p>
      </div>
      <div class="index-title">
        <div>Our Service Process</div>
        <div>
          <i class="dot"></i><i class="dot"></i><i class="dot"></i><i class="dot"></i><i class="dot"></i><i class="dot"></i><i class="dot"></i><i class="dot"></i><i class="dot"></i><i class="dot"></i>
        </div>
      </div>
      <div class="index-sub-title">
        我们导师团中的每位顾问与导师都是专业尽职的，但我们仍然设立委员会与抽查、客诉机制来最大限度的确保洋观国<br>际各项服务的高水准与专业度。
      </div>
      <div class="service-list index-item">
        <div class="service-item">
          <img class="service-icon" src="https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/index/service/service_icon_1.png">
          <div class="service-title">申请主导师</div>
        </div>
        <div class="service-item">
          <img class="service-icon" src="https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/index/service/service_icon_2.png">
          <div class="service-title">职业就业顾问</div>
        </div>
        <div class="service-item">
          <img class="service-icon" src="https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/index/service/service_icon_3.png">
          <div class="service-title">外籍文书导师</div>
        </div>
        <div class="service-item">
          <img class="service-icon" src="https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/index/service/service_icon_4.png">
          <div class="service-title">面试官</div>
        </div>
        <div class="service-item">
          <img class="service-icon" src="https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/index/service/service_icon_5.png">
          <div class="service-title">选校委员会</div>
        </div>
        <div class="service-item">
          <img class="service-icon" src="https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/index/service/service_icon_6.png">
          <div class="service-title">文书委员会</div>
        </div>
      </div>
      <img class="service-process" src="https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/index/service/service_banner.jpg">
    </div>
</template>
<script>
export default{
    data(){
        return {
            seen: 0
        }
    },
    methods:{
    },
}    
</script>

<style scoped>
@import url('../../../assets/css/base.css');
</style>

<style lang="less">
.index-service{
  padding-bottom: .8rem;
  background: #fff;
  .service-banner{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 5.43rem;
    text-align: left;
    background: url(https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/index/middle_banner.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    p{
      margin: 0;
      width: 6rem;
      font-size: .32rem;
      span{
        font-size: .53rem;
        color: #78C9FF;
      }
    }
    p.sec{
      font-size: .53rem;
    }
  }
  .index-title{
    padding-top: .8rem;
    color: #1A3A7E;
    .dot{
      background: #1A3A7E;
    }
  }
  .service-list{
    display: flex;
    justify-content: center;
    margin-top: .8rem;
    .service-item{
      margin-right: 0.8rem;
      width: 1.13rem;
      border: solid .02rem #4f81bd;
      background: #4f81bd;
      box-sizing: border-box;
      color: #fff;
      .service-icon{
        width: 1.07rem;
        height: 1rem;
      }
      .service-title{
        font-size: .18rem;
      }
    }
    .service-item:last-child{
      margin-right: 0;
    }
  }
  .service-process{
    margin: 1rem auto 0;
    width: 12.05rem;
  }
  
}


</style>

