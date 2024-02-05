class AppError extends Error {
    statuscode: number;
    
    constructor(statuscode: number = 400, message: string) {
        super()
        this.statuscode = statuscode;
        this.message= message;
    }
}

export { AppError };