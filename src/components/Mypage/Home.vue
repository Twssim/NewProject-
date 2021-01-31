<template>
  <div class="home">  
    <keep-alive> <router-view @from-MyPage="getMyMessage" /></keep-alive>
    <div v-show="JumpSonPage">
      <van-nav-bar
        @click-left="onClickLeft"
        @click-right="onClickRight"
        title="驾考一点通极速版"
        left-arrow
      >
        <template #left>
          <van-icon name="sign" size="22" />
        </template>
        <template #right>
          <van-icon name="chat-o" size="22" />
        </template>
      </van-nav-bar>
      <van-tabs v-model="active" animated>
        <van-tab title="科目 1">
          <div class="exercise">
            <ul>
              <li>顺序练习</li>
              <li>
                <span>
                  <p>{{ answedNum }}</p>
                  <p>未做题</p>
                </span>
                <span>
                  <p>{{ answedMistake > 0 ? answedMistake : "0" }}</p>
                  <p>错题</p>
                </span>
              </li>
              <li @click="jumpAnswer">
                <p>开始练习</p>
              </li>
            </ul>
          </div>
          <div class="exercise">
            <ul>
              <li>仿真模拟考试</li>
              <li>
                <span>
                  <p>{{ score }}</p>
                  <p>本次成绩</p>
                </span>
                <span>
                  <p>{{ bestscore }}</p>
                  <p>最好成绩</p>
                </span>
              </li>
              <li @click="JumpPackToTest">
                <p>开始考试</p>
              </li>
            </ul>
          </div>
          <div class="instrument">
            <ul>
              <li @click="JumpPageToRandom">
                <span>
                  <img src="./images/练习 (1).png" />
                  <p>练习50题</p>
                </span>
              </li>
              <li @click="JumpPageToMiskateBook">
                <span>
                  <img src="./images/错小图标.png" />
                  <p>错题本</p>
                </span>
              </li>
              <li @click="JumpPageToCollect">
                <span>
                  <img src="./images/收藏 (1).png" />
                  <p>收藏</p>
                </span>
              </li>
              <li @click="JumpPageToMytest">
                <span>
                  <img src="./images/成绩.png" />
                  <p>我的成绩</p>
                </span>
              </li>
            </ul>
          </div>
        </van-tab>
        <van-tab title="科目 2">
          <div class="TwoSubjects">
            <ul>
              <li
                @click="JumpTwoSubjectsVideo(k.title)"
                v-for="k in TwoSubjects"
                :key="k.index"
              >
                <div class="cl" href="">
                  <div class="img-c fl">
                    <span class="index">{{ k.index }}</span>
                    <img :src="k.img" alt="" />
                  </div>
                  <div class="info fr">
                    <span class="title"> {{ k.title }} </span>
                    <div class="time">{{ k.time }}</div>
                    <img src="./images/右箭头.png" alt="" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </van-tab>
        <van-tab title="科目 3">
              <div class="ThreeSubjects">
            <ul>
              <li
                @click="JumpThreeSubjectsVideo(k.title)"
                v-for="k in ThreeSubjects"
                :key="k.index"
              >
                <div class="cl" href="">
                  <div class="img-c fl">
                    <span class="index">{{ k.index }}</span>
                    <img :src="k.img" alt="" />
                  </div>
                  <div class="info fr">
                    <span class="title"> {{ k.title }} </span>
                    <div class="time">{{ k.time }}</div>
                    <img src="./images/右箭头.png" alt="" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
           </van-tab>
        <van-tab title="科目 4">
          <div class="exercise">
            <ul>
              <li>顺序练习</li>
              <li>
                <span>
                  <p>100</p>
                  <p>未做题</p>
                </span>
                <span>
                  <p>0</p>
                  <p>错题</p>
                </span>
              </li>
              <li @click="jumpAnswer">
                <p>开始练习</p>
              </li>
            </ul>
          </div>
          <div class="exercise">
            <ul>
              <li>仿真模拟考试</li>
              <li>
                <span>
                  <p>100</p>
                  <p>本次成绩</p>
                </span>
                <span>
                  <p>3</p>
                  <p>最好成绩</p>
                </span>
              </li>
              <li>
                <p>开始考试</p>
              </li>
            </ul>
          </div>
          <div class="instrument">
            <ul>
              <li>
                <span>
                  <img src="./images/练习 (1).png" />
                  <p>练习50题</p>
                </span>
              </li>
              <li>
                <span>
                  <img src="./images/错小图标.png" />
                  <p>错题本</p>
                </span>
              </li>
              <li>
                <span>
                  <img src="./images/收藏 (1).png" />
                  <p>收藏</p>
                </span>
              </li>
              <li>
                <span>
                  <img src="./images/成绩.png" />
                  <p>我的成绩</p>
                </span>
              </li>
            </ul>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <div class="footer">
      <ul>
        <li>
          <span :class="{ red: JumpSonPage }" @click="jumpHome">
            <img v-show="!JumpSonPage" src="./images/首页 (1).png" />
            <img v-show="JumpSonPage" src="./images/homecurrent.png" />
            <p>首页</p>
          </span>
        </li>
        <li>
          <span :class="{ red: !JumpSonPage }" @click="My">
            <img v-show="JumpSonPage" src="./images/我的 (3).png" />
            <img v-show="!JumpSonPage" src="./images/我的 (2).png" />
            <p>我的</p>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      active: '',
      currentRate: 0,
      bottom: 0,
      show:false,
      JumpSonPage: true, //跳转我的页面
      index: 0,
      icon: {
        active: "https://img.yzcdn.cn/vant/user-active.png",
        inactive: "https://img.yzcdn.cn/vant/user-inactive.png",
      },
      gradientColor: {
        "0%": "#3fecff",
        "100%": "#6149f6",
      }, //环形进度条颜色
      answedNum: 0, //答了多少题
      answedMistake: 0, //错了多少题
      score: 0, //考试成绩
      bestscore: 0, //最好的成绩
      TwoSubjects: [], //科目二信息
      ThreeSubjects:[]
    };
  },
  computed: {
    // text() {
    //   return this.currentRate.toFixed(0) + "%";
    // },
  },
  watch:{
     $route(to, from) {
       console.log("to",to.path,"from",from.path)
       if(from.path=="/TwoSubjectsVideo"){
         this.active=1
         console.log("2")
       } else if(from.path=="/ThreeSubjectsVideo"){
         this.active=2
       }
       else{
         this.active=0
       }
     }
  },
  created() {
    this.active=localStorage.getItem("选项卡索引值")
    console.log("local",localStorage.getItem("选项卡索引值"))
    this.answedNum = 241 - localStorage.getItem("做了多少题");
    this.answedMistake = localStorage.getItem("错了多少题");
    this.score = localStorage.getItem("考试成绩");
    this.bestscore = localStorage.getItem("最好的成绩");
    if (this.$route.path == "/") {
      this.JumpSonPage = true;
      console.log("出发");
      console.log(this.JumpSonPage);
    }
    this.axios({
      method: "get",
      url: "http://localhost:8080/message.json",
    }).then((res) => {
      this.TwoSubjects = res.data;
    });
     this.axios({
      method: "get",
      url: "http://localhost:8080/ThreeSubject.json",
    }).then((res) => {
      this.ThreeSubjects = res.data;
    });
  },

  methods: {
    getMyMessage(data) {
      this.bottom = data;
      this.JumpSonPage = data;
    },
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
    jumpAnswer() {
      this.index++;
      this.$router.push({
        path: "/Exercise",
        query: this.index,
      });
    },
    jumpHome() {
      this.jumpMyPage = true;
      if (this.$route.path == "/") {
        console.log("重复跳转");
      } else {
        this.$router.push({
          path: "/",
        });
      }
      this.JumpSonPage = true;
    },
    My() {
      this.jumpMyPage = false;
      this.JumpSonPage = false;
      if (this.$route.path == "/My") {
        console.log("重复跳转");
      } else {
        this.$router.push({
          path: "/My",
        });
      }
    },
    JumpPackToTest() {
      this.$router.push({
        path: "/Review",
      });
    },
    JumpPageToCollect() {
      this.$router.push({
        path: "/Collect",
      });
    },
    JumpPageToMiskateBook() {
      this.$router.push({
        path: "/MistakeBook",
      });
    },
    JumpPageToRandom() {
      this.$router.push({
        path: "/Random",
      });
    },
    JumpPageToMytest() {
      this.$router.push({
        path: "/Mytest",
      });
    },
    JumpTwoSubjectsVideo(title) {

     this.$router.push({
        path: "/TwoSubjectsVideo",
        query: { id: title },
      });
     
    },
    JumpThreeSubjectsVideo(title){
           this.$router.push({
        path: "/ThreeSubjectsVideo",
        query: { id: title },
      });
    }
  },
};
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.home {
  width: 100%;
  max-height: 100%;
  background-color: #f7f7f7;
  overflow: hidden;
}
.home .exercise:nth-child(1) {
  background: url("./images/backgourndImg.jpg") no-repeat;
}
.home .exercise:nth-child(2) {
  background: url("./images/u=3242894028,212013700&fm=26&gp=0.jpg") no-repeat;
}
.home .exercise {
  position: relative;
  bottom: 0;
  width: 92%;
  height: 5.5rem;
  margin: 0 auto;
  border-radius: 0.6rem;
  ul {
    margin-top: 0.3rem;
    li {
      width: 100%;
      height: 30%;
    }
    li:nth-child(1) {
      text-align: center;
      line-height: 2rem;
      color: white;
      font-size: 0.5rem;
    }
    li:nth-child(2) {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: 0.3rem;
      span:nth-child(1) {
        display: inline-block;
        width: 30%;
        text-align: center;
        margin-right: 1rem;
        p:nth-child(1) {
          color: white;
          font-size: 1rem;
        }
        p:nth-child(2) {
          color: white;
          font-size: 0.5rem;
          font-weight: 300;
        }
      }
      span:nth-child(2) {
        text-align: center;
        display: inline-block;
        width: 30%;
        margin-left: 1rem;
        p:nth-child(1) {
          color: white;
          font-size: 1rem;
        }
        p:nth-child(2) {
          color: white;
          font-size: 0.5rem;
          font-weight: 300;
        }
      }
    }
    li:nth-child(3) {
      text-align: center;
      color: white;
      font-size: 0.5rem;
      font-weight: 500;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        width: 3rem;

        background: white;
        color: green;
        line-height: 30px;
        text-align: center;
        border-radius: 15px;
      }
    }
  }
}
.home .instrument {
  position: relative;
  margin-top: 0.3rem;
  padding: 0.3rem 0;
  height: 1.5rem;
  background-color: white;
  ul {
    display: flex;
    justify-content: space-around;
    li {
      span {
        vertical-align: middle;
        text-align: center;
        display: inline-block;
        font-size: 0.8rem;
      }
      img {
        width: 0.5rem;
      }
      p {
        font-size: 0.2rem;
      }
    }
  }
}
.home .footer {
  width: 100%;
  height: 1rem;
  margin: 0 auto;
  position: fixed;
  bottom: 0;
  padding-top: 0.2rem;
  border-top: 1px rgba(176, 176, 176, 0.5) solid;
  background-color: white;
  ul {
    width: 100%;
    display: flex;
    li {
      width: 100%;
      display: flex;
      justify-content: space-around;
      margin-bottom: 0.5rem;
      text-align: center;
      span {
        display: inline-block;
        img {
          width: 0.5rem;
        }
        p {
          font-size: 0.1rem;
        }
      }
    }
  }
}

