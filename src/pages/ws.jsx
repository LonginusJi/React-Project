import React from 'react';

import { Button } from 'react-bootstrap';
import Deck from '../deck';

function showPicture(card) {
  document.querySelector('.card-picture').src = `https://www.tcgtool.cn/static/img/ws/azl_s102_${card.id.toLowerCase()}.png`;
}

export default class Ws extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: Deck.Azl,
      tomb: [],
      bank: [],
      handCard: [],
    };

    this.draw = this.draw.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.trigger = this.trigger.bind(this);
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

  trigger() {
    const { deck, bank } = this.state;
    const judgeCard = deck.shift();
    showPicture(judgeCard);
    bank.push(judgeCard);
    this.setState({ deck, bank });
  }

  render() {
    const {
      deck,
      tomb,
      bank,
      handCard,
    } = this.state;
    // eslint-disable-next-line react/no-array-index-key
    const handCardContent = handCard.map((card) => {
      const url = `https://www.tcgtool.cn/static/img/ws/azl_s102_${card.id.toLowerCase()}.png`;
      return (
        <img
          className="card-content"
          key={Math.random()}
          src={url}
          alt=""
          onClick={() => showPicture(card)} />
      );
    });

    return (
      <div className="ws-container">
        <img className="card-picture" src="" alt="" />
        <span className="deck-remain">Deck: {deck.length}</span>
        <span className="tomb-remain">Tomb: {tomb.length}</span>
        <span className="bank-remain">Bank: {bank.length}</span>
        <Button className="draw" onClick={this.draw}>Draw</Button>
        <Button className="shuffle" onClick={this.shuffle}>Shuffle</Button>
        <Button className="trigger" onClick={this.trigger}>Trigger</Button>
        <div className="footer">
          <div className="hand-card-content">
            手札({handCardContent.length}):{handCardContent}
          </div>
        </div>
      </div>
    );
  }
}
