// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'ALONG',
  plugins: [],
  templates: {
    // Post 是集合名称
    Post: [{
      path: '/posts/:id', // 这里动态路由的id就是我们数据中心的唯一字段，不能随便写
      component: './src/templates/Post.vue',
    }]
  }
}
