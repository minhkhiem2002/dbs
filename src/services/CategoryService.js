const Category = require('../models/category.model')

const getAllCategory = () => {
    return new Promise((resolve, reject) => {
        try {
            if (Category) {
                Category.get_all(function(data) {
                    resolve({
                        status: 200,
                        message: 'Get All Category successfully',
                        data: data ,
                    })
                })
            }
        }
        catch (e) { 
            reject(e)
        }
    })
}

module.exports = {
    getAllCategory
}