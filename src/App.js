const App = () => {
  return (
    <div className="App">
      <section className="side-bar">
        <button>➕ New Chat</button>
        <ul className="history">
          <li>Some CHat</li>
          <li>Some CHat</li>
          <li>Some CHat</li>
        </ul>
        <nav>
          <p>Made with ☕ by Agisna</p>
        </nav>
      </section>
      
      <section className="main">
        <h1>👨🏽‍🚀AgisGPT</h1>
        <ul className="feed"></ul>

        <div className="bottom-section">
          <div className="input-container">
            <input/>
            <div id="submit">🚀</div>
          </div>
          <p className="info">Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT September 25 Version</p>
        </div>
      </section>
    </div>
  );
}

export default App;
