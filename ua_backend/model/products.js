const db = require('./../../dbconfig');

const product = db('products')
allProducts = () => {
    
   return  product.select('products.id', 'products.title', 'products.images', 'products.price', 'products.description', 'products.category_name', 'products.quantity', 'products.category_name', 'products.colors')
};

getProductsByCategory = (category) => {
    console.log("Category from model:", category)
    let products = product
    .select('products.id', 'products.title', 'products.images', 'products.price', 'products.description', 'products.category_name', 'products.quantity', 'products.category_name', 'products.colors')
    .where({'products.category_name': category})

    console.log('PRODUCTS FROM MODEL', products)
    return products
};

addProduct = (prod) => {
    return product.insert(prod)
};

module.exports = {
    allProducts,
    getProductsByCategory,
    addProduct,
}