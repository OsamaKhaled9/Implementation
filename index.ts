// index.ts
import { UserService } from './Service';

(async () => {
    const userService = new UserService();
    const userId = 5;
    const userName = 'Yahya_Gad';

    // Add a user if they do not already exist
    await userService.addUser(userId, userName);

    // Retrieve all users
    const users = await userService.getAllUsers();
    console.log("All users:", users);

    // Retrieve a specific user by ID
    const user = await userService.getUserById(userId);
    console.log("User with ID", userId, user);
})();
