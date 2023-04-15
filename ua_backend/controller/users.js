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

// exports.getUsers = async(req, res) => {
//     try {
//         const users = await Users.allUsers();
//         console.log("users", users)
//         if(users.length === 0) {
//             res.status(400).json({message: `You haven't added any users yet`});
//         } else {
//             res.status(200).json({users: users})
//         }
//     } catch (error) {
//         res.status(500).json({message: `No users found ${error}`})
//     }
// };

exports.addUser = async (req, res) => {
    try {
        const { email, first_name, last_name } = req.body

        if(!email || !first_name || !last_name ) {
            res.status(400).json({message: `Please add all required fields`})
        } else {
            await Users.addUser({email, first_name, last_name });
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

        if (!id) {
            res.status(404).json({message: `There was an error please try again`}) 
        }
        const user = await Users.getUser(id);
        if (!user) {
            res.status(404).json({message: `User not found`})
        } else {
            res.status(200).json({user: user})
        }
    } catch (error) {
        res.status(500).json({message: `There was an error from get user, ${error}`})
    }
};

exports.addToCart = async (req, res) => {
    try {
        const { cart_id, product_id, quantity, color } = req.body;

        await Users.addToCart({cart_id, product_id, quantity, color});

        res.status(201).json({message: `Item added to cart`})
    } catch (error) {
        res.status(500).json({message: `Error from add to cart ${error}`})
    }
}