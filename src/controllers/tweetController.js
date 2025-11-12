
export const tweetController = (req, res) => {
    return res.json({
        controllerLayer: 'come t controller page layer....'
    })
}

export const tweetControllerID = (req,res) => {
    return res.json({
        message: `fetching tweet with id from version2`,
        id: req.params.id
    })
}

export const createTweet = (req, res) => {
    return res.json({
        create:'creating route from createRoute'
    })
}