import Button from "./components/Button/button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={(e) => console.log(e.target)}>123</Button>
        <Button btnType="primary">123</Button>
        <Button btnType="primary" size="lg">123</Button>
        <Button btnType="primary" size="lg" disabled>123</Button>
        <Button btnType="danger" size="sm" disabled>123</Button>
        <Button btnType="link" size="lg" disabled>123</Button>
        <Button autoFocus>123</Button>
        <h1>12345</h1>
      </header>
    </div>
  );
}

export default App;
