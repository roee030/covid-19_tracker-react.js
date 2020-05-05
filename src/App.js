import React from 'react';

import {Cards, Chart , CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api/';

class App extends React.Component {
    async componentDidMount (){
        const response = await fetchData()
        console.log(response);
        
        
    }
    render() {
        return (
            <div className={styles.container}>
                <Cards/>
                <CountryPicker/>
                <Chart/>
            </div>
        )
    }
}

export default App;