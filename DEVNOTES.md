# Gatsby JS

## Structure

https://www.gatsbyjs.org/docs/gatsby-project-structure/

https://www.gatsbyjs.org/docs/recipes/pages-layouts/

https://www.gatsbyjs.org/docs/creating-and-modifying-pages/

https://www.gatsbyjs.org/docs/building-with-components/

https://www.gatsbyjs.org/docs/graphql-concepts/

## Deploying

### Github pages

https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/

- `yarn run clean` - deletes .cache/ and public/
- `yarn run deploy`

### Netlify

- make account
- go through wizard and choose master branch as source
- push to `master` branch and it will deploy automatically


# Site structure

Entry points:

- `gatsby-node.js` : configures the build process (site generation)
    - `gatsby/create-pages.js` : transforms data to pages, specifies routing


- `src/templates/`
    - contains all page templates
    - used by `create-pages.js`
    - imports components

- `src/components/`
    - reusable componetns used by templates etc

# Plan

- [X] Update featured products

- [ ] remove emoji responses to pages

- [ ] update site favicon

- [ ] update CV
    - `components/CV/index.js` and `data.json` 

- [ ] 