import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import './App.css';

const options = {
  series: [
    {
      name: 'Profit',
      data: [100, 200, 30, 100, 30, 50, 100]
    }
  ]
};



class App extends Component {
  render() {
    return (
      <div className="App">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
  }
}


export default App;
