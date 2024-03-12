const db = require('../common/connect')

const Category = function(category){
    this.category_id = category.category_id;
    this.category_name = category.category_name;
}

Category.get_all = function(result){
    db.query("SELECT * FROM category", function(err,category){
        if (err) {
            result(null);

        }
        else {
            result(category)
        }
    })
}

Category.getById = function(id){
    db.query("SELECT * FROM category WHERE id = ?",id, function(err,category){
        if (err) {
            return null
        }
        else {
            return category
        }
    })
}

Category.create = function(data, result) {
    result(data)
}

module.exports = Category