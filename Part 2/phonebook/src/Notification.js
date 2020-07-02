import React from 'react';
import './Notification.css';

export default function Notification({ message, error }) {
  if (message === null) {
    return null;
  }

  return <div className={error ? 'error' : 'success'}>{message}</div>;
}
