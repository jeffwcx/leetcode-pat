const fs = require('fs-extra');
const path = require('path');
const { getSideBar } = require('./getSidebar');
const sidebar = getSideBar();
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
    sidebar,
  },
  markdown: {
    lineNumbers: true,
    extendMarkdown: (md) => {
      md.use(require('@traptitech/markdown-it-katex'))
    },
  }
}
