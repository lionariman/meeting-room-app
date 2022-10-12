import { combineReducers, createStore } from "redux";
import buildsReducer from "./buildsReducer";
import floorReducer from "./floorReducer";
import roomReducer from "./roomReducer";


let reducers = combineReducers({
    builds: buildsReducer,
    floor: floorReducer,
    room: roomReducer
});

let store = createStore(reducers);

window.store = store; // check store in console

export default store;