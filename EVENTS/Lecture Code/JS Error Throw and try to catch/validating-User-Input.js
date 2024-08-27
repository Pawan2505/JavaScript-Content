function validateAge(age) {
    if (isNaN(age) || age < 0 || age > 120) {
        throw new Error("Invalid age value");
    }
    return true;
}

try {
    validateAge(-5);
} catch (error) {
    console.log("Error: " + error.message);
}
