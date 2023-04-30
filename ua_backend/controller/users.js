const Users = require('./../model/users');

exports.getUsers = async (req, res) => {
    try{
        const usersData = await Users.allUsers();

        if(usersData.length === 0) {
            res.status(400).json({message: `You haven't added any users yet.`});
        } else {
            res.status(200).json({users: usersData});
        }
    } catch(error) {
        res.status(500).json({message: `No users found ${error}`});
    }
};

exports.addUser = async (req, res) => {
    try {
        const { email, first_name, last_name, firebase_id } = req.body.data

        console.log('NEW USER FIREBASE ID', firebase_id)
        if(!email || !first_name || !last_name || !firebase_id ) {
            res.status(400).json({message: `Please add all required fields`})
        } else {
            await Users.addUser({email, first_name, last_name, firebase_id });
            res.status(201).json({message: `User added`})
        }
        
    } catch(error) {
        if (error.code === '23505') {
            res.status(500).json({message: "That user already exists"});
    
        } else {
            res.status(500).json({message: `There was an error adding that user please try again ${error}`});
    
        }
    }
};

exports.getUser = async (req, res ) => {
    try {
        const { id } = req.params;
        console.log('UID from frontend ID', id)

        if (!id) {
            res.status(404).json({message: `There was an error please try again`}) 
        }
        const user = await Users.getUser(id);
        if (!user) {
            res.status(404).json({message: `User not found`})
        } else {
            console.log('USER CONTROLLER', user)
            res.status(200).json({user})
        }
    } catch (error) {
        res.status(500).json({message: `There was an error from get user, ${error.message}`})
    }
};

exports.addToCart = async (req, res) => {
    try {
        const { cart_id, product_id, quantity, color } = req.body;
        console.log('ADDED PRODUCT', cart_id, product_id, quantity, color)
        await Users.addToCart({cart_id, product_id, quantity, color});

        res.status(201).json({message: `Item added to cart`})
    } catch (error) {
        res.status(500).json({message: `Error from add to cart ${error}`})
    }
}