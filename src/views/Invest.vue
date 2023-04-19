<template>
  <div>
    <div class="investing-pc" v-loading="loading">
      <div class="text-wrapper">
        <h1 class="text-position">BELIEVE IN HR, </br>DEPENDABLE </br>STABILITY</h1>
      </div>
      <div>
        <img src="@/assets/img/Snipaste_2023-04-17_16-54-33.png">
      </div>
    </div>
    <!-- 内容主体区 -->
    <div class="investing-main">
      <div class="text-wrapper">
        <h1>Dividends</h1>
        <p>
           We currently pay $0.07083 per Preferred Share Class B every month and $0.8500 on average per year. The record date is the last business day of every month, and the dividend is distributed on the 15th of one and a half months following. The dividend will be paid if you own shares on the record date. The following chart shows our dividend record since inception.
Each year, we declare an annual bonus in May along with our financial results, so that all earnings from the previous year ended December 31 are distributed to shareholders.<br/><br/>
Under Section 130.1 of the Income Tax Act, taxable dividends paid to shareholders (other than capital gains dividends) are taxed as interest income. As a Mortgage Investment Corporation, we do not pay any income taxes, provided that we distribute all of our taxable income each year (and meet other requirements). In effect, we pass interest income that we earn on our investments in mortgages through to our shareholders.
Shareholders can also join our Dividend Reinvestment Plan ("DRIP").<br/><br/> Dividends are automatically reinvested into HRU MIC shares at the full share price through the DRIP; no commission is charged.
For questions about your Dividend Re-Investment Plan or historical data, please email or call (647) 360-8996.
        </p>
       
      </div>
      <!-- 表格区 -->
       <el-table
      :data="tableData"
      height="20rem"
      stripe
      border
      size="mini"
      :highlight-current-row="true"
      :header-cell-style="{backgroundColor:'#858585',color:'white'}"
       >
        <el-table-column
          prop="date"
          label="日期"
          width="120"
         >
        </el-table-column>
        <el-table-column
      prop="name"
      label="姓名"
      width="120">
        </el-table-column>
        <el-table-column
      prop="address"
      label="地址">
        </el-table-column>
        <el-table-column
      prop="date"
      label="日期"
      width="120">
        </el-table-column>
       </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {},

  created() {},
};
</script>

<style lang="scss" scoped>
.investing-pc {
  width: 100%;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(#fafafa, #ffffff);
  white-space: pre-wrap;
  .text-wrapper {
    width: 47.6rem;
    font-size: 3rem;
    position: relative;
    .text-position {
      position: absolute;
      margin-top: 50%;
      transform: translate(20%, -20%);
    }
  }
  img {
    width: 80rem;
  }
}
.investing-main {
  width: 60%;
  margin-left: 50%;
  transform: translate(-50%);
  margin-top: 10rem;
  margin-bottom: 10rem;
  border-radius: 10px;
  background-image: linear-gradient(#fcefe5, #ffff);
  .text-wrapper {
    width: 80%;
    margin-left: 50%;
    transform: translate(-50%);
    margin-bottom: 10rem;
    h1 {
      width: 70px;
      margin-left: 50%;
      transform: translate(-50%);
      padding: 20px 0;
    }
    p {
      padding: 2rem;
      border-radius: 10px;
      background-image: linear-gradient(#ffff, #fcf8f4);
    }
  }
  .el-table {
    margin-left: 50%;
    transform: translate(-50%);
    width: 80%;
    border: 1px solid rgb(157, 157, 157);
    ::v-deep.el-table__row {
      background-color: #f2ceab;
    }
    ::v-deep.el-table__cell {
      border: 1px solid #f2ad68;
      border-top: none;
      border-right: none;
    }
    ::v-deep.el-table_1_column_1 {
      border-left: none;
    }
  }
}
</style>