'use client';

import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';

const socket = io('http://localhost:3000');

export default function ChatPage() {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    socket.on('message', (msg) => {
      setMessages((prev) => [...prev, msg]);
    });
  }, []);

  const sendMessage = (text) => {
    socket.emit('message', { content: text, sender: 'User' });
  };

  return (
    <div>
      {messages.map((m, i) => (
        <div key={i}>
          {m.sender}: {m.content}
        </div>
      ))}
      <button onClick={() => sendMessage('Hello!')}>Send</button>
    </div>
  );
}
