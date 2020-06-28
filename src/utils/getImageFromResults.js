const getImageFromResults = function (results, key) {
  return results.edges.find(x => {
    return x.node.childImageSharp
      && x.node.childImageSharp.fluid.originalName.indexOf(key) > -1
  })
}

export default getImageFromResults
