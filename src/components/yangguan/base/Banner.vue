<template>
<div class="block">
    
    <el-carousel height="7.62rem">
      <el-carousel-item>
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
      </el-carousel-item>
      <el-carousel-item>
        <div class="header header-2">
          <div class="header-content">
            <div class="index-item">
              <div class="header-vision">
                <span class="vision-bigger">View International</span> [洋观国际]
              </div>
              <div class="header-sub-vision">
                <p>创新型互联网留学服务平台</p>
              </div>
              <div class="header-des">
                <p>自2011年起，始终专注做好一件事： </p>
                <p>为每个学生量身定做一份科学系统的出国申请计划 </p>
                <p>七年间不断优化思路与流程， 将最新技术与留学服务相结合，提升咨询建议的准确性和效率 </p>
                <p>自主研发选校系统和申请流程管理平台，让整个过程踏实放心。</p>
              </div>
            </div>
          </div>
          <div class="index-item">
              <a class="header-btn">了解更多</a>
          </div>
        </div>  
      </el-carousel-item>
      <el-carousel-item>
         <div class="header header-3">
          <div class="header-content">
            <div class="index-item">
              <div class="header-vision">
                <span class="vision-bigger">Advisory</span> [咨询]
              </div>
              <div class="header-des">
                <p>好的文书来源于真正专业的留学咨询和职业规划  </p>
                <p>我们坚持将专业的的咨询方法论及严谨态度融入到申请服务中</p>
                <p> 引导学生认知自我，同时架起家长与孩子间的沟通桥梁  </p>
              </div>
              <div class="header-sub-vision">
                <p>深刻*洞见*有腔调</p>
              </div>
            </div>
          </div>
          <div class="index-item">
              <a class="header-btn">了解更多</a>
          </div>
        </div> 
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import Swiper from 'swiper';
import NavBar from '@/components/yangguan/base/Nav';

export default {
  data () {
    return {
      msg: '洋观',
    }
  },
  mounted: function(){
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
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
  .header-des{
    font-size: .2rem;
    p{
      margin-block-start: 0;
      margin-block-end: 0;
    }
  }
}
.header.header-3{
  text-align: left;
  background: url(https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/index/banner/banner_3.jpg);
  background-size: cover;
  color: #333;
  .header-btn{
    margin-left: 0;
    text-align:center;
    border-color: #333;
    color: #333;
  }
  .header-btn:hover{
    border-color: #333;
    color: #fff;
    background-color: #333;
  }
}

.header.header-2{
  text-align: right;
  background: url(https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/index/banner/banner_2.jpg);
  .header-content{
    margin-top: .9rem;
    height: 3.16rem;
    box-sizing: border-box;
    padding-top: .22rem;
    background-color: rgba(0,0,0,.6);
    .header-vision{
      margin-top: 0;
      margin-bottom: .12rem;
      font-size: .24rem;
    }
    .header-sub-vision {
        margin-bottom: .3rem;
    }
  }
  .header-btn{
    margin-right: 0;
    text-align: center;
  }
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
