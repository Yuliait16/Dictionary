import {all} from "redux-saga/effects"
import {dictionaryWatcher} from "./dictionarySaga";

export function* rootWatcher() {
    yield all([dictionaryWatcher()])
}

