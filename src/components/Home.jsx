import { useDispatch, useSelector } from "react-redux";
import { setWord } from "../store/dictionaryReducer";
import { NavLink } from "react-router-dom";

export let word;

const Home = () => {
    const dispatch = useDispatch()
    const value = useSelector(state => state.reducer.value);
    const wordStore = useSelector(state => state.reducer.word);
    /* удалить */
    const store = useSelector(state => state.reducer);
    
    function test(e) {
        e.preventDefault();
        word = document.querySelector(".home__input").value;
        dispatch(setWord(word));
    }

    return (
        <div className="home__wraper">
            <h1 className="home__title">Dictionary</h1>
            <div className="home__content">
                <input className="home__input" type="text" name="word" placeholder="Word to search" />
                <button className="home__button" onClick={(e) => {test(e)}}><NavLink to={`/result`}>Search</NavLink></button>
             </div>
        </div>
    )
};

export default Home;

