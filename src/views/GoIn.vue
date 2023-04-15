<template>
  <div class="faq-pc">
    <!-- 文本区外部容器 -->
    <div class="main">
      <!-- 折叠面板 -->
      <el-collapse v-for="(item, index) in collapsItemData" :key="index">
        <el-collapse-item>
          <template slot="title">
              <i class="el-icon-s-comment" style="color: #ff9857"></i>
              <span class="title">{{ item.title }}</span>
          </template>
          <div>{{ item.content }}</div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import faq from "@/faq-content";
export default {
  name: "Faq",
  data() {
    return {
      collapsItemData: faq,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>  
.faq-pc {
  margin-top:5rem;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  //去除右侧出现的滚动条
  overflow: hidden;
  white-space:pre-wrap;
  .main {
    width: 60%;
    font-size: 1.2;
    color: #000000;
    border-top: 1px solid #ebeef5;
    .el-collapse {
      border-top: none;
      // 调整item高
     ::v-deep.el-collapse-item__header {
        height: 8rem;
      }
      }
      .el-icon-s-comment {
        font-size: 1.4em;
        margin-right:1em;
      }
      .title {
        font-size: 2.6rem;
        font-family: Helvetica;
        font-style: Oblique;
        font-weight: bold;
      }
    }
  }

</style>