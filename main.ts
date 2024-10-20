<<<<<<< Tabnine <<<<<<<
import UserRepository from './UserRepository'; // Assuming UserRepository is defined in a separate file
>>>>>>> Tabnine >>>>>>>// {"conversationId":"c44aa9db-bd60-4baa-8dd7-997eaaed57a5","source":"instruct"}
function main() {
    const userRepo = new UserRepository("users.json");
    const userService = new UserService(userRepo);

    // Adding a new user
    userService.addNewUser("John Doe", "john.doe@example.com");
    console.log("User added");

    // Getting a user by ID
    const user = userService.getUserById(1);
    if (user) {
        console.log("User found:", user);
    } else {
        console.log("User not found");
    }
}

main();