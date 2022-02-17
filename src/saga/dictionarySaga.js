import {put, takeEvery, call} from "redux-saga/effects"
import { setInfo, SET_WORD, fetchWordEnd, fetchWordStart} from "../store/dictionaryReducer";
import {word} from "../components/Home";


const fetchInfoFromApi = () => fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)

function* fetchDictionaryWorker() {
        yield put(fetchWordStart());
        const data = yield call(fetchInfoFromApi);
        const json = yield call(() => new Promise(res => res(data.json())))
        yield put(setInfo(json));
        yield put(fetchWordEnd());
        

}

export function* dictionaryWatcher() {
    yield takeEvery(SET_WORD, fetchDictionaryWorker)
}

