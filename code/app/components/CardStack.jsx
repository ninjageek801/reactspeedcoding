import React from 'react';

import Card from './Card.jsx';

import World from './World.jsx';
import YouTube from './YouTube.jsx';

export default class CardStack extends React.Component {
  render () {
    let messages = this.props.messages;
    let renderMessages = messages.map(message =>
        <Card key={message} message={message} />
      );

    return (
      <ul className="stack">
        <li key="world" className="card demo">
          <World />
        </li>
        <li key="youtube" className="card demo">
          <YouTube videoid="MGuKhcnrqGA" />
        </li>
        {renderMessages}
      </ul>
    );
  }
}

CardStack.propTypes = {
  messages: React.PropTypes.array.isRequired,
}

CardStack.defaultProps = {
  messages: [
    'React Speed UI',
    'Single Page Apps',
    'Responsive Design',
    'Customizable Theme',
    'Reusable Components',
    'Simple Structure',
    'Production Optimized',
    'State Machine',
    'Expressive Syntax'
  ],
}
