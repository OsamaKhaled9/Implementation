class UserRepository implements IRepository {
    private path: string;
    constructor(path: string) {
        this.path = path;
    }
    GetUser(Id: number): users {
        user = this.ReadUsersFromFile();
        return users.Find(user => user.Id == Id);
    }
    AddUser(user: User): void {
        users = ReadUsersFromFile();
        user.Id = GenerateNewUserId();
        users.Add(user);
        WriteUsersToFile(users);
    }
    private ReadUsersFromFile(): User[] {
        jsonString = ReadAllText(this.path);
        return DeserializeJSON(jsonString);
    }
    private WriteUsersToFile(users: User[]): void {
        jsonString = SerializeJSON(users);
        WriteAllText(this.path, jsonString);
    }
    private GenerateNewUserId(): string {
        if(users.Length == 0) return 1 ;
        else return users.Max(user -> users.Id)+1;
    }

}
