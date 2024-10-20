function main() { 
    userRepo = new UserRepository("users.json");
    userService = new UserService(userRepo);

    UserService.AddNewUser(userRepo);
    console.log("User added");

    user = UserService.getUsersById(1)
    if (users.length > 0) {
        console.log("User found: ", user);
    }
    else {
        console.log("User not found");
    }
}