<template>
    <div class="index-story">
      <div class="index-title">
        <div>Clients’ story</div>
        <div>
          <i class="dot"></i><i class="dot"></i><i class="dot"></i><i class="dot"></i><i class="dot"></i><i class="dot"></i><i class="dot"></i><i class="dot"></i><i class="dot"></i><i class="dot"></i>
        </div>
      </div>
      <div class="index-sub-title">
        自2011年起我们服务了上百名客户，有成绩背景都较差的高中生也有专业学生能力皆强的名校大学生，有国内已经毕业的职场人，也<br>
        有孤身在异国求学的小留学生，更接触了上千名望子成龙成凤但满心焦虑无从下手的家长们，在面对繁杂的申请及未来的选择他们充<br>
        满了迷茫与担忧，但是在了解了我们的理念并接受服务后，不妨来听听他们的故事
      </div>
      <div class="story-man index-item">
        <el-carousel :interval="4000" type="card" height="400px">
          <el-carousel-item v-for="item in man" :key="item">
            <div class="man-item">
              <img class="man-icon" :src="item.icon">
              <div class="man-name">{{item.name}}</div>
              <div class="man-title">{{item.title}}</div>
              <div class="man-des">{{item.des}}</div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      
    </div>
</template>
<script>
export default{
    data(){
        return {
            man:[
              {
                icon:'https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/index/story/story_icon_1.png',
                name:'姓名',
                title:'申请主导师',
                des:'客户故事客户故事客户故事客户故事客户故事客户故事客客户故事客户故事客户故事客户故事客户故事客户故事客客户故事客户故事客户故事客户故事客户故事客户故事客',
              },
              {
                icon:'https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/index/story/story_icon_2.png',
                name:'姓名',
                title:'申请主导师',
                des:'客户故事客户故事客户故事客户故事客户故事客户故事客客户故事客户故事客户故事客户故事客户故事客户故事客客户故事客户故事客户故事客户故事客户故事客户故事客',
              },
              {
                icon:'https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/index/story/story_icon_3.png',
                name:'姓名',
                title:'申请主导师',
                des:'客户故事客户故事客户故事客户故事客户故事客户故事客客户故事客户故事客户故事客户故事客户故事客户故事客客户故事客户故事客户故事客户故事客户故事客户故事客',
              },
              {
                icon:'https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/index/story/story_icon_4.png',
                name:'姓名',
                title:'申请主导师',
                des:'客户故事客户故事客户故事客户故事客户故事客户故事客客户故事客户故事客户故事客户故事客户故事客户故事客客户故事客户故事客户故事客户故事客户故事客户故事客',
              },
              {
                icon:'https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/index/story/story_icon_5.png',
                name:'姓名',
                title:'申请主导师',
                des:'客户故事客户故事客户故事客户故事客户故事客户故事客客户故事客户故事客户故事客户故事客户故事客户故事客客户故事客户故事客户故事客户故事客户故事客户故事客',
              }
            ]
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
.index-story{
  padding-top: .8rem;
  padding-bottom: 1.6rem;
  background: #fff;
  .index-title{
    color: #bd8834;
    .dot{
      background: #bd8834;
    }
  }
  .index-sub-title{margin-bottom: .8rem;}
  .story-man{
    .man-item{
      padding-top: .2rem;
      padding-bottom: .8rem;
      text-align: center;
      border-top: solid .06rem #e2c368;
      box-shadow: 0 0 .05rem 0 rgba(0, 0, 0, 0.15);
      background-color: #f5f5f5;
      .man-icon{
        margin-bottom: .12rem;
        width: .8rem;
        height: .8rem;
        border-radius: 50%;
      }
      .man-name{
        margin-bottom: .04rem;
        font-size: .24rem;
        color: #b16d02;
      }
      .man-title{
        margin-bottom: .3rem;
        font-size: .16rem;
        color: #d18000;
      }
      .man-des{
        margin: 0 auto;
        width: 2.95rem;
        font-size:.12rem;
        color: #666;
      }
    }
  }

  
}


</style>

