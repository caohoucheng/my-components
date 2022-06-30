// 导入所有组件
const componentsReq = require.context('../components', true, /\.vue$/);
const install = ((Vue) => {
  componentsReq.keys().forEach((key) => {
    const component = componentsReq(key).default;
    Vue.component(component.name, component);
  });
})
export default install
