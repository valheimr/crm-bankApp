/**
 * Ручной плагин для вывода сообщений 
 */
export default {
  /**
 * 
 * @param {*} Vue 
 * @param {*} options 
 *  
 */
  install(Vue, options){
    Vue.prototype.$message = function(html){
      M.toast({html})
    }

    Vue.prototype.$error = function(html) {
      M.toast({html: `[Ошибка]: ${html}`})
    }
  }
}
