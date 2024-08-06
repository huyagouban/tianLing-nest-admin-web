
/**
 * 获取文件在线地址
 */
export const getFileUrl =()=>{
  return  import.meta.env.VITE_APP_ENV=='production'?import.meta.env.VITE_APP_BASE_URL:'http://localhost:8080'
}