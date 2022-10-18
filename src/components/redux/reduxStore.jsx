import { combineReducers, legacy_createStore as createStore} from "redux";
import reducerMessages from "./reducerMessages";
import reducerProfile from "./reducerProfile";
import reducerSidebar from "./reducerSidebar";
import reducerNavItem from "./reducerNavItem";

const reducers = combineReducers({
    messages: reducerMessages,
    profile: reducerProfile,
    sidebar: reducerSidebar,
    navItem: reducerNavItem
});

const store = createStore(reducers);

export default store;

