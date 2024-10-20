interface IRepository {
    //fetchUser(): string[];
    //addUser(user: string):void;
    fetchUsers(): User[];
    addUser(user: User): void;
}