  class UserService {
    constructor(private readonly repository: IRepository) {}
  
    getAllUsers(): User[] {
      return this.repository.fetchUser();
    }
  
    createUser(user: User): void {
      // Validate user details here
      // ...
  
      this.repository.addUser(user);
    }
  }