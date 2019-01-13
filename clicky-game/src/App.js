import React, { Component } from 'react';
import SpiderCard from './Components/SpiderCard/SpiderCard';
import Wrapper from './Components/Wrapper/Wrapper';
import Title from './Components/Title/Title';
import spiders from './spiders.json';

class App extends Component {
  // Set this.state.spiders to the spiders json array
  state = {
    spiders
  };

  removeSpider = id => {
    const spiders = this.state.spiders.filter(spider => spider.id !== id);
    this.setState({ spiders });
  };

  render() {
    return (
      <Wrapper>
        <Title>Welcome to the Spider-Verse!</Title>
        {this.state.spiders.map(spiders => (
          <SpiderCard
            id={spider.id}
            key={spider.id}
            name={spider.id}
            image={spider.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
