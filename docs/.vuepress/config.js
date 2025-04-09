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
        'ES6/array_buffer',
        'ES6/es6_equal'
      ]
    },
    {
      title: 'JavaScript',
      children: [
        'JavaScript/js_this',
        'JavaScript/debounce_ throttle'
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
    },
    {
      title: '小程序',
      children: [
        'MiniProgram/subpackage-optimize',
        'MiniProgram/popup-management',
      ]
    },
    {
      title: '工程化',
      children: [
        'Engineering/git-commit-rules',
        'Engineering/rn-android',
        'Engineering/shell-scp',
        'Engineering/jenkins-cicd'
      ]
    },
  ],

  '/Mobile/': [
    {
      title: 'Android',
      children: [
        'Android/android_fastlane',
        'Android/android_event',
        'Android/android_lanuch_mode',
        'Android/'
      ]
    },
    {
      title: 'ReactNative',
      children: [
        'ReactNative/rn_fastlane',
        'ReactNative/rn_optimization',
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
      title: 'Spring',
      children: [
        'Spring/',
        'Spring/lombok'
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
    },
    {
      title: "个人",
      children: [
        // "private/2019_summary",
        "private/uniapp_share",
      ]
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
      { text: 'React', link: '/WEB/' + sidebar['/WEB/'][4]['children'][0] },
      { text: '小程序', link: '/WEB/' + sidebar['/WEB/'][5]['children'][0] },
      { text: '工程化', link: '/WEB/' + sidebar['/WEB/'][6]['children'][0] }
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
      { text: 'Spring', link: '/BackEnd/' + sidebar['/BackEnd/'][1]['children'][0] },
      { text: 'MySQL', link: '/BackEnd/' + sidebar['/BackEnd/'][2]['children'][0] },
      { text: 'Redis', link: '/BackEnd/' + sidebar['/BackEnd/'][3]['children'][0] },
      { text: 'Nginx', link: '/BackEnd/' + sidebar['/BackEnd/'][4]['children'][0] },
      { text: 'Http', link: '/BackEnd/' + sidebar['/BackEnd/'][5]['children'][0] },
      { text: '操作系统', link: '/BackEnd/' + sidebar['/BackEnd/'][6]['children'][0] }
    ]
  },


  {
    text: '其他',
    items: [
      { text: 'Git', link: '/other/' + sidebar['/other/'][0]['children'][0] },
      { text: '个人', link: '/other/' + sidebar['/other/'][1]['children'][0] },
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
