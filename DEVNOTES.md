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

- first time
    - make account
    - go through wizard and choose master branch as source

- `yarn run build`
- push to github `master` branch and it will deploy automatically


# Site structure

Entry points:

- `gatsby-node.js` : configures the build process (site generation)
    - `gatsby/create-pages.js` : transforms data to pages, specifies routing


- `src/templates/`
    - (used by `gatsby/create-pages.js`)
    - creates html pages using components from `src/components`
    - templates & components
        - main page: `index-template.js`
                - `Layout`
                    - `Sidebar`
                    - `Page`
                        - `FeaturedProducts`
                        - `Feed`
        - markdown content is either mapped to:
            - `post-template.js` : if `template:post` in markdown header
            - `page-template.js` : if `template:page` in markdown header

- `src/components/`
    - reusable componetns used by templates etc

# Converters

## LaTeX

- see make4ht latex command in texlive

- examples:
    - see https://github.com/michal-h21/tex4ht-enhanced-web
    - static site: https://tex.stackexchange.com/questions/506578/blogging-in-latex/506587#506587

- manuals:
    - https://tug.org/TUGboat/tb40-1/tb124hoftich-make4ht.pdf
    - http://ctan.math.washington.edu/tex-archive/support/make4ht/make4ht-doc.pdf
    - https://www.12000.org/my_notes/faq/LATEX/htch4.htm#x5-670004

# Plan

- [X] Update featured products

- [X] remove emoji responses to pages
    - when setting up Disqus for page

- [X] update site favicon

- [ ] add CV page in HTML
    - `components/CV/index.js` and `data.json` 

- [X] compile thesis latex to HTML
    
- [ ] Publish BG model code (first version + contact Frontiers)

- [ ] Publish DBS model code (second version)