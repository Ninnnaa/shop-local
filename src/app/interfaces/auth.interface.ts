export interface AuthInterface {
user: UserInterface,
}
export interface UserInterface {
  id: number;
  name: string;
  lastName: string;
  email: string;
  password: string;
  location: string;
  brand: string;
  telephone: string;
  address: string;
}
