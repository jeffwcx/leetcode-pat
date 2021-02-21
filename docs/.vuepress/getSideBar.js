const fs = require('fs-extra');
const path = require('path');

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


module.exports = {
  getSideBar
};