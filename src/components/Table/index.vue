<template>
  <div class="c-table">
    <div class="sticky-head" @scroll="tableScroll($event)">
      <div class="sticky-head-scroll"></div>
    </div>
    <el-table ref="tableView" lazy v-loading="loading" :data="tableData.list" :header-cell-style="headerCellStyle"
      :border="border" size="small">
      <!-- 空数据时显示 -->
      <template slot="empty">
        <div class="table_nodata lexBox flex-middle flex-center" v-if="!loading">
          <img src="@/assets//logo.png" />
        </div>
      </template>
      <el-table-column v-for="(column, colIndex) in tableConfig"
        :sortable="column.sortable === false ? false : 'custom'" :dragAble="column.dragAble" :key="colIndex"
        :label="column.label" :prop="column.prop" :fixed="column.fixed" :min-width="column.width"
        :width="column.defaultWidth" :align="column.align" :header-align="column.headerAlign">

        <!-- thead -->
        <template slot="header" slot-scope="{ row, $index }">
          <span v-html="drawHeader(row, column, $index)"></span>
        </template>
        <!-- tbody -->
        <template slot-scope="{ row, $index }">
          <!-- slot -->
          <slot :row="row" :index="$index" :label="drawContent(row, column)" :name="column.prop"
            v-if="$scopedSlots[column.prop]"></slot>
          <template v-else>
            {{ drawContent(row, column, $index) }}
          </template>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: "CTable",
  props: {
    //加载状态
    loading: {
      type: Boolean,
      default: false,
    },
    tableConfig: {
      type: Array,
      default: () => [],
    },
    tableData: {
      type: [Array, Object],
      default: () => {
        return { list: [] }
      },
    },
    headerCellStyle: {
      type: [Function, Object],
      default: () => {
        return {}
      },
    },
    border: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  mounted() {
    console.log(this.$refs.tableView)
    this.$nextTick(() => {
      let dom = document.querySelector('.el-table')
      let content = document.querySelector('.el-table table')
      console.log('dom', dom)
      console.log('content', content)
      let clientWidth = dom.offsetWidth
      let scrollWidth = dom.scrollWidth
      let scrollLeft = dom.scrollLeft
      console.log('clientWidth', clientWidth)
      console.log('scrollWidth', scrollWidth)
      console.log('scrollTop', scrollLeft)
      console.log('content clientWidth', content.clientWidth)
      console.log('content scrollWidth', content.scrollWidth)
      console.log('content scrollLeft', content.scrollLeft)

      document.querySelector('.sticky-head-scroll').style.width = `${content.scrollWidth}px`
      // document.querySelector('.el-table__fixed').style.height = `250px`
      // document.querySelector('.el-table__fixed-right').style.height = `250px`
    })

  },
  methods: {
    tableScroll(el) {
      let dom = document.querySelector('.el-table__body-wrapper')
      let scrollLeft = el.target.scrollLeft
      dom.scrollLeft = scrollLeft
      // document.querySelector('.el-table__fixed').style.height = `250px`
      // document.querySelector('.el-table__fixed-right').style.height = `250px`
    },
    /**
     * @function  {绘制表头内容}
     * @param {数据} row
     * @param {列配置} column
     * @param {对应配置下标} index
     */
    drawHeader(row, column, index) {
      let label = column.label || ''
      if (
        column.headFormatter &&
        Object.prototype.toString.call(column.headFormatter) ==
        '[object Function]'
      ) {
        //自定义格式化
        label = column.headFormatter(row, label, column, index)
      }
      return label
    },
    /**
     * @function  {绘制列内容}
     * @param {数据} row
     * @param {列配置} column
     * @param {对应配置下标} index
     */
    drawContent(row, column, index) {
      let result = row[column.prop]
      if (
        column.formatter &&
        Object.prototype.toString.call(column.formatter) == '[object Function]'
      ) {
        //自定义格式化
        result = column.formatter(row, result, column, index)
      } else if (
        column.filter &&
        Object.prototype.toString.call(column.filter) == '[object String]'
      ) {
        //过滤器处理数据
        let v = column.filter
        let filterFn = ''
        let params = ''
        if (v.indexOf('(') > -1 && v.indexOf(')') > -1) {
          let start = v.indexOf('(')
          let end = v.lastIndexOf(')')
          params = v.substring(start + 1, end)
          filterFn = v.substring(0, start)
        } else if (v.indexOf('(') < 0 && v.indexOf(')') < 0) {
          filterFn = column.filter
        } else {
          return result
        }

        if (this.$options.filters && this.$options.filters[filterFn]) {
          result = this.$options.filters[filterFn](result, params)
        } else {
          result = Vue.filter(filterFn)(result, params)
        }
      }
      return result
    },
  },
  filters: {
    typeFilter(type) {
      return `${type}typeFilter`
    },
  }
}
</script>

<style lang="scss" scoped>
.c-table {
  position: relative;
}

.sticky-head {
  overflow-x: auto;
  overflow-y: hidden;
}

.sticky-head-scroll {
  height: 1px;
}

::v-deep .el-table__fixed {
  height: 100% !important;
  background: inherit;
}

::v-deep .el-table__fixed-right {
  height: 100% !important;
  background: inherit;
}

::v-deep .el-table__fixed::before,
::v-deep .el-table__fixed-right::before {
  display: none !important;
}

::v-deep .el-table__fixed-footer-wrapper tbody td {
  background: white;
  font-weight: bold;
}

::v-deep .el-table--scrollable-y .el-table__body-wrapper {
  overflow-x: hidden !important;
}

::v-deep .el-table--scrollable-x .el-table__body-wrapper {
  overflow-x: hidden !important;
}
</style>