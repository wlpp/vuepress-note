module.exports = {
  title: "Notes",
  description: "技术笔记",
  head: [
    ["link", { rel: "icon", href: "/img/logo.ico" }],
    ["link", { rel: "manifest", href: "/manifest.json" }]
  ],
  base: "/",
  themeConfig: {
    nav: [
      { text: "文章", link: "/article/index" },
      { text: "实例", link: "/weapon/index" },
      { text: "Github", link: "https://github.com/" }
    ],
    search: true,
    sidebar: {
      "/article/": [
        {
          title: "JS",
          children: [
            "js/variate",
            "js/destruction",
            "js/operator",
            "js/string",
            "js/number",
            "js/object",
            "js/array",
            "js/function",
            "js/regexp",
            "js/this",
            "js/promise",
            "js/async",
            "js/prototype",
            "js/class",
            "js/export",
            "js/dom",
            "js/aa"
          ]
        },
        {
          title: "VUE",
          children: [
            "vue/use",
            "vue/lifecycle",
            "vue/template",
            "vue/monitor",
            "vue/component",
            "vue/slot",
            "vue/transition",
            "vue/globalComponents",
            "vue/router",
            "vue/request",
            "vue/vuex"
          ]
        },
        {
          title: "React",
          children: [
            "react/use",
            "react/lifecycle",
            "react/template",
            "react/component",
            // "react/dispose",
            "react/router",
            "react/mobx",
            "react/request",
          ]
        },
        {
          title: "Node",
          children: [
            "node/use",
            "node/http",
            "node/custom",
            "node/fs",
            "node/route",
            "node/img",
            "node/url",
            "node/path",
          ]
        },
      ],
      "/weapon/": [
        {
          title: "JS库",
          children: [
            "js/jsonp",
            "js/storage",
            "js/play",
            "js/facility",
            "js/date",
            "js/article-1",
            "js/article-2",
            "js/copy",
            "js/input",
            "js/url",
            "js/image",
            "js/scroll"
          ]
        },
        {
          title: "CSS库",
          children: [
            "css/base",
            "css/flexible",
            "css/gird",
            "css/popup"
          ]
        },
        {
          title: "VUE库",
          children: [
            "vue/beterscroll",
            "vue/swiper",
            "vue/postcss",
            "vue/set",
            "vue/sss",
          ]
        },
      ]
    }
  },
  plugins: ["@vuepress/back-to-top", "@vuepress/active-header-links", "@vuepress/nprogress"]
};
