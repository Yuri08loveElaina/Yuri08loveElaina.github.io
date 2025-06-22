// src/context/RealtimeContext.js
import React, { createContext, useEffect, useState, useRef } from 'react';

export const RealtimeContext = createContext();

export function RealtimeProvider({ children }) {
  const [stats, setStats] = useState({
    totalMembers: 38,
    totalWriteups: 75,
    totalBlogs: 29,
    todayActivities: 10,
  });

  const [activities, setActivities] = useState([]);

  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket('ws://localhost:8080');

    ws.current.onopen = () => {
      console.log('WebSocket connected');
    };

    ws.current.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data);
        if (message.type === 'stats') {
          setStats(message.data);
        } else if (message.type === 'activity') {
          setActivities((prev) => [message.data, ...prev].slice(0, 20));
        }
      } catch (err) {
        console.error('Failed to parse message', err);
      }
    };

    ws.current.onclose = () => {
      console.log('WebSocket disconnected');
    };

    return () => {
      ws.current.close();
    };
  }, []);

  return (
    <RealtimeContext.Provider value={{ stats, activities }}>
      {children}
    </RealtimeContext.Provider>
  );
}
