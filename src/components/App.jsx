import React from "react";

function App() {
  setInterval(updatetime,1000);
  const now = new Date().toLocaleTimeString('it-IT' );
  const [time,settime]=React.useState(now);
  function updatetime()
  {
    const newtime=new Date().toLocaleTimeString('it-IT');
    settime(newtime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updatetime}>Get Time</button>
    </div>
  );
}

export default App;
