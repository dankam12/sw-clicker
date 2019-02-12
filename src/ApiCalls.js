import React, { Component } from "react";



class Background extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://swapi.co/api/planets/")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.results
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
    console.log(items)
      return (
       <div className="container" >
        {items.map(item => (
       <div className="col-sm-2 well side-menu side-menu-left order-left">
         <button className="btn btn-primary" key={item.name}>{item.name}</button>
       </div>

      
          ))}
        </div>
      );
    }
  }
}

export default Background;
