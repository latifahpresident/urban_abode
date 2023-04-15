const Products = require('./../model/products');

exports.getProducts = async (req, res) => {
    try{
        const productsData = await Products.allProducts();

        if(productsData.length === 0) {
            res.status(400).json({message: `You haven't added any products yet.`});
        } else {
            res.status(200).json({products: productsData});
        }
    } catch(error) {
        res.status(500).json({message: `No products found ${error}`});
    }
};

exports.getProductsByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        console.log('CATEGORY'), category
        if (category === 'all') {
            const productsData = await Products.allProducts();
            res.status(200).json({products: productsData} )
            res.end()
        } else {

            const productsData = await Products.getProductsByCategory(category);
            if(!productsData || productsData.length === 0) {
                res.status(400).json({message: `No products found.`})
            } else {
                res.status(200).json({products: productsData})
                res.end()
            }
       }

    } catch(error) {
        res.status(500).json({message: `There was an error retrieving the products from that category ${error.message}`})
    }
};

exports.addProduct = async (req, res) => {
    try {
        const { title, price, description, images, quantity, colors, category_name } = req.body

        if(!title || !price || !description || !images || !quantity || !colors || !category_name) {
            res.status(400).json({message: `Please add all required fields`})
        } else {
            await Products.addProduct({title, price, description, images, quantity, colors, category_name});
            res.status(201).json({message: `Product added`})
        }
        
    } catch(error) {
        if (error.code === '23505') {
            res.status(500).json({message: "That product already exists"});
    
        } else {
            res.status(500).json({message: `There was an error adding that product please try again ${error}`});
    
        }
    }
};

exports.getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Products.productById(id)
        if(!product) {
            res.status(404).json({message: `We couldn't find that product`});
        } else {
            res.status(200).json({product: product});
        } 
    } catch (error) {
        res.status(500).json({message: `There was an error retrieving that product ${error}`})
    }
};