  class UserService {
    private userRepo: UserRepository ; 

    constructor(userRepo: IRepository) {
      this.userRepo = userRepo;
    }

    AddNewUser(name: string, email: string){
      const newUser = new users();
      newUser.Name = name;
      newUser.Email = email;
      this.userRepo.AddUser(newUser);
    }
    
    getUsersById(Id : number): User{
      return this.userRepo.GetUser(Id);
    }
  }