import { Component } from 'react';
import './card-list.styles.css';
import Card from '../card/card.component';

class CardList extends Component {
  render() {
    return (
      <div className='card-list'>
        {this.props.monsters.map((monster) => (
          <Card key={monster.id} data={monster} />
        ))}
      </div>
    );
  }
}

export default CardList;
