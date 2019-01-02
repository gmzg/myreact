const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy(
      '/pager',{ 
                  target: 'https://m.zbj.com' ,
                  changeOrigin: true,
                }
          ),
    proxy(
      '/category',{
        target: 'https://m.zbj.com' ,
        changeOrigin: true,
      }
    ),
    proxy(
      '/shunt',{
        target: 'https://m.zbj.com' ,
        changeOrigin: true,
      }
    ),
    proxy(
      "/shop",{
        target: 'https://m.zbj.com' ,
        changeOrigin: true,
      }
    ),
    proxy(
      "/getHotWord/",{
        target: 'https://m.zbj.com' ,
        changeOrigin: true,
      }
    ),
    proxy(
      "/search",{
        target: 'https://m.zbj.com' ,
        changeOrigin: true,
      }
    ),
    proxy(
      "/shop",{
        target: 'https://m.zbj.com' ,
        changeOrigin: true,
      }
    ),
    proxy(
      "/city",{
        target: 'https://m.zbj.com' ,
        changeOrigin: true,
      }
    ),
    proxy(
      "/getClassification/",{
        target: 'https://m.zbj.com/search' ,
        changeOrigin: true,
      }
    )
  )
};