# Renaissance Innovation Labs - Handbook

This is the repository for the RIL Handbook.

Please feel free to suggest any changes. See our [contributing guide](https://github.com/PostHog/posthog.com/blob/master/CONTRIBUTING.MD) for more information.

## Quick Start

1. **Pre-Installation**

    Install [Node](https://nodejs.org/en/download/) and [Yarn](https://classic.yarnpkg.com/en/).
    ```bash
    npm install --global yarn
    ```

1.  **Start Developing**

    Clone the repo then navigate into your new site’s directory, install the site dependencies, and start it up.

    ```bash
    cd ril_handbook/
    yarn
    yarn start
    ```

    Tip: Seeing a discrepancy between local development and staging/production? Preview the production build locally by running `gatsby build && gatsby serve`

1.  **Open the Source Code and Start Editing!**

    Your site is now running at `http://localhost:8001`!
    
    *Note: You'll also see a second link: `http://localhost:8001/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).*

It is also possible to use Docker:

```bash
docker run -it --rm \
    -w /app -v "$PWD":/app \
    -p 8000-8001:8000-8001 \
    -e INTERNAL_STATUS_PORT=8001 \
    node:14-slim \
    sh -c 'yarn && yarn start'
```    


<!-- ## Updating the handbook -->

## How the file based routing works.

 Using the `createPage` function, you get access to the `createPage` action, which is at the core of programmatically creating a page. Here’s an example for creating pages from Markdown files sourced by Gatsby’s data layer:

 ```bash
exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `)
  data.allMarkdownRemark.nodes.forEach(node => {
    const slug = node.fields.slug
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/blog-post.js`),
      context: { slug: slug },
    })
  })
}
``` 

 The data for creating these pages doesn’t necessarily have to come from Gatsby’s internal GraphQL data layer. For example, you can source local files or make async calls to remote APIs. For more information, please see [Creating and Modifying Pages](https://www.gatsbyjs.com/docs/reference/routing/creating-routes/#:~:text=Creating%20and%20Modifying%20Pages).

`path` must not be pre-encoded (ie. using `encodeURI`) however unicode characters are supported. So for a path like `/exámple` pass the string directly. Do not pass `encodeURI('/exámple')` or `/ex%C3%A1mple`. If you receive pre-encoded paths from your CMS you may want to run them through `decodeURI` first to ensure the special characters (eg. `%C3%A1`) are turned back into unicode.


## How to update the route.
1. Open `gatsby/createPages.js`
1. In the markdown text passed as the first argument of the graphql function, search for the `filter` key and then the `slug`, edit the `regex` value of the corresponding page  route you wish to update.

## How to update page contents.
1. Open `gatsby/createPages.js`
1. Find the list of pages imported from its location at the top section of the file and trace the file location of the page
1. Trace the file location of the page, go into the file and edit the page content

## How to add new pages.
1. Open `gatsby/createPages.js`
1. In the markdown text passed as the first argument of the graphql function, add a new object to the markdown text objext in this format:

```bash
  handbook: allMdx(
                filter: { fields: { slug: { regex: "/^/handbook/" } }, frontmatter: { title: { ne: "" } } }
            ) {
                nodes {
                    id
                    headings {
                        depth
                        value
                    }
                    fields {
                        slug
                    }
                }
            }
```


## How to add images.
1. in the file you wish to add images, import `GatsbyImage` component and `getImage` function from `gatsby-plugin-image` 
1. Use the `GatsbyImage` component to render images
1. As a value of the Images prop, call the getImage function and pass in the imported image as the first argument


### Working on `/docs/api`?

1. Create a [personal API key](https://posthog.com/docs/api#how-to-obtain-a-personal-api-key) in PostHog
1. `export POSTHOG_APP_API_KEY=key`
1. `yarn start`

## Want job listings or contributors to load?

[See (private) instructions](https://github.com/PostHog/company-internal/blob/master/website-api-keys.md) for this.

## Questions?

### [Join our Slack community.](https://join.slack.com/t/posthogusers/shared_invite/zt-1ghutt7jr-jRj0_iYDRS7R~uKeZLIbdQ)
# ril_handbook
