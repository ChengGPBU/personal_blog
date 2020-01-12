const sidebar = {
  '/WEB/': [
    {
      title: 'NodeJS',
      children: [
        'Node/nvm-nrm-npm'
      ]
    },
    {
      title: 'ES6',
      children: [
        'ES6/array',
        'ES6/es6_equal'
      ]
    },
    {
      title: 'JavaScript',
      children: [
        'JavaScript/'
      ]
    },

    {
      title: 'Vue',
      children: [
        'Vue/vuepress-blog'
      ]
    },

    {
      title: 'React',
      children: [
        'React/react-router'
      ]
    }
  ],

  '/Mobile/': [
    {
      title: 'Android杂谈',
      children: [
        'Android/virtualenv-win',
        'Android/pycharm2018'
      ]
    },
    {
      title: 'ReactNative杂谈',
      children: [
        'ReactNative/',
      ]
    },
    {
      title: 'IOS杂谈',
      children: [
        'IOS/urls',
        'IOS/templates_1',
        'IOS/templates_2',
        'IOS/templates_3',
        'IOS/templates_4',
        'IOS/templates_5',
        'IOS/database_1',
        'IOS/database_2',
        'IOS/database_3',
      ]
    }
  ],

  '/BackEnd/': [
    {
      title: 'Java',
      children: [
        'Java/'
      ]
    },
    {
      title: 'MySQL',
      children: [
        'MySQL/mysql5.7_install'
      ]
    },
    {
      title: 'Redis',
      children: [
        'Redis/'
      ]
    },
    {
      title: 'Nginx',
      children: [
        'Nginx/'
      ]
    },
    {
      title: 'Http',
      children: [
        'Http/'
      ]
    },
    {
      title: 'OS',
      children: [
        'OS/'
      ]
    }
  ],

  '/other/': [
    {
      title: "git",
      children: ["Git/git"]
    }
  ]
}

const nav = [
  {
    text: '前端栈',
    items: [
      { text: 'NodeJS', link: '/WEB/' + sidebar['/WEB/'][0]['children'][0] },
      { text: 'ES6', link: '/WEB/' + sidebar['/WEB/'][1]['children'][0] },
      { text: 'JavaScript', link: '/WEB/' + sidebar['/WEB/'][2]['children'][0] },
      { text: 'Vue', link: '/WEB/' + sidebar['/WEB/'][3]['children'][0] },
      { text: 'React', link: '/WEB/' + sidebar['/WEB/'][4]['children'][0] }
    ]
  },
  {
    text: '移动端',
    items: [
      { text: 'Android', link: '/Mobile/' + sidebar['/Mobile/'][0]['children'][0] },
      { text: 'ReactNative', link: '/Mobile/' + sidebar['/Mobile/'][1]['children'][0] },
      { text: 'IOS', link: '/Mobile/' + sidebar['/Mobile/'][2]['children'][0] },
    ]
  },
  {
    text: '后端栈',
    items: [
      { text: 'Java基础', link: '/BackEnd/' + sidebar['/BackEnd/'][0]['children'][0] },
      { text: 'MySQL', link: '/BackEnd/' + sidebar['/BackEnd/'][1]['children'][0] },
      { text: 'Redis', link: '/BackEnd/' + sidebar['/BackEnd/'][2]['children'][0] },
      { text: 'Nginx', link: '/BackEnd/' + sidebar['/BackEnd/'][3]['children'][0] },
      { text: 'Http', link: '/BackEnd/' + sidebar['/BackEnd/'][4]['children'][0] },
      { text: '操作系统', link: '/BackEnd/' + sidebar['/BackEnd/'][5]['children'][0] }
    ]
  },


  {
    text: '其他',
    items: [
      { text: 'Git', link: '/other/' + sidebar['/other/'][0]['children'][0] },
    ]
  },
]

var config = {
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  // base: '/',
  title: '程广的博客',
  description: '种一棵树最好的时间是十年前，其次是现在',
  themeConfig: {
    repo: '',
    repoLabel: '代码',
    editLinks: true,
    editLinkText: '查看原文|编辑此页',
    nav,
    sidebar,
  },
  markdown: {
    lineNumbers: true
  }
}

module.exports = config
