import { promises as fs } from 'fs';  // File system operations with promises
import { User } from './User';       // Importing the User entity
import * as path from 'path';

// Repository interface (define the contract for operations)
export interface UserRepository {
    addUser(user: User): Promise<void>;
    getAllUsers(): Promise<User[]>;
    getUserById(id: number): Promise<User | null>;
}

// Implementation of the repository
export class UserRepository implements UserRepository {
    private filePath: string;

    constructor() {
        // Path to the users.json file
        this.filePath ='users.json';
    }

    // Helper method to read data from the file. Reads the JSON file and parses it as an array of User objects.
    private async readFromFile(): Promise<User[]> {
        const data = await fs.readFile(this.filePath, 'utf-8');
        return JSON.parse(data);
    }

    // Helper method to write data to the file. Writes a list of User objects back to the JSON file.
    private async writeToFile(users: User[]): Promise<void> {
        await fs.writeFile(this.filePath, JSON.stringify(users, null, 2), 'utf-8');
    }

    // Add a new user to the JSON file
    async addUser(user: User): Promise<void> {
        const users = await this.readFromFile(); // Read current users
        users.push(user);                        // Add the new user
        await this.writeToFile(users);           // Save updated users
    }

    // Retrieve all users from the JSON file
    async getAllUsers(): Promise<User[]> {
        return await this.readFromFile();
    }

    // Retrieve a user by ID
    async getUserById(id: number): Promise<User | null> {
        const users = await this.readFromFile();
        return users.find(user => user.id === id) || null;
    }
}
