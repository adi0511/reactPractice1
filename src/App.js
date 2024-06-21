import React from 'react';
import './style.css';

function Header() {
  return (
    <div>
      <div>Name of Component</div>
      <div>Content for the component</div>
    </div>
  );
}
function Header1() {
  return (
    <header>
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header1 />
      <main>
        <h2>Time to get started!</h2>
      </main>
      <div class="headerComp">
        <Header compName="Components" compDesc="Learning about Components"></Header>
        <Header compName="JSX" compDesc="Learning about JSX"></Header>
        <Header compName="Props" compDesc="Learning about Props"></Header>
        <Header compName="State" compDesc="Learning about State"></Header>
      </div>
    </div>
  );
}

export default App;
