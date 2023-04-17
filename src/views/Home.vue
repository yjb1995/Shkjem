<template>
  <div>
    <div class="home-pc pc-common" v-loading="loading">
      <div class="text-wrap">
        <h1>HRU - EXCLUSIVE CANADIAN NON-BANK LENDER</h1>
        <p>Get a 2nd Mortgage up to 80% of House Value.</br>We say yes when banks aren't an option</p>
        <p class="sub">Generate consistent and stable monthly returns</p>
        <el-button>APPLY NOW</el-button>
      </div>
      <video class="vedio"  autoplay loop muted>
        <!-- <source src="../assets/animate/home.webm" type="video/webm"> -->
        <!-- <embed width="320" height="240" src="movie.swf"> -->
    </video>
    </div>
    <div class="home-pc pc-common" v-loading="loading">
      <div class="text-wrap">
        <h1>HRU - EXCLUSIVE CANADIAN NON-BANK LENDER</h1>
        <p>Get a 2nd Mortgage up to 80% of House Value.</br>We say yes when banks aren't an option</p>
        <p class="sub">Generate consistent and stable monthly returns</p>
        <el-button>APPLY NOW</el-button>
      </div>
      <video class="vedio"  autoplay loop muted>
        <!-- <source src="../assets/animate/home.webm" type="video/webm"> -->
        <!-- <embed width="320" height="240" src="movie.swf"> -->
    </video>
    </div>
    <div class="home-pc pc-common" v-loading="loading">
      <div class="text-wrap">
        <h1>HRU - EXCLUSIVE CANADIAN NON-BANK LENDER</h1>
        <p>Get a 2nd Mortgage up to 80% of House Value.</br>We say yes when banks aren't an option</p>
        <p class="sub">Generate consistent and stable monthly returns</p>
        <el-button>APPLY NOW</el-button>
      </div>
      <video class="vedio"  autoplay loop muted>
        <!-- <source src="../assets/animate/home.webm" type="video/webm"> -->
        <!-- <embed width="320" height="240" src="movie.swf"> -->
    </video>
    </div>
    <div class="home-pc pc-common" v-loading="loading">
      <div class="text-wrap">
        <h1>HRU - EXCLUSIVE CANADIAN NON-BANK LENDER</h1>
        <p>Get a 2nd Mortgage up to 80% of House Value.</br>We say yes when banks aren't an option</p>
        <p class="sub">Generate consistent and stable monthly returns</p>
        <el-button>APPLY NOW</el-button>
      </div>
      <video class="vedio"  autoplay loop muted>
        <!-- <source src="../assets/animate/home.webm" type="video/webm"> -->
        <!-- <embed width="320" height="240" src="movie.swf"> -->
    </video>
    </div>
    <div class="home-pc pc-common" v-loading="loading">
      <div class="text-wrap">
        <h1>HRU - EXCLUSIVE CANADIAN NON-BANK LENDER</h1>
        <p>Get a 2nd Mortgage up to 80% of House Value.</br>We say yes when banks aren't an option</p>
        <p class="sub">Generate consistent and stable monthly returns</p>
        <el-button>APPLY NOW</el-button>
      </div>
      <video class="vedio"  autoplay loop muted>
        <!-- <source src="../assets/animate/home.webm" type="video/webm"> -->
        <!-- <embed width="320" height="240" src="movie.swf"> -->
    </video>
    </div>
</div>
</template>
 
<script>
export default {
  name: "Home",
  components: {
  },
  data() {
    return {
      loading: false
      
    };
  },
  created() {},
  // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
  computed: {
  
  },
  mounted() {
    
  }
};
</script>
 
<style lang="scss" scoped>
.pc-common{
  display: flex;
  width: 100%;
  // padding: 0 36rem;
  height: 70rem;
}
.home-pc{
  background: #F4F4F5;
  .text-wrap{
    width: 56.3rem;
    font-family: Helvetica;
    color: #000000;
    margin-left: 36rem;
    padding: 16.1rem 0 0 6.1rem;
    z-index: 1;
    h1{
      font-size: 3.8rem;
      font-family: Helvetica-BoldOblique, Helvetica;
      font-weight: normal;
      // line-height: 46px;
    }
    p{
      font-size: 2.2rem;
      margin-top: 3.2rem;
    }
    .sub{
      font-size: 1.8rem;
      margin-top: 2.4rem;
    }
    button{
      width: 12.4rem;
      height: 4.2rem;
      background: #32302F;
      border-radius: 0.6rem;
      color: #fff;
      font-size: 1.4rem;
      margin-top: 7.2rem;
    }
  }
  .vedio{
    width: 90rem;
    height: 100%;
    position: relative;
    right: 10rem;
  }
}
</style>