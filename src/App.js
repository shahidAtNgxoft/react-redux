import './App.css';
import {Provider} from "react-redux";
import store from './redux/store'
import BagContainer from './components/BagContainer'
import BookContainer from './components/BookContainer'
import HookBookContainer from './components/HookBookContainer'
function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <BookContainer/>
     <HookBookContainer/> 
     <BagContainer/>
    </div>
    </Provider>
  );
}

export default App;
