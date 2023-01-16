<template>
  <div id="app">
      <div class="header">
        <Header />
      </div>
      <el-main>
        <router-view />
      </el-main>
      <div class="footer">
        <Footer />
      </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      router: true,
      defaultActive: "/"
    };
  },
  methods: {
   
  }
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
html,
body {
  background: #fff;
  font-family: futura-pt,"system-ui",Helvetica Neue,sans-serif;
  font-size: 10px;
  font-weight: 400;
  line-height: 1.4;
  margin: 0;
  min-height: 100%;
  position: relative;
}

#app {
 
}

.header{
  width: calc(100% - 72rem);
  height: 9rem;
  padding: 0 36rem !important;
}
.el-main {
  padding: 0  36rem !important;
}

</style>
