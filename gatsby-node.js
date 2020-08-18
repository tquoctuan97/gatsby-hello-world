const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `posts` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

// exports.createPage = ({ graphql, actions }) => {
//   return graphql(`
//     {
//       allMarkdownRemark {
//         nodes {
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   `).then(result => console.log(JSON.stringify(result)))
// }

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `).then(result => console.log(JSON.stringify(result)))
}
