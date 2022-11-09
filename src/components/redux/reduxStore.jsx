import { applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk from "redux-thunk";
import reducerMessages from "./reducerMessages";
import reducerProfile from "./reducerProfile";
import reducerSidebar from "./reducerSidebar";
import reducerNavItem from "./reducerNavItem";
import reducerUsers from "./reducerUsers";
import reducerAuthoriz from "./reducerAuthoriz";


const reducers = combineReducers({
    messages: reducerMessages,
    profile: reducerProfile,
    sidebar: reducerSidebar,
    navItem: reducerNavItem,
    usersPage: reducerUsers,
    authoriz: reducerAuthoriz,
});

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;

