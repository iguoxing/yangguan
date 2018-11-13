<template>
    <div class="index-grant">
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
  padding-top: .8rem;
  padding-bottom: 1.6rem;
  background: #fff;
  .index-title{
    color: #23736e;
    .dot{
      background: #23736e;
    }
  }
  .index-sub-title{margin-bottom: .3rem;}
  
}


</style>

