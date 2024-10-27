// Service.ts
import { UserRepository } from './UserRepository';
import { User } from './User';

export class UserService {
    private repository: UserRepository;

    constructor() {
        this.repository = new UserRepository();
    }

    // Adds a user if they do not already exist
    async addUser(id: number, name: string): Promise<void> {
        const existingUser = await this.repository.getUserById(id);

        if (existingUser == null) {
            await this.repository.addUser({ id, name, email: `${name}@example.com` });
            console.log(`User ${name} added.`);
        } else {
            console.log(`User ${name} already exists`);
        }
    }

    // Retrieves all users
    async getAllUsers(): Promise<User[]> {
        return await this.repository.getAllUsers();
    }

    // Retrieves a user by their ID
    async getUserById(id: number): Promise<User | null> {
        return await this.repository.getUserById(id);
    }
}
