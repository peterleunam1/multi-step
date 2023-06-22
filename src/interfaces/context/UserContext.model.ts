export interface UserProps {
  name: string;
  email: string;
  phone: string;
}
export interface UserContextProviderProps {
  children: React.ReactNode;
}
export interface UserContextProps {
  user: UserProps;
  setUser: (value: UserProps) => void;
}
