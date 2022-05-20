import React, { useState } from 'react';
import Search from './qSearch.jsx';
import List from './qList.jsx';
import GetData from '/client/src/components/qComponents/Data.jsx'

// compile down to one div
// style big components
// function Question (props) {
//   const [data, setData] = useState([])

//   GetData({id: 37311})
//     .then(res => {
//       console.log(res.data.results);
//       setData(res.data.results);
//     })
//     .catch(err => {
//       console.log(err);
//     });
//   console.log(data);
//   return (
//     <div>
//       <Search />
//       <List data={data} />
//     </div>
//   );
// }
class Question extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      data: []
    }

    this.setData()
  }
  setData () {
    GetData({id: 37311})
    .then(res => {
      console.log(res.data.results);
      this.setState( { data: res.data.results } );
    })
    .catch(err => {
      console.log(err);
    });
  }

  render () {
    return (
          <div>
            <Search />
            <List data={this.state.data} />
          </div>
        );
  }
}

export default Question;
