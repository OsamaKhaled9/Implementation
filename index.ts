import { UserRepository } from './UserRepository';
import { User } from './User';

(async () => {
    let id = 2;
    let username = 'Hamada';
    const repository = new UserRepository();

    await repository.addUser({ id, name: username, email: `${username}@example.com` });

    // Retrieve all users
    const users = await repository.getAllUsers();
    console.log("All users:", users);

    // Retrieve a user by ID
    const user = await repository.getUserById(id);
    console.log("User with ID", id, user);
})();
