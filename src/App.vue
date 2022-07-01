<template>
  <div id="app">
    <c-table :tableConfig="tableHeader" :tableData="tableData" :headerCellStyle="headerCellStyle">
      <div slot="pause">123</div>
    </c-table>
  </div>
</template>

<script>
import CTable from '@/components/Table/index'
var tableOption = {
  // # Table配置

  // ------

  // # Table-column配置

  // fixed   列是否固定在左侧或者右侧     可选值:true, left, right      默认值:false     类型:String, Boolean
  // label   标题
  // prop    对应列内容的字段名      可选值:--      默认值:--       类型:String
  // headTip 标题提示    可选值:--      默认值:--       类型:String
  // headFormatter  表头自定义格式化  可选值:--      默认值:--       类型:Function(row, label, column, index)
  // width   对应列的最小宽度      可选值:--      默认值:--       类型:String
  // defaultWidth    对应列的宽度  可选值:--      默认值:--       类型:string
  // align:  对齐方式   可选值:left/center/right      默认值:left       类型:String
  // headerAlign 表头对齐方式，若不设置该项，则使用表格的对齐方式  可选值:left/center/right      默认值:--       类型:String
  // sortable 排序   可选值:true/false      默认值:false       类型:Boolean
  // filter   过滤器   可选值:已定义的过滤器      默认值:--       类型:String
  // formatter  自定义格式化  可选值:--      默认值:--       类型:Function(row, result, column, index)
  // type  渲染组件   可选值:checkbox/switch/tooltip/editBox/action    默认值:--       类型:String
  // showEdit  判断type:editBox时是否显示编辑icon   可选值:true/false     默认值:true       类型:Boolean/Function(row, cellValue, cellOption)
  // actionOption  type:action时配置  可选值:--    默认值:--       类型:Array[{ iconName, toolTip ,show ,type ,menuData ,style}]
  //     iconName  action图标  可选值:svg-icon组件支持图标    默认值:--      类型:String
  //     toolTip   图标toolTip内容     可选值:--      默认值:--        类型:String
  //     show      判断是否显示的prop值    可选值:prop值      默认值:--(默认显示)   类型:String (可能要加Function判断)
  //     type      图标类型            可选值:menu      默认值:--    类型:String
  //     menuOption  菜单图标数据(必须:type:menu)       可选值:--     默认值:--   类型:Array[{ label, index ,disabled}]
  //          label  菜单标题      可选值:--      默认值:--     类型:String
  //          index  菜单标识      可选值:--      默认值:--     类型:String
  //          disabled  控制菜单disabled状态    可选值:true/false     默认值:false     类型:Boolean/Function(row, menuOption)
  //     style   icon style的回调方法(也可以使用一个固定的 Object)   可选值:--    默认值:--     类型:Object/Function(row, actionOption)
  //

  // Events
  // handleAction   action菜单点击触发的事件   Function(row, iconName)
  // handleMoreAction   moreAction菜单点击触发的事件  Function(row, actionMenuIndex,rowIndex)
  // changeSwitch  switch发生改变触发的事件   Function(event, row, propValue)
  // handleEditBoxConfirm  输入框编辑保存事件    Function(val, row, propValue, callback()=>{})
  // handleEditEvent   编辑icon点击事件    Function(row,prop,index)

  // Table-column Scoped Slot
  // prop值均支持

  // headerCellStyle: {},
  // stickyHead: "",
  // border: true,
  // borderNoShowLine: true,
  // showSummary: true,
  // summaryMethod: "",
  // rowKey: "",
  // loadmore: "",
  // treeProps: { children: 'children', hasChildren: 'hasChildren' },
  // sortProps: { prop: '', order: '' },
  option: [
    {
      fixed: true,
      width: 40,
      defaultWidth: 40,
      label: '',
      type: 'checkbox',
      sortable: false,
    },
    {
      label: 'Report Name',
      prop: 'name',
      headTip: 'Report Name test',
      width: 240,
      fixed: 'left',
      type: 'editBox',
      showEdit: (row, data, option) => {
        return true
      },
    },
    {
      label: 'Status',
      prop: 'pause',
      width: 120,
      fixed: 'left',
      sortable: false,
      type: 'switch',
      headFormatter: (row, label, column, index) => {
        return `${label} 格式化`
      },
    },
    {
      label: 'Level',
      prop: 'type',
      width: 180,
      filter: 'typeFilter',
      type: 'edit',
      showEdit: (row, data, option) => {
        return true
      },
    },
    {
      label: 'Date Range',
      prop: 'dateRange',
      width: 160,
      defaultWidth: 160,
      formatter: (row, result, column, index) => {
        return result + '123'
      }
    },
    {
      label: 'Time',
      prop: 'dim',
      width: 160,
      defaultWidth: 160,
    },
    {
      label: 'Frequency',
      prop: 'scheduleType',
      width: 140,
      defaultWidth: 140,
    },
    {
      label: 'Owner',
      prop: 'username',
      width: 280,
      defaultWidth: 280,
      type: 'tooltip',
    },
    {
      label: 'Create Time',
      prop: 'createTime',
      width: 160,
      defaultWidth: 160,
      // filter: 'parseDate(MM/DD/YYYY HH:mm:ss)',
    },
    {
      label: 'Action',
      width: 300,
      defaultWidth: 300,
      fixed: 'right',
      sortable: false,
      type: 'action',
      actionOption: [
        {
          iconName: 'Edit',
          toolTip: '',
          show: 'canModify',
        },
        {
          iconName: 'view',
          toolTip: 'View',
        },
        {
          iconName: 'viewHistory',
          toolTip: 'View history',
        },
        {
          iconName: 'preview',
          toolTip: 'Preview',
        },
        {
          iconName: 'runNow',
          toolTip: 'Run now',
          style: (row, option) => {
            return {
              color: row.running ? '#ffaa00' : '#7f7f7f',
            }
          },
        },
        // {
        //   iconName: "copy",
        //   toolTip: "Copy",
        // },
        {
          iconName: 'Delete',
          toolTip: 'Delete',
        },
        {
          iconName: 'More',
          toolTip: 'More',
          type: 'menu',
          style: {
            width: '20px',
            height: '21px',
            transform: 'translateY(-1px)',
          },
          menuOption: [
            {
              label: 'Add Ad Group',
              index: 'addAdGroup',
              disabled: (row, option) => {
                const { status } = row
                return !!status
              },
            },
            {
              label: 'test',
              index: 'test',
            },
          ],
        },
      ],
    },
  ],
}
var list = [{
  name: 'name1',
  pause: false,
  type: 'type1',
  dateRange: 'dateRange',
  dim: '0',
  scheduleType: 'scheduleType',
  username: 'cc',
  createTime: '2022/07/01 12:00:00',
}]
for (let i = 0; i < 20; i++) {
  list = list.concat(list[0])
}
export default {
  name: "App",
  components: {
    CTable
  },
  data() {
    return {
      tableHeader: tableOption.option,
      tableData: {
        list: list
      },
      headerCellStyle: {
        position:'sticky',
        background: '#fafafa',
        color: "#303133",
        height: '20px',
        fontSize: '12px',
        borderBottom:'2px solid #e8e8e8'
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
