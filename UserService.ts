class UserService {
  private userRepo: IRepository;

  constructor(userRepo: IRepository) {
      this.userRepo = userRepo;
  }

  addNewUser(name: string, email: string): void {
      const newUser = new User(0, name, email); // ID will be set in repository
      this.userRepo.addUser(newUser);
  }
  
  getUserById(id: number): User | undefined {
      return this.userRepo.getUser(id);
  }
}