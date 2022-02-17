import { useDispatch, useSelector } from "react-redux";
import { dataCorrect, dataError } from "../store/dictionaryReducer";




const Result = () => {
    const dispatch = useDispatch()

    const word = useSelector(state => state.reducer.word);
    const data = useSelector(state => state.reducer.data);
    const err = useSelector(state => state.reducer.error);
    const isLoading = useSelector(state => state.reducer.isLoading);

    function playAudio() {
        let audio = new Audio(data[0].phonetics[0].audio);
        audio.play();
    }

    if (!data.title) {
        dispatch(dataCorrect());
    } else {
        dispatch(dataError());
    }
    console.log(`error: `, err);

    return (
        <div className="result__wraper">

            {isLoading && 
            <div>
                <button class="btn">
                    <span class="spinner"></span>
                    <span class="btn__text">loading...</span>
                </button>
            </div>
            }

            {!isLoading &&
                <div>
                    {(!err) ? (
                        <div className="result__body">
                            <div className="result__header">
                                <div className="result__request">Search Result -{word}</div>
                                <button onClick={() => { playAudio();}}>Play sound</button>
                            </div>
                            <div className="result__content">
                                {data.map(data =>
                                    <div className="result__data">
                                        <p className="result__item">Word: <span>{data.word}</span></p>
                                        <p className="result__item">Phonetic: <span>{data.phonetic}</span></p>
                                        <p className="result__item">Origin: <span>{data.origin}</span></p>
                                        <p className="result__item">Origin: <span>{data.origin}</span></p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div>ERROR</div>
                    )}
                </div>
            }
        </div>
    )
};

export default Result;


