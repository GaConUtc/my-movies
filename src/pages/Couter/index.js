import { useDispatch, useSelector } from 'react-redux';
import { counterAction, selectorCounter } from './counterSlice';
function Couter() {
    const count = useSelector(selectorCounter);
    const dispatch = useDispatch();

    const increment = counterAction.increment;
    const decrement = counterAction.decrement;

    return (
        <div>
            <div>
                <button aria-label="Increment value" onClick={() => dispatch(increment())}>
                    Increment
                </button>
                <span>{count}</span>
                <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
                    Decrement
                </button>
            </div>
        </div>
    );
}

export default Couter;
