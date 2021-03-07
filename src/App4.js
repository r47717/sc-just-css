import React from "react";
import { createUseStyles } from "react-jss";
import logo from "./logo.svg";

const useStyles = createUseStyles({
  "@keyframes appLogoSpin": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },

  container: {
    textAlign: "center",

    "& .App-logo": {
      height: "40vmin",
      pointerEvents: "none",

      "@media (prefers-reduced-motion: no-preference)": {
        animation: "$appLogoSpin infinite 20s linear",
      },
    },

    "& .App-header": {
      backgroundColor: "#282c34",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "calc(10px + 2vmin)",
      color: "white",
    },

    "& .App-link": {
      color: "#61dafb",
    },
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
