export interface AuthInterface {
user: UserInterface,
}
export interface UserInterface {
  id: number;
  email: string;
  password: string;
}
