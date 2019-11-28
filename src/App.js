import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      isLoaded: false,

    }
  }


  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {


        this.setState({
          isLoaded: true,
          items: json
        })
      });
  }


  render() {

    const { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading......</div>;
    }

    else {

      return (

        < div className="App" >

          <ul>
            {items.map(item => (
              <li key={item.id}>
                Names: {item.name} <br /> Emails: {item.email} <br /><br />
              </li>
            ))};
        </ul>

        </div>
      );
    }

  }

}


export default App;
