import { createContext } from "react";

interface UserContextType {
  isLoggedIn: boolean;
  currentUser: { email: string } | null;
  removeUser: () => void;
}

const UserContext = createContext<UserContextType>({
  isLoggedIn: false,
  currentUser: null,
  removeUser: () => {},
});

export default UserContext;
