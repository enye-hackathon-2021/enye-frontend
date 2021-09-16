import { combineReducers } from "redux";

import auth from './auth'
import toggles from "./toggles";
export const reducers = combineReducers({ auth, toggles });
