<template>
    <div class="index-grant">
      <div class="index-title">
        <div>Scholarship & Referral program</div>
        <div>
          <i class="dot"></i><i class="dot"></i><i class="dot"></i><i class="dot"></i><i class="dot"></i><i class="dot"></i><i class="dot"></i><i class="dot"></i><i class="dot"></i><i class="dot"></i>
        </div>
      </div>
      <div class="index-sub-title">
        我们导师团中的每位顾问与导师都是专业尽职的，但我们仍然设立委员会与抽查、客诉机制来最大限度的确保洋观<br>国际各项服务的高水准与专业度。
      </div>
      <div class="grant-banner">
        <div class="banner-title">助学金政策</div>
        <img class="banner-line" src="https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/index/help/help-line.png">
        <div class="banner-sub-title">我们的一点心意</div>
        <div class="banner-des">我们心目中理想的教育应该是普惠且公平的，不应该被经济所限制，因此洋观教育团队愿意在此承诺对于家庭经济能力有限而且认同我们观点的学生实施优惠政策，同时欢迎背景突出潜力较大的学生申请我们的助学金，最高可涵盖全部服务费用。</div>
      </div>
      <div class="grant-plan">
        <div class="plan-item">
          <img class="plan-icon" src="https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/index/help/help_icon_1.png">
          <div class="plan-item">客户推荐计划</div>
          <div class="plan-des">老客户推荐新客户若签约成功，各享受2000助学金减免。 </div>
        </div>
        <div class="plan-item">
          <img class="plan-icon" src="https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/index/help/help_icon_2.png">
          <div class="plan-item">品优生关怀计划</div>
          <div class="plan-des">对于背景优秀专业突出但是有一定经济压力的学生（需要递交相关材料并通过洋观委员会的背调），我们愿意提供助学金帮助他完成留学梦想。 </div>
        </div>
        <div class="plan-item">
          <img class="plan-icon" src="https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/index/help/help_icon_3.png">
          <div class="plan-item">大客户推荐计划</div>
          <div class="plan-des">如果您有高校或其他教育机构的相关资源并且认可洋观国际教育团队的理念与服务，欢迎参与我们的伙伴计划，共同发挥我们的影响力推动留学教育行业的进步。 </div>
        </div>
      </div>
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
.index-grant{
  padding-top: .87rem;
  padding-bottom: .92rem;
  background: #f5f5f5;
  .index-title{
    color: #23736e;
    .dot{
      background: #23736e;
    }
  }
  .index-sub-title{margin-bottom: .3rem;}
  .grant-banner{
    box-sizing: border-box;
    height: 4.83rem;
    text-align: center;
    padding-top: 1.25rem;
    padding-bottom: .132rem;
    background: url(https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/index/help/help_banner.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    .banner-title{
      font-size: .4rem;
    }
    .banner-line{
      margin: .09rem auto .07rem;
      width: 12rem;
    }
    .banner-sub-title{
      margin-bottom: .5rem;
      font-size: .2rem;
    }
    .banner-des{
      margin: 0 auto;
      width: 7.15rem;
      font-size: .18rem;
    }
  }
  .grant-plan{
    display: flex;
    justify-content: center;
    margin-top: .59rem;
    .plan-item{
      margin-right: .27rem;
      text-align: center;
      .plan-icon{
        margin-bottom:.34rem;
        width: 1.59rem;
        height: 1.59rem;
      }
      .plan-item{
        margin-bottom: .16rem;
        font-size: .18rem;
        color: #23736e;
      }
      .plan-des{
        margin: 0 auto;
        width: 3.16rem;
        font-size: .12rem;
        color: #666;
      }
    }
    .plan-item:last-child{margin-right: 0;}
  }
}


</style>

