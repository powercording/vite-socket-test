import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import { Client, Message } from "@stomp/stompjs";

function App() {
  const [count, setCount] = useState(0);

  // const sock = new SockJS("http://61.77.108.167:8000/chat-service/ws", {
  //   transports: ["websocket"],
  // });

  // const successCb = () => {
  //   console.log("굿");
  // };

  // const connect = () => {
  //   const client = over(sock);
  //   client.connect({}, successCb);
  // };

  // sock.onopen;

  let clinet;
  clinet = new Client({
    brokerURL: "ws://61.77.108.167:8000/chat-service/ws",

    debug: function (str) {
      console.log(str);
    },
    reconnectDelay: 20000,
    heartbeatIncoming: 10000,
    // heartbeatIncoming: 4000,
    heartbeatOutgoing: 10000,

    beforeConnect() {
      console.log("시도중");
    },
  });

  clinet.onConnect = function () {
    console.log("Dd");
  };

  const loger = () => {
    console.log("D");
  };

  clinet.activate();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <button onClick={loger}>연결</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
