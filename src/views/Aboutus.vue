<template>
  <div>
    <div class="about-pc pc-common" v-loading="loading">
      <div class="text-wrap">
        <h1>HRU - EXCLUSIVE CANADIAN NON-BANK LENDER</h1>
        <p>Get a 2nd Mortgage up to 80% of House Value.</br>We say yes when banks aren't an option</p>
        <p class="sub">Generate consistent and stable monthly returns</p>
      </div>
      <video class="vedio"  autoplay loop muted>
        <!-- <source src="../assets/animate/home.webm" type="video/webm"> -->
        <!-- <embed width="320" height="240" src="movie.swf"> -->
    </video>
    </div>
    <!-- Office map/ Location外部容器 -->
    <div class="content-wrap">
      <div class="text-wrap">
        <h1>Office map/ Location</h1>
        <p>301 - 7300 Warden Ave, Markham, ON L3R 9Z6, Canada</p>
      </div>
        <baidu-map class="bm-view" 
          :center="{lng: 116.404, lat: 39.915}"
          :zoom="14"
          > 
        </baidu-map>
    </div>
    <div class="content-wrap">
      <div class="text-wrap">
        <h1>Who we are</h1>
        <p>n the largest and most reliable housing market in Canada, we manage a diversified mortgage portfolio as an exclusive non-bank lender in the GTA. By using conservative underwriting, we control and minimize risk.<br/>
Interest rates in our portfolio typically range from 7.5% to 10% per annum, with one-year terms and monthly interest-only payments. At the time of underwriting each loan in our portfolio, our weighted average loan-to-value (LTV) ratio may not exceed 80%. Mortgage loan amounts are generally $50,000 to $2 million. To date, the largest single mortgage in our mortgage portfolio was $1.6 million. In the case of loans exceeding $500,000, we typically co-lend with a financial institution or private lender.
<br/><br/>
In order to maintain our MIC status, we must satisfy the strict Canadian Income Tax Act's requirements (subsection 130.1[6]).</p>
      </div>
    </div>
    <!-- 人物展示区域 -->
    <div class="person-show">
       <div>
          <div class="text-wrap">
            <div>
              <h1>Board of Directors</h1>
              <p>Our board of directors is committed to providing </br>excellent customer service as well as delivering </br> the best return on investment for our shareholders.</p>
            </div>
          </div>
      <!-- 人物列表 -->
          <div class="person-list">
            <div class="person-row">
             <div class="person">
               <img src="@/assets/img/Snipaste_2023-04-20_15-35-48.png" alt="">
               <div class="person-name">Patrick Lam</div>
             </div>
             <div class="person">
               <img src="@/assets/img/Snipaste_2023-04-20_15-35-48.png" alt="">
               <div class="person-name">Patrick Lam</div>
             </div>
            <div class="person">
               <img src="@/assets/img/Snipaste_2023-04-20_15-35-48.png" alt="">
               <div class="person-name">Patrick Lam</div>
            </div>
          </div>
          <div class="person-row">
             <div class="person">
               <img src="@/assets/img/Snipaste_2023-04-20_15-35-48.png" alt="">
               <div class="person-name"><span>Patrick Lam</span></div>
             </div>
             <div class="person">
               <img src="@/assets/img/Snipaste_2023-04-20_15-35-48.png" alt="">
               <div class="person-name"><span>Patrick Lam</span></div>
             </div>
          </div>
        </div>
       </div>

    </div>

   
  </div>
</template>
 
<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      loading: false,
    };
  },
  created() {},
  computed: {},
  mounted() {},
};
</script>
 
<style lang="scss" scoped>
.pc-common {
  display: flex;
  width: 100%;
  // padding: 0 36rem;
  height: 70rem;
}
.about-pc {
  background: #f4f4f5;
  .text-wrap {
    width: 56.3rem;
    font-family: Helvetica;
    color: #000000;
    margin-left: 36rem;
    padding: 16.1rem 0 0 6.1rem;
    z-index: 1;
    h1 {
      font-size: 3.8rem;
      font-family: Helvetica-BoldOblique, Helvetica;
      font-weight: normal;
      // line-height: 46px;
    }
    p {
      font-size: 2.2rem;
      margin-top: 3.2rem;
    }
    .sub {
      font-size: 1.8rem;
      margin-top: 2.4rem;
    }
  }
  .vedio {
    width: 90rem;
    height: 100%;
    position: relative;
    right: 10rem;
  }
}
.content-wrap {
  width: 100%;
  height: 40rem;
  overflow: hidden;
  margin-top: 5rem;
  .text-wrap,
  .bm-view {
    margin-left: 50%;
    transform: translate(-50%);
    width: 60%;
  }
  .text-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 1rem;
    h1 {
      font-size: 4rem;
    }
    p {
      text-align: center;
    }
  }
  .bm-view {
    height: 100%;
  }
}
.person-show {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10rem;
  .text-wrap {
    width: 50%;
    height: 100rem;
    position: absolute;
    background-image: linear-gradient(
      to bottom left,
      rgba(245, 241, 241, 0.5),
      rgb(255, 255, 255)
    );
    box-shadow: 0px -5px 5px rgba(236, 230, 230, 0.3);
    left: 0;
    div {
      float: right;
      margin-right: 10rem;
      margin-bottom: 40rem;
    }
  }
  .person-list {
    margin-top: 20rem;
    .person-row {
      display: flex;
      justify-content: center;
      margin-bottom: 1rem;
      .person {
        margin-left: 10rem;
        position: relative;
        img {
          width: 30rem;
        }
        .person-name {
          width: 100%;
          background-image: linear-gradient(
            rgba(223, 218, 218, 0.5),
            #ffffff 80%
          );
          position: absolute;
          bottom: 1rem;
          font-size: 3rem;
          text-align: center;
          box-shadow: 0 -10px 8px rgba(223, 218, 218, 0.5);
        }
      }
    }
  }
}
</style>