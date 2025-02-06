import './App.css'

function App() {

  return (
    <>
      <Text />
      <Text display="How Are You?" />
    </>
  )
}

function Text({display = 'Hello World!'}) {
  return (
    <div>
      <p>{display}</p>
    </div>
  );
}

export default App
