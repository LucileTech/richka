import { createContext } from "react";

interface UserContextType {
  isLoggedIn: boolean;
  currentUser: { email: string } | null;
  favorites: number[]; // Assuming favorites are stored as product IDs
  removeUser: () => void;
}

const UserContext = createContext<UserContextType>({
  isLoggedIn: false,
  currentUser: null,
  favorites: [],
  removeUser: () => {},
});

export default UserContext;
