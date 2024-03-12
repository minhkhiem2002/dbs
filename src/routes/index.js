const CategoryRouter = require('./CategoryRouter')
const routes = (app) => {
    app.use('/category',CategoryRouter)
    // app.use('/api/category', UserRouter)
    // app.use('/api/product', ProductRouter)
}

module.exports = routes;