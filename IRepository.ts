interface IRepository {
    addUser(user: User): void;
    getUser(id: number): User | undefined;
}