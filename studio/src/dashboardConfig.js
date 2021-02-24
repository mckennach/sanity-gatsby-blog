export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6036ddbe10f1444e0e19c1fc',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-mmaph7s9',
                  apiId: '371a6938-e4be-4dfb-8c4e-f9ad9fd13163'
                },
                {
                  buildHookId: '6036ddbefedeaa4041bfdaca',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-gsmkwthb',
                  apiId: 'e98f4aff-2786-4129-a81b-4808b1e95cdd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mckennach/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-gsmkwthb.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
