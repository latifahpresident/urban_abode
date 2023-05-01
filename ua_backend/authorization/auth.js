const admin = require('firebase-admin')
admin.initializeApp({
    projectId: process.env.GOOGLE_PROJECT_ID
})


const auth  = async (req, res, next) => {
    const idToken = req.headers.authorization

    try {

        if(idToken) {
            const decodedToken = await admin.auth().verifyIdToken(idToken);
            if(decodedToken) 
            req.params.id = decodedToken.uid
            return next()
        } 
    } catch (error) {
        res.status(403).send("Unauthorized");
        throw new Error(`Error authenticating, ${error}`)
    }   
}

module.exports = {
    auth,
};
