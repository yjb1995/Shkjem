<template>
    <div class="menu-warp">
        <ul class="menu">
            <li index="/">HOME</li>
            <li index="/aboutus"></li>
                <!-- <el-menu-item index="/aboutus">STABILITY,CONSISTENCY & VERSION</el-menu-item>
                <el-menu-item index="/aboutus/securiities">FINANCIAL SECURITIES</el-menu-item> -->
            
            <li index="/product">INVESTING</li>
            <li index="/case">LENDING</li>
            <li index="/goin">FAQ</li>  
        </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "Banner",
    props: {
      title: {
        type: String,
        default: ""
      },
      img: {
        type: String,
        default: "../assets/img/bgtop.jpg"
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
    .menu-wrap{
        flex: 1;
        .menu{
            background: #fff;
            display: flex;
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
            -webkit-box-pack: end;
            -ms-flex-pack: end;
            justify-content: end;
            height: 100%;
            line-height: 100%;
            list-style: none;
            margin: 0;
            padding: 0;
            border: none !important;
            margin-right: 4rem;
            li{
                height: 1.9rem !important;
                font-size: 1.6rem !important;
                font-family: Helvetica-Bold, Helvetica !important;
                font-weight: bold !important;
                color: #000000 !important;
                line-height: 1.9rem !important;
                padding: 0 2.4rem !important;
            }

        }
    }
  </style>