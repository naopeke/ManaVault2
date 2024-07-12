import { UserInterface } from '../interfaces/user.interface';

export interface AuthState {
    user: UserInterface | null;
    is_auth: boolean;
    loading: boolean;
  }