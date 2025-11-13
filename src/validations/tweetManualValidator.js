
export const createTweetManualValidator = (req, res, next) => {
    if(!req.body.tweet){
        return res.status(404).json({
            error: "Tweet is requires"
        })
    }
    next();
}