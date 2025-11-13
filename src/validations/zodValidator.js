
import { EventEmitter } from 'events';

EventEmitter.defaultMaxListeners = 20;

const zodValidate = (schema) => {
    // returns a middle ware
    return async (req, res, next) => {
        try {
            console.log("request body is :- ", req.body);
            schema.parse(req.body);
            next()
        }
        catch(error){
            return res.status(400).json({
                error: error.errors,
                success: false,
                message: "validation failed"
            })
        }
    }
}

export default zodValidate;