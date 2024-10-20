import * as fs from 'fs';

class UserRepository implements IRepository {
    private path: string;

    constructor(path: string) {
        this.path = path;
    }

    getUser(id: number): User | undefined {
        const users = this.readUsersFromFile();
        return users.find(user => user.id === id);
    }

    addUser(user: User): void {
        const users = this.readUsersFromFile();
        user.id = this.generateNewUserId(users);
        users.push(user);
        this.writeUsersToFile(users);
    }

    private readUsersFromFile(): User[] {
        const jsonString = fs.readFileSync(this.path, 'utf-8');
        return JSON.parse(jsonString);
    }

    private writeUsersToFile(users: User[]): void {
        const jsonString = JSON.stringify(users, null, 2);
        fs.writeFileSync(this.path, jsonString);
    }

    private generateNewUserId(users: User[]): number {
        if (users.length === 0) return 1;
        return Math.max(...users.map(user => user.id)) + 1;
    }
}
