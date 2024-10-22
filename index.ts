import { JsonUserRepository } from './Repository';
import { User } from './User';

(async () => {
    const repository = new JsonUserRepository();

    // Adding some users
    const user1: User = { id: 1, name: "Alice", email: "alice@example.com" };
    const user2: User = { id: 2, name: "Bob", email: "bob@example.com" };

    await repository.addUser(user1);
    await repository.addUser(user2);

    // Retrieve all users
    const users = await repository.getAllUsers();
    console.log("All users:", users);

    // Retrieve a user by ID
    const user = await repository.getUserById(1);
    console.log("User with ID 1:", user);
})();
