const CategoryService = require('../services/CategoryService')

const getAllCategory = async (req, res) => {
    try {
        const response = await CategoryService.getAllCategory();
        return res.status(200).json(response)
    } catch (err) {
        return res.status(404).json({
            message: err
        })
    }
}

module.exports = {
    getAllCategory
}