module.exports = (router) => {

  router.use((req,res,next) => {
    req.path !== 'secretfish' && res.redirect('localhost:3001/fish/saltwater')

    next();
  })

  router.get('/secretfish', (req,res) => {
    res.send({ name: 'no' })
  })

  return router;
}
