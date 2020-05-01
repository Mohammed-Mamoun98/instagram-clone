export interface User {
  email: string;
  fullName: string;
  userName: string;
}
export interface Credintials extends User {
  password: string;
}
