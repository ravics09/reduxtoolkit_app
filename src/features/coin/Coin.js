import {useSelector} from 'react-redux';
const Coin = () => {
  const count = useSelector((state)=>state.counter.count);
  return (
    <div style={{paddingTop: '200px'}}>
      <b><big className="value">Coins: {count}</big></b>
    </div>
  );
};

export default Coin;
