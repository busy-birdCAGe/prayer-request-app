export const userCollection = {
    name: "users",
    fields: {
        userName: "userName",
        userId: "userId"
    }
}

export const errorMessages = {
    auth: {
        emailExists: "Email address already in use",
        wrongPassword: "Wrong password",
        wrongEmail: "No user found with the specified email",
        any: "The authentication service encountered an error",
        noUser: "No user signed in",
        sendVerification: "Encountered an error when sending email verification",
        weakPassword: "Password must be greater than 6 characters"
    },
    database: {
        any: "Database encountered an error"
    }
}