.index {
  position: absolute;
  top: 0;
  left: 0;
  width: 0.32rem;
  height: 0.32rem;
  text-align: center;
  color: #fff;
  background-color: #18b4ed;
  line-height: 0.32rem;
  font-size: 0.2rem;
}
.TwoSubjects {
  padding: 0.2rem;
  background-color: #fff;
    height: 14rem;
  overflow-y: scroll;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      width: 100%;
      height: 2rem;
      padding: 0.12rem 0;
      margin-bottom: 0.4rem;
      .cl {
        display: block;
        position: relative;
        background-size: 0.12rem;
        .img-c img {
          width: 2.76rem;
          height: 2.24rem;
          overflow: hidden;
        }
        .info {
          width: 50%;
          height: 100%;
          margin-left: 0.5rem;
          position: relative;
          .title {
            font-size: 0.5rem;
            color: #333;
            font-weight: 700;
            margin-top: 0.16rem;
          }
          .time {
            font-size: 0.5rem;
            color: #999;
            margin-top: 0.9rem;
          }
          img {
            position: absolute;
            top: 1.1rem;
            right: -1.6rem;
            width: 0.5rem;
            height: 0.5rem;
          }
        }
        .fl {
          float: left;
        }
        .fr {
          float: left;
        }
      }
    }
  }
}
.ThreeSubjects{
    padding: 0.2rem;
  background-color: #fff;
  height: 14rem;
  overflow-y: scroll;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      width: 100%;
      height: 2rem;
      padding: 0.12rem 0;
      margin-bottom: .6rem;
      .cl {
        display: block;
        position: relative;
        background-size: 0.12rem;
        .img-c img {
          width: 2.76rem;
          height: 2.24rem;
          overflow: hidden;
        }
        .info {
          width: 55%;
          height: 100%;
          margin-left: 0.5rem;
          position: relative;
          .title {
            font-size: 0.5rem;
            color: #333;
            font-weight: 700;
            margin-top: 0.16rem;
          }
          .time {
            font-size: 0.5rem;
            color: #999;
           position: absolute;
           top: 1.7rem;
          }
          img {
            position: absolute;
            top: 1.1rem;
            right: -1.1rem;
            width: 0.5rem;
            height: 0.5rem;
          }
        }
        .fl {
          float: left;
        }
        .fr {
          float: left;
        }
      }
    }
  
  }
}
.red {
  color: red;
}
</style> 
