import React, { Component } from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api'

export class App extends Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData })    
  }

  handlerCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country })
    console.log(this.state);
  }

  render() {

    const { data, country } = this.state

    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handlerCountryChange={this.handlerCountryChange} />
        <Chart data ={data} country = {country} />
      </div>
    )
  }
}

export default App
