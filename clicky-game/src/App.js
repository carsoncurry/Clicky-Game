import React, { Component } from "react";
import SpiderCard from "./Components/SpiderCard/index";
import Wrapper from "./Components/Wrapper/index";
import Title from "./Components/Title/index";
import Footer from "./Components/Footer/index";
import spiders from "./spiders.json";

class App extends Component {
  state = {
    spiders,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.spiders.forEach(spider => {
      spider.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.spiders.find((o, i) => {
      if (o.id === id) {
        if(spiders[i].count === 0) {
          spiders[i].count = spiders[i].count +1;
          this.setState({score : this.state.score + 1}, function() {
            console.log(this.state.score);
          });
          this.state.spiders.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  }

  render() {
    return (
      <Wrapper>
        <Title score={this.state.score} highscore={this.state.highscore}></Title>
          {this.state.spiders.map(spider => (
            <SpiderCard
              clickCount={this.clickCount}
              id={spider.id}
              key={spider.id}
              image={spider.image}
            />
          ))}
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
