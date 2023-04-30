const db = require('./../../dbconfig');

allProducts = () => {
   return  db('products')
   .select('products.id', 'products.title', 'products.images', 'products.price', 'products.description', 'products.category_name', 'products.quantity', 'products.category_name', 'products.colors')
};

getProductsByCategory = async (category) => {
    try {
        const products = await db('products')
        .select('products.id', 'products.title', 'products.images', 'products.price', 'products.description', 'products.category_name', 'products.quantity', 'products.category_name', 'products.colors')
        .where({'products.category_name': category})
        return products
    } catch (error) {
        throw new Error(`Error from get products by id model, ${error}`)
    }
};

addProduct = (prod) => {
    return db('products').insert(prod)
};

productById = (id) => {
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