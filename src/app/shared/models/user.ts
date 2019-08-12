export class User { 
  readonly id: string;
  email: string;
  isNewUser: boolean;
  lastLoginDate: number;
  name: string;
  avatar: string;
  pomodoroDuration: number;
  registrationDate: number;
  roles: Array<'USER'|'EMPLOYEE'>;

  constructor(options: { 
    id?: string, 
    email?: string, 
    isNewUser?: boolean, 
    lastLoginDate?: number, 
    name?: string, 
    avatar?: string, 
    pomodoroDuration?: number, 
    registrationDate?: number, 
    roles?: Array<'USER'|'EMPLOYEE'> 
  } = {}) { 
    this.id = options.id || ''; 
    this.email = options.email || ''; 
    this.isNewUser= options.isNewUser || true; 
    this.lastLoginDate= options.lastLoginDate || 0;
    this.name= options.name || '';  
    this.avatar = options.avatar || ''; 
    this.pomodoroDuration = options.pomodoroDuration || 1500;
    this.registrationDate= options.registrationDate || 0;  
    this.roles = options.roles ||
    this.email.endsWith('google.com')?  
    ['USER', 'EMPLOYEE'] : ['USER'];
  } 
}