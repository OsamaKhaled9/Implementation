interface IRepository {
    AddUser(user: users): void;
    GetUser(Id: number):users;
}