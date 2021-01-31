<template>
  <div class="MyTest">
    <div class="title">
      <ul>
        <li @click="goback">
          <img src="../Mypage/images/左箭头.png" />
        </li>
        <li>
            科目一成绩单
        </li>
        <li></li>
      </ul>
    </div>
    <div class="Examinationed">
      <div class="title">
        <ul>
          <li></li>
        </ul>
      </div>
      <img
        src="//img.58cdn.com.cn/dist/jxedt/h5/m_new/img/mnks-result.png"
        style="width: 35%; display: block; margin: 1rem auto"
        alt=""
      />
      <div class="score">
        <span class="score-num">{{ currentRecord }}</span>
        <span class="fen">分</span>
      </div>
      <div class="time">
        <span class="waste-text">用时</span>
        <span class="waste-time"
          >{{ currentTimeMinute }}分:{{
            currentTimeSecondy > 10
              ? currentTimeSecondy
              : "0" + currentTimeSecondy
          }}秒</span
        >
      </div>
    </div>
    <div class="from">
      <ul>
        <div class="title">
          <img src="../Mypage/images/时间 (1).png" />
          <p>历史成绩</p>
        </div>
        <li v-for="(k, i) in newarray" :key="i">
          <span>
            <p>{{ k.record }}分</p>
            <p>
              {{ k.TimeMinute > 0 ? k.TimeMinute : "0" + k.TimeMinute }}:{{
                k.TimeSecondy > 0 ? k.TimeSecondy : "0" + k.TimeSecondy
              }}
            </p>
            <p>{{ k.text }}</p>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      array: [],
      newarray: [],
      currentRecord: 0,
      currentTimeMinute: 0,
      currentTimeSecondy: 0,
    };
  },
  created() {
    this.array = JSON.parse(localStorage.getItem("考试记录"));
    let length = this.array.length - 1;
    console.log(this.array);
    for (let i = 0; i < this.array.length; i++) {
      this.newarray.push({
        record: this.array[i].record,
        TimeMinute: this.array[i].TimeMinute,
        TimeSecondy: this.array[i].TimeSecondy,
        text: "马路杀手",
      });
      this.currentRecord = this.array[length].record;
      this.currentTimeMinute = this.array[length].TimeMinute;
      this.currentTimeSecondy = this.array[length].TimeSecondy;
      console.log(this.currentRecord);
    }
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss" scoped>
.from {
  .title {
    border-bottom: 1px #f3f3f3 solid;
    padding-left: 0.5rem;
    img {
      width: 0.4rem;
      display: inline-block;
      vertical-align: middle;
      margin-right: 0.2rem;
    }
    p {
      display: inline-block;
    }
  }
  ul {
    li {
      width: 100%;
      border-bottom: 1px #f3f3f3 solid;
      span {
        display: flex;
        justify-content: space-around;
        p {
        }
      }
    }
  }
}
.Examinationed {
  position: relative;

  .score {
    padding-left: 0.5rem;
    .score-num {
      font-size: 120px;
      font-weight: 700;
      color: #4a4a4a;
      line-height: 140px;
    }
    .fen {
      font-size: 16px;
      font-family: PingFangSC;
      font-weight: 400;
      color: #4a4a4a;
      line-height: 22px;
    }
  }
  .time {
    padding-left: 1rem;
    .waste-text {
      font-size: 16px;
      font-family: PingFangSC;
      color: #4a4a4a;
      line-height: 22px;
    }
    .waste-time {
      font-size: 18px;
      font-family: PingFangSC;
      color: #feb354;
      line-height: 25px;
    }
  }
}
.title {
  width: 100%;
  height: 100%;
  .type {
    color: white;
    background-color: #323332;
  }
  ul {
    width: 95%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: .2rem;
    li {
      width: 100%;
      height: 100%;
      p {
        font-size: 0.2rem;
        width: 1.51rem;
        height: 1rem;

        text-align: center;
        line-height: 1rem;
      }
      img {
        width: 0.6rem;
        height: 0.6rem;
      }
    }
  }
}

.title ul li:nth-child(2) {
  display: flex;
  justify-content: space-around;
  font-size: .5rem;
}

.title ul li:last-child {
  text-align: end;
  line-height: 2rem;
  font-size: 0.2rem;
}
</style>