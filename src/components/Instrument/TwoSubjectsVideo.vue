<template>
  <div class="TwoSubjectsViodeMessage">
    <div class="top">
      <img @click="JumpBack" src="./images/左箭头.png" />
      <a href="https://m.jiakaobaodian.com/">
        <img
          src="https://m.jiakaobaodian.com/core-m-assets/jkbd/application/news/detail/files/65c4b123196ecba1fabc04ef2006b3ea.png"
        />
        <p>详情咨询</p>
      </a>
    </div>
    <div class="advertiment">
      <img
        src="https://m.jiakaobaodian.com/core-m-assets/static/images/mnks/jkbd.png"
      />
    </div>
    <div  class="video">
      <div class="title">{{VideoMessage.title}}</div>
      <video
        controls
        :src="VideoMessage.videoSrc"
      ></video>
      <p>
       {{VideoMessage.content}}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.query.id,
      VideoMessage:[]
    };
  },
  watch: {
    $route(to, from) {
      if ((!to.query && from.query) || to.query != from.query) {
        // location.reload();
      }
    },
  },
  created() {
    // console.log(this.$route.query.id);
    //   this.axios({
    //   method: "get",
    //   url: "http://localhost:8080/TwoSubjectVideo.json",
    // }).then((res) => {
    //    for(let i=0;i<res.data.length-1;i++){
    //        if(this.$route.query.id===res.data[i].title){
    //            this.VideoMessage=res.data[i]
    //            console.log(res.data[i])
    //        }
    //    }
    // })
  },
    activated(){
        this.axios({
      method: "get",
      url: "http://localhost:8080/TwoSubjectVideo.json",
    }).then((res) => {
       for(let i=0;i<res.data.length;i++){
           if(this.$route.query.id===res.data[i].title){
               this.VideoMessage=res.data[i]
               console.log(res.data[i])
           }
       }
    })
  },
  methods:{
      JumpBack(){
          this.$router.go(-1)
      }
  }
};
</script>
<style lang="scss" scoped>
*{
    padding: 0;
    margin: 0;
}
.TwoSubjectsViodeMessage {
  background-color: #fff;
  .top {
    margin-top: 0.2rem;
    margin-left: 0.4rem;
    margin-bottom: .2rem;
    position: relative;
    img:nth-child(1) {
      width: 0.6rem;
      height: 0.6rem;
    }
    a {
      margin-left: 0.5rem;
    }
    img:nth-child(2) {
      width: 1rem;
      height: 1rem;
    }
    p {
      display: inline-block;
      margin-left: 0.2rem;
      font-size: 0.4rem;
      color: skyblue;
      font-weight: 600;
      position: absolute;
      top: .1rem;
    }
  }
  .advertiment {
    img {
      width: 100%;
    }
  }
  .video {
    padding-top: .1rem;
    padding-left: 0.3rem;
    .title {
      font-size: 0.6rem;
      margin-bottom: 0.3rem;
    }
    video {
      display: block;
      width: 100%;
      min-height: 3.82rem;
    }
    p {
      padding-right: 0.22rem;
      text-decoration: none;
      color: #999;
      font-size: 0.4rem;
      margin-top: 0.1rem;
    }
  }
}
</style>