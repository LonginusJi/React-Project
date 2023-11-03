import React from 'react';

import { Button, Form, FormControl } from 'react-bootstrap';
import Deck from '../deck';

export default class Ws extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: Deck.Azl,
      handCard: [],
    };

    this.draw = this.draw.bind(this);
    this.shuffle = this.shuffle.bind(this);
  }

  draw() {
    const { deck, handCard } = this.state;
    if (deck.length === 50) {
      this.shuffle();
    }
    handCard.push(deck.shift());
    this.setState({ deck, handCard });
  }

  shuffle() {
    const { deck } = this.state;
    // eslint-disable-next-line no-unused-vars
    deck.sort((a, b) => Math.random() - 0.5);
    this.setState({ deck });
  }

  render() {
    const { deck, handCard } = this.state;
    const handCardContent = handCard.map((card, index) => <span className="card-content" key={index}>{card}</span>);

    return (
      <div className="ws-container">
        <span className="deck-remain">Deck: {deck.length}</span>
        <Button className="draw" onClick={this.draw}>Draw</Button>
        <Button className="shuffle" onClick={this.shuffle}>Shuffle</Button>
        <div className="footer">
          <div className="hand-card-content">
            手札({handCardContent.length}):{handCardContent}
          </div>
        </div>
      </div>
    );
  }
}
