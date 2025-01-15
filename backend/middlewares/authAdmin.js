import jwt from 'jsonwebtoken'

const authAdmin = async (req, res, next) => {
    try {
        const { atoken } = req.headers
        if (!atoken) {  //checking for the token presence
            return res.json({ success: false, message: 'Not authorized' })
        }
        //If token is present then we will decode it
        const token_decode = jwt.verify(atoken, process.env.JWT_SECRET)
        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({ success: false, message: 'Not authorized login again' })
        }

        next() //If decoded token is equal to email+password then we will call next()

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export default authAdmin