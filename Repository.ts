import { User } from './User';       // Importing the User Class

// Repository interface (define the contract for any class wants to implement a repository interface)
export interface UserRepository {
    /********************************************************
     * Function addUser 
     * Parameters:user : User object
     * Returns:Promise to be resolved and perform the operation asynchronously
     * Implemented in the userrepository class
    *******************************************************/
    addUser(user: User): Promise<void>; 


    /********************************************************
     * Function getAllUsers 
     * Parameters: Void 
     * Returns:This function returns a promise that resolves to an array of User objects.
     * Implemented in the userrepository class
     * Function gets all users in the repository from the users.json file
    *******************************************************/
    getAllUsers(): Promise<User[]>; // function gets all users in the repository from the users.json file

    
    /********************************************************
     * Function getUserById 
     * Parameters: id : of type number
     * Returns: This function returns a promise that resolves to a User object
     *           if a user with the given id is found, or null if no such user exists.
     * Function gets user by id from the users.json file
     * Implemented in the userrepository class
     * *******************************************************/
    getUserById(id: number): Promise<User | null>; 
}

