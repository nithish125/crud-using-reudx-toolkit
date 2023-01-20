import './App.css';
import Home from './home/Home';
import List from './home/List';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Edit from './home/Edit';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
function App() {
  const [states, setStates] = useState(true)
  console.log(states)
  // const state = useSelector((state) => state)
  // const isEdit=state.cart.isEdit
  //setStates(isEdit)
  return (
    <div >
      <Provider store={store}>
        <div className='row1 container'>
          <div className='col-61'><Home />
           
          </div>
          <div className='col-61'><List />
            </div>
        </div>
        <div className='col-6'><Edit /></div>
      </Provider>
    </div>
  );
}
export default App;
