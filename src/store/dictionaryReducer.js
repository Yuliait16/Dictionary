export const SET_WORD = "SET_WORD";
export const SET_INFO = "SET_INFO";
export const DATA_CORRECT = "DATA_CORRECT";
export const DATA_ERROR = "DATA_ERROR";
export const FETCH_WORD_START = "FETCH_WORD_START";
export const FETCH_WORD_END = "FETCH_WORD_END";

export const setWord = payload => ({ type: SET_WORD, payload });
export const setInfo = payload => ({ type: SET_INFO, payload });
export const dataCorrect = () => ({ type: DATA_CORRECT });
export const dataError = () => ({ type: DATA_ERROR });
export const fetchWordStart = () => ({type: FETCH_WORD_START}); 
export const fetchWordEnd = () => ({type: FETCH_WORD_END});

const defState = {
    data: [],
    error: false,
    word: "",
    isLoading: false,
}

export default function reducer(state = defState, action) {
    switch (action.type) {
        case SET_WORD:
            return { ...state, word: action.payload };
        case SET_INFO:
            return { ...state, data: action.payload };
        case DATA_CORRECT:
            return {...state, error: false};
        case DATA_ERROR: 
            return {...state, error: true};
        case FETCH_WORD_START:
            return {...state, isLoading: true};
        case FETCH_WORD_END:
            return {...state, isLoading: false};

        default:
            return state;
    }
}