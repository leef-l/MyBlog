// nav 配置, 即上方导航栏

import { NavItem } from "vuepress/config";

export default <Array<NavItem>>[
  { text: "Home", link: "/" },
  {
    text: "docker",
    items: [
      {
        text: "快速使用",
        link: "/docker/",
      }
    ],
  },
  {
    text: "区块链",
    items: [
      {
        text: "快速使用",
        link: "/block/",
      }
    ],
  },
  {
    text: "配置",
    items: [
      {
        text: "项目配置",
        link: "/start/",
      },
      {
        text: "部署",
        link: "/deploy/",
      },
      {
        text: "更多参考",
        link: "/more/",
      },
    ],
  },
  {
    text: "友情链接",
    items: [
      {
        text: "vuepress",
        link: "https://vuepress.vuejs.org/",
      },
      {
        text: "vuepress-theme-vdoing",
        link: "https://doc.xugaoyi.com/",
      },
      {
        text: "U2SB",
        link: "https://www.u2sb.com/",
      },
      {
        text: "MonoLogueChi",
        link: "https://blog.xxwhite.com/",
      },
    ],
  },
];
