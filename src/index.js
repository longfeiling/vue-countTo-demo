import VueCountTo from './vue-countTo.vue'

// 导出模块
export default VueCountTo;
// global 情况下 自动安装
if(typeof window !== 'undefined' && window.vue) {
  window.Vue.component('vue-count-up',VueCountTo)
}