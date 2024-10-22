import { UserRepository } from './UserRepository';
(async () => {
    let id = 5;
    let username = 'Yahya_Gad';
    const repository = new UserRepository();

    // Await the result of getUserById to check if the user already exists
    const existingUser = await repository.getUserById(id);

    if (existingUser == null) { // If no user with the given ID exists
        await repository.addUser({ id, name: username, email: `${username}@example.com` });
        console.log(`User ${username} added.`);
    } else {
        console.log(`User ${username} already exists`);
    }

    // Retrieve all users
    const users = await repository.getAllUsers();
    console.log("All users:", users);

    // Retrieve a user by ID
    const user = await repository.getUserById(id);
    console.log("User with ID", id, user);
})();
