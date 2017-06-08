module.exports = (router) => {
  router.get('/fish/saltwater', (req,res) => {
    res.json([
      { name: 'Tuna'},
      { name: 'Cod'}
    ])
  })

  router.get('/fish/freshwater', (req,res) => {
    res.json([
      { name: 'Bass'},
      { name: 'Salmon'}
    ])
  })

  return router;
}