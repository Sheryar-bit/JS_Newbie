const asyncHandler = function(asyncHandler) {
    (req, res, next) => {
        Promise.resolve(asyncHandler).catch(function(err){
            next(err)
        })
    }
}

export {asyncHandler}

/*
BDLOW IS THE EXPLAINATION OF THE CODE FROM LINE 13:
const aynchandler = () => {}
const aynchandler = (func) => () => {}
const aynchandler = (func) => async() => {}
*/

//Another Way
// const asyncHandler = () => async(req, res, next) => {
//     try {
//         await fn(req, res, next)
//     }  catch(error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }


