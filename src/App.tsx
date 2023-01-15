import React from "react";
import Header from "./components/Header";

function App() {
  return (
    <div className="relative h-screen w-full">
      <Header />
      <main>
        <h2>This board is empty. Create a new column to get started.</h2>
        {/* <Button></Button> */}
      </main>
    </div>
  );
}

export default App;
