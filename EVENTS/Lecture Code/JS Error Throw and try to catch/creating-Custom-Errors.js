class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

// Example function that throws a CustomError
function checkPositiveNumber(num) {
    if (num <= 0) {
        throw new CustomError("Number must be positive.");
    }
    return "Valid number: " + num;
}

try {
    console.log(checkPositiveNumber(-5)); // This will throw an error
} catch (error) {
    console.log(error.name + ": " + error.message); // CustomError: Number must be positive.
} finally {
    console.log("Error handling completed.");
}
