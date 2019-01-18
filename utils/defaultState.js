export const isAuth = false
export const apiVersion = '43.0'
export const navigation = [
  {
    label: 'Schema',
    icon: 'mdi-database',
    to: '/schema',
    hasChildren: false
  },
  {
    label: 'Data',
    icon: 'list',
    hasChildren: true,
    children: [
      {
        label: 'Query',
        icon: 'query_builder',
        to: '/data/query',
        hasChildren: false
      },
      {
        label: 'Modify',
        icon: 'edit',
        to: '/data/modify',
        hasChildren: false
      }
    ]
  },
  {
    label: 'Metadata',
    icon: 'album',
    to: '/metadata',
    hasChildren: false
  },
  {
    label: 'Rest API',
    icon: 'web_asset',
    to: '/rest',
    hasChildren: false
  }
]
