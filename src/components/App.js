// App.js
import React from 'react';
import Tooltip from './Tooltip';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>React Tooltip Example</h1>
      <div>
        <Tooltip text="This is a tooltip for Text 1">
          <span>Hover over me for Tooltip 1</span>
        </Tooltip>
      </div>
      <div>
        <Tooltip text="This is a tooltip for Text 2">
          <button>Hover over me for Tooltip 2</button>
        </Tooltip>
      </div>
      <div>
        <Tooltip text="This is a tooltip for Text 3">
          <div style={{ display: 'inline-block', padding: '10px', background: 'lightgray' }}>
            Hover over me for Tooltip 3
          </div>
        </Tooltip>
      </div>
    </div>
  );
}

export default App;
