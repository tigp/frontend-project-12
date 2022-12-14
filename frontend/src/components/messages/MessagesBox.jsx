import React from 'react';
import { useSelector } from 'react-redux';

const MessagesBox = () => {
  const { messages } = useSelector((state) => state.messagesStore);
  const { currentChannelId } = useSelector((state) => state.channelsStore);
  return (
    <div id="messages-box" className="chat-messages overflow-auto px-5 ">
      {messages.length > 0 && messages
        .filter(({ channelId }) => channelId === currentChannelId)
        .map(({ name, text, id }) => (
          <div key={id} className="text-break mb-2">
            <b>{`${name}: `}</b>
            {text}
          </div>
        ))}
    </div>
  );
};

export default MessagesBox;
