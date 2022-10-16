import * as React from'react';
import RApp from './components/recordInput';
import store from './redux/store';
import { Provider } from 'react-redux';

const App = ()=>{
    return(
        <Provider store={store}>  
            <RApp/>
        </Provider>
    )
}

export default App;