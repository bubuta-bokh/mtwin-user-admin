import {create} from 'zustand';
import {persist} from 'zustand/middleware';

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  isLoading: boolean;
  login: (token: string) => void;
  logout: () => void;
  checkAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist((set, get) => ({token: null, isAuthenticated: false, isLoading: true,
      login: (token: string) => {
        set({token, isAuthenticated: true});
      },
      logout: () => {
        set({token: null, isAuthenticated: false});
        },
        checkAuth: () => {
            const {token} = get();
            if(token && !isTokenExpired(token)) {
                set({isAuthenticated: true, isLoading: false});
            }
            else {
                set({token: null, isAuthenticated: false, isLoading: false});
                }
        },

    }), 
    {
        name: 'auth-storage',
        partialize: (state) => ({token: state.token})
    }
    )
);
    
function isTokenExpired(token: string): boolean {
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.exp * 1000 < Date.now();
    } catch (e) {
        return true;
    }
}