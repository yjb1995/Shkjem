<template>
    <div class="foot">
      <div class="foot-content">
        <div class="loc">
          <p>301 - 7300 Warden Ave, </br>
  Markham, ON L3R 9Z6</br>
  Canada</p>
          <p>E: info@hrufinancials.com</br>
  P: (647)360-8996</br>
  F: (647)360-7669</p>
        </div>
        <div v-for="item in menuData" :key="item.main">
          <p class="main">{{ item.main }}</p>
          <p class="side" v-for="(sides, index) in item.side" :key="index">{{ sides }}</p>        
        </div>
        </div>
      <div class="copyright">
        © 2020 by HRU Financials Ltd, HRU Mortgage Investment Corporation. All Rights Reserved.
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Footer",
    data(){
      return {
        menuData: [
          {
            main: "ABOUT US", 
            side: ["STABILITY, CONSISTENCY & VISION", "FINANCIAL SECURITIES"]
          },
          {
            main: "INVESTING", 
            side: ["DIVIDENDS HISTORY"]
          },
          {
            main: "LENDING", 
            side: ["THE 5 Cs OF CREDIT"]
          },
          {
            main: "FAQ", 
            side: ["APPROVED APPRAISERS"]
          }
        ]
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .foot {
    padding: 2rem 36rem 0 37.2rem;
    width: calc(100% - 73.2rem);
    p{
      margin: 0;
      padding: 0;
    }
    .foot-content{
      width: 100%;
      height: 19.7rem;
      display: flex;
      justify-content: space-around;

      div{
        // width: 20.5%;
      }
      .loc{
        font-size: 1.6rem;
        font-family: Helvetica;
        color: #000000;
        word-wrap: break-word;
        word-break: normal;
        // width: 18%;
        p{
          margin-bottom: 2.7rem;
        }
      }
      .main{
        font-size: 1.6rem;
        font-family: Helvetica-Bold, Helvetica;
        font-weight: bold;
        color: #000000;
        text-align: right;
      }
      .side{
        font-size: 1.4rem;
        font-family: Helvetica-Light, Helvetica;
        font-weight: 300;
        color: #000000;
        text-align: right;
        margin: 1.2rem 0;
      }
    }
    .copyright{
      border-top: 1px solid #979797;
      text-align: center;
      font-size: 1.4rem;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.3);
      height: 6rem;
      line-height: 6rem;
    }
  }
  </style>
