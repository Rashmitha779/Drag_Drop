import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import EditorLayout from "./Components/EditorLayout";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <EditorLayout />
    </DndProvider>
  );
}

export default App;
