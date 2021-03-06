module.exports = {
  url: 'https://lkoelman.github.io/blog-cv',
  // path is reponame in username.github.io/reponame
  pathPrefix: '/blog-cv',
  title: 'KLMN',
  keywords:
    'computer science, computational neuroscience, programming, nonlinear systems, machine learning, data science, data engineering',
  subtitle: 'Engineering across boundaries',
  copyright: '© 2020 | Oxford, UK',
  disqusShortname: 'lkmn-blog-cv',
  postsPerPage: 20,
  googleAnalyticsId: 'TODO',
  menu: [
    {
      label: 'Blog',
      path: '/'
    },
    {
      label: 'CV',
      path: '/cv'
    }
  ],
  author: {
    name: 'Lucas Koelman',
    photo: '/photo.jpg',
    bio: 'Data Scientist & Engineer ',
    contacts: {
      // don't remove fields, just make them empty string ''
      // https://github.com/gatsbyjs/gatsby/issues/2392
      github: 'lkoelman',
      twitter: 'lkoelman',
      linkedin: 'lklmn',
      telegram: 'lklmn',
      instagram: '',
      facebook: '',
      email: '',
      rss: '' // /rss.xml
    }
  }
}
