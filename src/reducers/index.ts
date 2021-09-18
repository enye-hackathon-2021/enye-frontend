import { combineReducers } from "redux";

import auth from './auth'
import toggles from "./toggles";
import wallet from "./wallet"
export const reducers = combineReducers({ auth, toggles, wallet });
