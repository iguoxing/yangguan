<template>
    <div class="index-feature index-item">
      <div class="index-title">
        <div>Features</div>
        <div>
          <i class="dot"></i><i class="dot"></i><i class="dot"></i><i class="dot"></i><i class="dot"></i><i class="dot"></i><i class="dot"></i><i class="dot"></i><i class="dot"></i><i class="dot"></i>
        </div>
      </div>
      <div class="index-sub-title">
        Personalized Guidance 为每个学生制定个性化申请策略，扬长避短，配合洋观国际高标准的专业咨询服务与多名<br>
        导师组成的多对一申请团队，辅以效率工具科学管理时间及流程，用最有效的方式帮助学生走好人生重要的一步。
      </div>
      <div class="feature-list">
        <div class="feature-item feature-1" @mouseenter="onMouseOver(1)" @mouseleave="onMouseLeave(0)">
          <img class="feature-icon" src="https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/index/feature_icon_1.png">
          <div v-if="seen!=1">
            <div class="feature-title">Free evaluation</div>
            <div class="feature-sub-title">免费评估</div>
          </div>
          <div v-if="seen==1">
            <div class="feature-third-title">免费仍有价值</div>
            <img class="feature-line" src="https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/index/feature-line.png">
            <div class="feature-des">免费但毫不含糊的评估，需要您提交真实且多维度的信息，让我们的评估及初步方案更加精准）您可在评估过程中了解我们专业前瞻的理念并体验严谨的咨询服务。</div>
          </div>
        </div>
        <div class="feature-item feature-2" @mouseenter="onMouseOver(2)" @mouseleave="onMouseLeave(0)">
          <img class="feature-icon" src="https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/index/feature_icon_2.png">
          <div v-if="seen!=2">
            <div class="feature-title">School selection system</div>
            <div class="feature-sub-title">选校系统</div>
          </div>
          <div v-if="seen==2">
            <div class="feature-third-title">一站式立体了解学校项目</div>
            <img class="feature-line" src="https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/index/feature-line.png">
            <div class="feature-des">强大精准的院校数据库，方便快捷的了解学校及项目。</div>
          </div>
        </div>
        <div class="feature-item feature-3" @mouseenter="onMouseOver(3)" @mouseleave="onMouseLeave(0)">
          <img class="feature-icon" src="https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/index/feature_icon_3.png">
          <div v-if="seen!=3">
            <div class="feature-title">Application management platform</div>
            <div class="feature-sub-title">申请管理平台</div>
          </div>
          <div v-if="seen==3">
            <div class="feature-third-title">高效掌握申请工作</div>
            <img class="feature-line" src="https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/index/feature-line.png">
            <div class="feature-des">联合Worktile共同开发专门针对留学申请的管理平台，申请过程的每一步都清晰可见 真正做到从容不迫。</div>
          </div>
        </div>
        <div class="feature-item feature-4" @mouseenter="onMouseOver(4)" @mouseleave="onMouseLeave(0)">
          <img class="feature-icon" src="https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/index/feature_icon_4.png">
          <div v-if="seen!=4">
            <div class="feature-title">Master service</div>
            <div class="feature-sub-title">黑卡管家</div>
          </div>
          <div v-if="seen==4">
            <div class="feature-third-title">解决一切在美疑难紧急问题</div>
            <img class="feature-line" src="https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/index/feature-line.png">
            <div class="feature-des">多年积累的顶级北美名校合作资源，让我们在名校捐赠、教授内推、退学、快速入学、身份挂靠等特殊项目上拥有丰富的操作经验及稳定的成功率，同时在留学生活、监护、紧急安全问题皆有洋观在美的导师负责跟进解决。</div>
          </div>
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
        onMouseOver:function(val){
        this.seen=val;
        },
        onMouseLeave:function(val){
        this.seen=val;
        }
    },
}    
</script>

<style scoped>
@import url('../../../assets/css/base.css');
</style>

<style lang="less">
.index-feature{
    .index-title{
        color: #1a3a7e;
        .dot{
        background: #1a3a7e;
        }
    }
    .feature-list{
        display: flex;
        margin-top: .43rem;
        .feature-item{
        display: flex;
        justify-content: center;
        align-items:center;
        flex-direction: column;
        width: 3.01rem;
        height: 4.11rem;
        border-right: solid .01rem #666;
        color: #fff;
        .feature-icon{
            margin-bottom: .25rem;
            width: .78rem;
            height: .78rem;
        }
        .feature-title{
            font-size: .16rem;
        }
        .feature-sub-title{
            font-size: .18rem;
        }
        .feature-third-title{font-size: .2rem}
        .feature-line{margin: .1rem 0;width: 2.54rem;}
        .feature-des{
            width: 2.54rem;
            font-size: .16rem;
        }
        }
        .feature-1{
        background:url(https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/index/feature_1.png);
        background-repeat: no-repeat;
        background-size: contain;
        }
        .feature-2{
        background:url(https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/index/feature_2.png);
        background-repeat: no-repeat;
        background-size: contain;
        }
        .feature-3{
        background:url(https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/index/feature_3.png);
        background-repeat: no-repeat;
        background-size: contain;
        }
        .feature-4{
        background:url(https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/index/feature_4.png);
        background-repeat: no-repeat;
        background-size: contain;
        }
        .feature-item:last-children{margin-right: 0;}
        .feature-item:hover{
        background: #4f81bd;
        }
    }

}




</style>

