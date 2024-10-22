import { promises as fs } from 'fs';  // File system operations with promises
import { User } from './User';       // Importing the User entity
import * as path from 'path';

// Repository interface (define the contract for operations)
export interface UserRepository {
    addUser(user: User): Promise<void>;
    getAllUsers(): Promise<User[]>;
    getUserById(id: number): Promise<User | null>;
}

