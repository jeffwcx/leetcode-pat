const fs = require('fs-extra');
const path = require('path');

module.exports = {
  title: 'LeetCode&PAT题解',
  description: 'LeetCode精选算法200题/PAT甲级练习题',
  head: [
    ['link', { href: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css', rel: 'stylesheet' }],
  ],
  themeConfig: {
    editLinks: true,
    logo: '/logo.png',
    smoothScroll: true,
    sidebar: getSideBar(),
  },
  markdown: {
    lineNumbers: true,
    extendMarkdown: (md) => {
      md.use(require('@traptitech/markdown-it-katex'))
    },
  }
}


function getSideBar() {
  const sidebar = [
    {
      title: 'PAT',
      collapsable: false,
      children: [],
    },
    {
      title: 'LeetCode',
      collapsable: false,
      children: [],
    }
  ];
  const paths = fs.readdirSync(path.join(__dirname, '../'));
  paths.forEach((p) => {
    const re = /(pat|leetcode|lc|lee)(\d+)$/ig
    const matches = re.exec(p);
    if (matches) {
      const type = matches[1];
      const id = matches[2];
      const sb = `/${type}${id}/`;
      if (type.toLowerCase() === 'pat') {
        sidebar[0].children.push(sb);
      } else {
        sidebar[1].children.push(sb);
      }
    }
  });
  return sidebar;
}