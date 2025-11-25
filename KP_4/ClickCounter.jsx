import React, { useState } from 'react';

function ClickCounter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      background: 'linear-gradient(135deg, #a8e6a1, #4caf50)',
      color: '#fff',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0,
    }}>
      <h1 style={{ textShadow: '1px 1px 3px #2f6627' }}>Счетчик нажатий</h1>
      <div style={{
        fontSize: '4rem',
        fontWeight: '700',
        marginBottom: '30px',
        textShadow: '1px 1px 4px #265214',
      }}>{count}</div>
      <div>
        <button
          onClick={() => setCount(count - 1)}
          style={{
            backgroundColor: '#388e3c',
            border: 'none',
            borderRadius: '8px',
            boxShadow: '0 5px #2e7d32',
            color: 'white',
            cursor: 'pointer',
            fontSize: '1.5rem',
            padding: '15px 30px',
            marginRight: '20px',
            transition: 'background-color 0.3s ease, transform 0.1s ease'
          }}
          onMouseDown={e => e.currentTarget.style.transform = 'translateY(3px)'}
          onMouseUp={e => e.currentTarget.style.transform = 'translateY(0)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
        >-</button>
        <button
          onClick={() => setCount(count + 1)}
          style={{
            backgroundColor: '#388e3c',
            border: 'none',
            borderRadius: '8px',
            boxShadow: '0 5px #2e7d32',
            color: 'white',
            cursor: 'pointer',
            fontSize: '1.5rem',
            padding: '15px 30px',
            transition: 'background-color 0.3s ease, transform 0.1s ease'
          }}
          onMouseDown={e => e.currentTarget.style.transform = 'translateY(3px)'}
          onMouseUp={e => e.currentTarget.style.transform = 'translateY(0)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
        >+</button>
      </div>
    </div>
  );
}

export default ClickCounter;
