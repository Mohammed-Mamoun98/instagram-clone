import React from "react";
import "./App.css";
import Router from "./router";

function App() {
  return (
    <div>
      <Router />
    </div>
  );
}

export default App;

// <Paper>hello World!</Paper>
// <div
//   className="img-wrapper"
//   style={{ width: "100%", height: "auto", maxWidth: "50rem" }}
// >
//   <img src={img} alt="img" style={{ width: "100%", height: "100%" }} />
// </div>

// React.useEffect(() => {
//   fetch();
// }, []);

// const fetch = async () => {
//   const data = await fire.addPost({ title: "from new app!" });
//   console.log(data);
// };
