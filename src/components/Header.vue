<template>
    <div class="header-warp">
        <div class="logo">
            <img src="./images/logo.png" alt="Hru" />
        </div>
        <el-menu
            :default-active="defaultActive"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            :router="router"
            active-text-color="#E84F0D"
            text-color="#000000"
        >
                <el-menu-item index="/">HOME</el-menu-item>
                <el-submenu index="/aboutus" popper-append-to-body>
                    <template slot="title">ABOUT US</template>
                    <el-menu-item index="/aboutus">STABILITY,CONSISTENCY & VERSION</el-menu-item>
                    <el-menu-item index="/aboutus/securiities">FINANCIAL SECURITIES</el-menu-item>
                </el-submenu>
               
                <el-menu-item index="/product">INVESTING</el-menu-item>
                <el-menu-item index="/case">LENDING</el-menu-item>
                <el-menu-item index="/goin">FAQ</el-menu-item>
        </el-menu>
        <!-- <Menu /> -->
        <div class="login">
            <a>Login in</a>
        </div>
    </div>
  </template>
  
  <script>
  import Menu from './Menu.vue';
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
      },
      defaultActive: {
        type: String,
        default: "/"
      }
    },
    components: {
        Menu
    },
    data(){
        return {
            router: true
        }
    },
    methods:{
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
  };
  </script>
  
  <style lang="scss">
    .header-warp{
      display: flex;
      justify-content: start;
      width: 100%;
      align-items: center;
      .logo{
        img{
            width: 13.5rem;
        }
      }
      .el-menu-demo {
        display: flex;
        flex: 1;
        justify-content: end;
        height: 100%;
        line-height: 100%;
        list-style: none;
        margin: 0;
        padding: 0;
        border: none !important;
        margin-right: 4rem;
        .el-menu-item{
          line-height: 9rem !important;
          height: 9rem !important;
        }
        .is-active{
            
            color: #E84F0D !important;
        }
       
      }
      .login{
        a{
            display: block;
            width: 11.6rem;
            height: 4.2rem;
            background: #FF9857;
            border-radius: 10%;
            font-size: 1.6rem;
            font-family: Helvetica-Bold, Helvetica;
            font-weight: bold;
            color: #FFFFFF;
            line-height: 4.2rem;
            text-align: center;
        }
      }
      
    }
    .el-menu--horizontal{
        .el-submenu{
                padding: 0 2.4rem !important;
                color: #000000 ;
                border-bottom: none !important;
                .el-submenu__title{
                    font-size: 1.6rem !important;
                    font-family: Helvetica-Bold, Helvetica !important;
                    font-weight: bold !important;
                    color: #000000 ;
                    border-bottom: none !important;
                    height: 9rem !important;
                    line-height: 9rem !important;
                    padding: 0 2.4rem !important;
                }
                i{
                    font-size: 1.5rem !important;
                    font-weight: 900 !important;
                    color: #000 !important;
                    margin-left: 0.8rem;
                    margin-top: -0.3rem;
                }
                // height: 1.9rem !important;
                // line-height: 1.9rem !important;
        }
        .el-submenu .is-active{
            .el-submenu__title{
                color: #E84F0D !important;
            }
        }
    }
    
//    .el-submenu__title{
            
//         font-size: 1.6rem !important;
//         font-family: Helvetica-Bold, Helvetica !important;
//         font-weight: bold !important;
//         color: transparent !important;
        
//     }
    .el-menu-item{
        font-size: 1.6rem !important;
        font-family: Helvetica-Bold, Helvetica !important;
        font-weight: bold !important;
        color: #000000;
        padding: 0 2.4rem !important;
        border-bottom: none !important;
       
    }
   
  </style>