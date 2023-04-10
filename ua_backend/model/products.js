const db = require('./../../dbconfig');

allProducts = () => {
   return  db('products')
   .select('products.id', 'products.title', 'products.images', 'products.price', 'products.description', 'products.category_name', 'products.quantity', 'products.category_name', 'products.colors')
};

getProductsByCategory = (category) => {
    return db('products')
    .innerJoin('category', 'products.category_name', 'category.name')
    .select('products.id', 'products.title', 'products.images', 'products.price', 'products.description', 'products.category_name', 'products.quantity', 'products.category_name', 'products.colors')
    .where({'products.category_name': category})
};

addProduct = (prod) => {
    return db('products').insert(prod)
};

productById = (id) => {
    console.log('product by id model', id)
    return db('products')
    .select('products.id', 'products.title', 'products.images', 'products.price', 'products.description', 'products.category_name', 'products.quantity', 'products.category_name', 'products.colors')
    .where({'products.id': id})
    
};

module.exports = {
    allProducts,
    getProductsByCategory,
    addProduct,
    productById
}