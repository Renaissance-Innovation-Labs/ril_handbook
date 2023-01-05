const { replacePath } = require('./utils')
const { createFilePath } = require(`gatsby-source-filesystem`)

const slugify = require('slugify')
const { JSDOM } = require('jsdom')

module.exports = exports.onCreateNode = async ({ node, getNode, actions, store, cache, createNodeId }) => {
    const { createNodeField, createNode } = actions

    if (node.internal.type === `MarkdownRemark` || node.internal.type === 'Mdx') {
        const parent = getNode(node.parent)
        if (parent.internal.type === 'Reply') return
        const slug = createFilePath({ node, getNode, basePath: `pages` })

        createNodeField({
            node,
            name: `slug`,
            value: replacePath(slug),
        })
    }

    if (node.internal.type === 'AshbyJobPosting') {
        const title = node.title.replace(' (Remote)', '')
        const slug = `/careers/${slugify(title, { lower: true })}`
        createNodeField({
            node,
            name: `title`,
            value: title,
        })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
        if (node.info.descriptionHtml) {
            let html = node.info.descriptionHtml
            const tableOfContents = []
            if (html.includes('<h2>')) {
                const dom = JSDOM.fragment(
                    `<section><details open><summary><h2>${html
                        .split('<h2>')
                        .slice(1)
                        .join('</details><details open><summary><h2>')
                        .split('</h2>')
                        .join('</h2></summary>')}</summary></details></section>`
                )
                const details = dom.querySelectorAll('details')
                for (let i = 0; i < details.length; i++) {
                    const node = details[i]
                    const heading = node.querySelector('h2')
                    if (heading.textContent.toLowerCase() === 'benefits') {
                        node.remove()
                    } else {
                        const textContent = heading.textContent
                        const id = slugify(textContent, { lower: true })
                        tableOfContents.push({ value: textContent, url: id, depth: 0 })
                        heading.id = id
                    }
                }
                html = dom.firstChild.outerHTML
            }
            createNodeField({
                node,
                name: `tableOfContents`,
                value: tableOfContents,
            })
            createNodeField({
                node,
                name: `html`,
                value: html,
            })
        }
    }
}
