class APIError extends Error {
    constructor(
        statusCode, 
        messqge= "something went wrong",
        errors = [],
        stack = ""
    ){ 
        super(messqge)
        this.statusCode=statusCode
        this.data = null
        this.message = messqge
        this.success = false
        this.errors = errors

        if (stack) {
            this.stack = stack
        }
        else{
            Error.captureStackTrace(this, this.constructor)
        }

     }
}

export {APIError}