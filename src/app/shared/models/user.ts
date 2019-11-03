export class User { 
  readonly id: string;
  username: string;

  constructor(id?: string, username?: string) { 
    this.id = id; 
    this.username = username; 
  } 

  public static fromJson(json: Object): User {
    return new User(
      json['id'],
      json['username']
    );
}
}