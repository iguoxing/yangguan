<template>
    <div class="index-feature index-item">
      <div class="index-title">
        <div>特色项目</div>
        <div>
          <i class="dot"></i><i class="dot"></i><i class="dot"></i><i class="dot"></i><i class="dot"></i><i class="dot"></i><i class="dot"></i><i class="dot"></i><i class="dot"></i><i class="dot"></i>
        </div>
      </div>
      <div class="feature-list">
        <div class="feature-item feature-1">
          <img class="feature-icon" src="https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/feature/project_icon_1.png">
          <div class="feature-title">
            帮你解决一切学业烦恼： <br>成绩平平也能进名校 <br>急速应对挂科试读问题 <br>大牛亲自指点毕设论文Project
          </div>
        </div>
        <div class="feature-item feature-2">
          <img class="feature-icon" src="https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/feature/project_icon_2.png">
          <div class="feature-title">
            地域人文，人身安全，宗教信仰，<br>文化冲突，出国前你应该了解的都<br>在这里
          </div>
        </div>
        <div class="feature-item feature-3">
          <img class="feature-icon" src="https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/feature/project_icon_3.png">
          <div class="feature-title">
            家长探访，父母陪读，房屋租买<br>一站式帮你搞定
          </div>
        </div>
      </div>
    </div>
</template>

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
          margin-right: .14rem;
          width: 3.89rem;
          height: 4.84rem;
          // border-right: solid .01rem #666;
          color: #fff;
          .feature-icon{
              margin-bottom: .25rem;
              width: .78rem;
              height: .78rem;
          }
          .feature-title{
            height: 1.2rem;
            line-height: 1.5;
            text-align: left;
            font-size: .2rem;
          }
          .feature-third-title{font-size: .2rem}
          .feature-line{margin: .1rem 0;width: 2.54rem;}
          .feature-des{
              width: 2.54rem;
              font-size: .16rem;
          }
        }
        .feature-1{
        background:url(https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/feature/project_1.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        }
        .feature-2{
        background:url(https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/feature/project_2.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        }
        .feature-3{
        background:url(https://guanyang.oss-cn-beijing.aliyuncs.com/assets/img/feature/project_3.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        }
        .feature-item:last-children{
          margin-right: 0;
        }
        .feature-item:hover{
        background: #4f81bd;
        }
    }

}




</style>

