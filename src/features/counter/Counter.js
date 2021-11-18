import { useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "./counterSlice";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Counter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <hr />
      <Button
        aria-label="Increment value"
        onClick={() => {
          dispatch(increment());
        }}
        variant="success"
        className="mx-2"
      >
        Increase
      </Button>
      <Button
        className="button"
        aria-label="Decrement value"
        onClick={() => {
          dispatch(decrement());
        }}
        variant="danger"
        className="mx-2"
      >
        Decrease
      </Button>
      <Button
        className="button"
        aria-label="Decrement value"
        onClick={() => {
          dispatch(incrementByAmount(10));
        }}
        variant="success"
        className="mx-2"
      >
        IncrementBy 10
      </Button>
      <Button
        className="button"
        aria-label="Decrement value"
        onClick={() => {
          dispatch(decrementByAmount(10));
        }}
        variant="danger"
        className="mx-2"
      >
        DecrementBy 10
      </Button>
    </div>
  );
};
export default Counter;
