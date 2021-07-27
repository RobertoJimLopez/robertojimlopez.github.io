import './App.css';
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    document.title = "Test"
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="main">
          <div className="presentation">
            <div className="name">
              Roberto Jiménez
            </div>
            <div className="subtitle">
              Main Page
            </div>
            <div className="letter">
              <p class="greetings">Greetings,</p>
              <p>I'm still working on this site.</p>
              <p>This site will be an index for my projects in GitHub.</p>
              <p>You can access my resume I made in Angular <a href="https://robertojimlopez.github.io/angular-resume/">right here.</a> Or you can copy/paste the link:</p>
              <p class="Notice">https://robertojimlopez.github.io/angular-resume/</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
