<template>
  <div class="lending">
    <div class="banner-wrapper">
      <!-- 标语 -->
      <div class="text-wrapper">
        <h1>We Lend Just For You</h1>
        <p>Currently accepting maximum LTV</p>
        <p>Currently accepting maximum LTV</p>
        <p>Ontario Only*</p>
      </div>
      <div class="banner">
        <img src="@/assets/img/Snipaste_2023-04-17_17-25-18.png" alt="" />
      </div>
    </div>
    <!-- 内容主体区 -->
    <div class="main">
      <!-- 图片列表区 -->
      <div class="img-list">
        <div class="img-col1">
          <img src="@/assets/img/Snipaste_2023-04-17_17-24-15.png" alt="" />
          <img src="@/assets/img/Snipaste_2023-04-17_17-24-26.png" alt="" />
        </div>
        <div class="img-col2">
          <img src="@/assets/img/Snipaste_2023-04-17_17-24-34.png" alt="" />
          <img src="@/assets/img/Snipaste_2023-04-17_17-24-43.png" alt="" />
        </div>
      </div>
      <!-- 文字区 -->
      <div class="acticle-warpper">
        <h1>Non-standard Mortgage</h1>
        <p>
          We specialize in financing residential mortgages for purchase,
          refinance, self-employed, bridge loans, equity takeout, and more. Each
          deal is unique.
        </p>
        <br />
        <h1>Non-standard Mortgage</h1>
        <p>
          HRU accepts applications for mortgages via licensed mortgage brokers
          only
        </p>
        <br />
        <h1>Non-standard Mortgage</h1>
        <p>We specialize in financing</p>
        <p>
          -Discharges -Early payout or lump sum payments -Payment date changes
          -Making up missed payments or payment deferrals -Insurance issues
        </p>
        <p>We specialize in financing</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
      caseList: [],
    };
  },
  mounted() {},
};
</script>

 <style lang="scss" scoped>
* {
  white-space: pre-wrap;
}
.banner-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(#f3f3f3, #fdfdfd);
  .text-wrapper {
    float: left;
    padding: 20rem 0 20rem 20rem;
    z-index: 222;
    h1 {
      font-size: 5rem;
    }
    p {
      font-size: 2rem;
    }
  }
  .banner {
    position: relative;
    left: -3rem;
  }
}
.main {
  background-image: linear-gradient(#ffffff, #fdf5ef, #ffffff);
}
.img-list,
.acticle-warpper {
  margin-left: 50%;
  transform: translate(-50%);
  margin-top: 5rem;
}
.img-list {
  display: flex;
  .img-col2 {
  }
  img {
    border-radius: 10px;
    width: 50rem;
    margin: 1rem;
  }
}
.acticle-warpper {
  padding: 2rem;
  margin-bottom: 10rem;
}
</style>