import { useDispatch, useSelector } from "react-redux";
import { dataCorrect, dataError } from "../store/dictionaryReducer";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

const Result = () => {
    const dispatch = useDispatch()

    const word = useSelector(state => state.reducer.word);
    const data = useSelector(state => state.reducer.data);
    const err = useSelector(state => state.reducer.error);
    const isLoading = useSelector(state => state.reducer.isLoading);
    console.log(data);

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
                                <button onClick={() => { playAudio();}}><VolumeUpIcon/> Play sound</button>
                            </div>
                            <div className="result__content">
                                    <div className="result__data">
                                        <p className="result__item">Word: <span>{data[0].word}</span></p>
                                        <p className="result__item">Phonetic: <span>{data[0].phonetic}</span></p>
                                        <p className="result__item">Origin: <span>{data[0].origin}</span></p>
                                    </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                             <div class="error">
                                <div class="container-floud">
                                    <div class="col-xs-12 ground-color text-center">
                                        <div class="container-error-404">
                                        <div class="clip"><div class="shadow"><span class="digit thirdDigit">4</span></div></div>
                                        <div class="clip"><div class="shadow"><span class="digit secondDigit">0</span></div></div>
                                        <div class="clip"><div class="shadow"><span class="digit firstDigit">4</span></div></div>
                                    <div class="msg">OH!<span class="triangle"></span></div>
                                </div>
                                <h2 class="h1">Sorry! Word is not found</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            }
        </div>
    )
};

export default Result;


