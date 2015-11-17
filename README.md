saber-showcase
===

这是一个采用 [**saber**](http://ecomfe.github.io/saber) 框架创建的应用，它是 WebApp 版本的 *Startup News* 阅读器。

![screenshot](https://cloud.githubusercontent.com/assets/157338/2828876/6e4d9874-cf9b-11e3-96d9-33f1ef058961.png)

## 本地运行方法

确保你安装了 `edp`，然后进入项目目录，安装依赖：

    npm install && edp update -f

启动服务器：

    edp mobile start

在浏览器中访问应用：

    http://localhost:8848

## 同构化

我们还有使用 [**Fate**](http://ecomfe.github.io/fate) 构建的[同构化版本示例](https://github.com/ecomfe/saber-showcase)，在 SPA 的基础上提供良好的首屏加载速度与 SEO 优化
