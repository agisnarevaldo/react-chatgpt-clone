const App = () => {

  const getMessages = async () => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        message: 'Hello how are you?'
      }),
      headers: {
        'Content-Type': 'aplication/json'
      }
    }
    try {
      const response = await fetch('http://localhost:3000/completions', options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  
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
            <div id="submit" onClick={getMessages}>🚀</div>
          </div>
          <p className="info">Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT September 25 Version</p>
        </div>
      </section>
    </div>
  );
}

export default App;
