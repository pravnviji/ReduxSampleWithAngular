import { createReducer, on } from "@ngrx/store";
import { AuthActions } from "../auth.types";
import { User } from "../model/user.model";

export const authFeatureKey = "auth";

export interface AuthState {
  user: User;
}

export const intialAuthState: AuthState = {
  user: undefined,
};

export const authReducer = createReducer(
  intialAuthState,
  on(AuthActions.login, (state, action) => {
    console.log("Enter the auth reducer");

    return {
      user: action.user,
    };
  }),
  on(AuthActions.logout, (state, action) => {
    console.log("Enter the auth reducer - logout");
    return {
      user: undefined,
    };
  })
);
