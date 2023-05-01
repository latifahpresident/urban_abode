const db = require('./../../dbconfig');

allUsers = async () => {
    try {
        const result = await db('users')
        .select('users.uuid', 'users.email', 'users.first_name', 'users.last_name', 'users.cart_id', 'users.firebase_id');
        return result

    } catch (error){
       throw new Error(`Error getting users from model ${error}`)
    }
};

addUser = async (user) => { 
    try {
        await db('users').insert(user);
        const newly_created_user = await db('users').where({'users.email': user.email}).first();
        if(!newly_created_user) {
            throw new Error(`There was an error creating the new user.`);
        } else {
            const cart = await db('cart').insert({'user_uuid': newly_created_user.uuid});
            if(cart) {
                const getCart = await db('cart').where({'cart.user_uuid': newly_created_user.uuid}).first();
                await db('users')
                    .where({'users.uuid' : newly_created_user.uuid})
                    .update({'cart_id': getCart.id});
                const result = db('users')
                    .innerJoin('cart', 'cart.user_uuid', 'users.uuid')
                    .innerJoin('cart_item', 'cart_item.cart_id', 'cart.id')
                    .select('users.uuid', 'users.email', 'users.first_name', 'users.last_name');
                return result
            }
        }
    } catch (error) {
        throw new Error(`Error from add new user model: ${error}`)
    }
};

getCartItems = async (cart_id) => {
    const cartItems = await db('cart_item')
    .select(
        'cart_item.id',
        'cart_item.cart_id',  
        'cart_item.product_id',
        'cart_item.quantity',
        'products.title',
        'products.price',
        'products.images',
        'cart_item.color'
    )
    .innerJoin('cart', 'cart_item.cart_id', 'cart.id')
    .innerJoin('products', 'cart_item.product_id', 'products.id')
    .where({'cart_item.cart_id': cart_id});
    return cartItems
};

getUser = async (uuid) => {
    try {
        const user = await db('users').where({'users.firebase_id': uuid}).first()
        if(!user) {
           throw new Error(`There was an error getting that user`)
        } else {
            const cartDetails = await db('cart').where({'cart.id': user.cart_id});
            const cartItems = await getCartItems(user.cart_id);
            return [
                user,
               {
                cart: {
                    cartDetails,
                    cartItems
                },
                
               }
            ]
        }
    } catch (error) {
        throw new Error(`Error from get user model, ${error.message}`)
    }
};

const calculateTotals = (cartItems) => {
    let totalQuantity = 0
    let total = 0
    cartItems.forEach(element => {
      totalQuantity += element.quantity
      total += element.quantity * element.price
    })
  
    return { totalQuantity, total }
  };

addToCart = async (item) => {
    
    try {
        //get the users cart_items by the item.cart_id
        //use arr.find to see if the item.name is present
        //if no existing item then add to the db
        //else update the existing items 
        const cartItems = await getCartItems(item.cart_id);
        const existingItem = cartItems.find(cartItem => cartItem.product_id === item.product_id);
        if(!existingItem) {
            await db('cart_item').insert(item);
        } else {
            await db('cart_item').where({'cart_item.id': existingItem.id}).update({quantity: existingItem.quantity + item.quantity})
        }
      
        const totals = calculateTotals(cartItems);
        const updateCart = await db('cart').where({'cart.id': item.cart_id}).update({quantity: totals.totalQuantity, total: totals.total});
        return updateCart
    } catch (error) {
        throw new Error(`Error from add to cart model ${error}`)
    }
};


module.exports = {
    allUsers,
    addUser,
    getUser,
    addToCart,
    getCartItems
};

// //User = {
//     email: 'sanji11@email.com',
//     first_name: 'Sanji11',
//     last_name: 'Vinsmoke11',
//     address: null,
//     city: null,
//     state: null,
//     zip: null,
//     phone: null,
//     uuid: '7ff99b56-1a76-4349-8d58-a558a5115586',
//     cart_id: 21,
//     cart[]
// }