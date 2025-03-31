import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { Draggable } from "./Components/Draggable";
import { Droppable } from "./Components/Droppable";
import Button from "./Components/Button";
import Image from "./Components/Image";
import Text from "./Components/Text_Comp";
import Card from "./Components/Card_Comp";
import { v4 as uuidv4 } from "uuid";

// Available components list
const COMPONENT_TYPES = [
  { id: "button", name: "Button", component: Button },
  { id: "image", name: "Image", component: Image },
  { id: "text", name: "Text", component: Text },
  { id: "card", name: "Card", component: Card },
];

function App() {
  const [droppedComponents, setDroppedComponents] = useState([]);

  function handleDragEnd(event) {
    if (event.over && event.over.id === "droppable") {
      const { active } = event;
      const componentType = COMPONENT_TYPES.find((c) => c.id === active.id);

      if (componentType) {
        setDroppedComponents((prev) => [
          ...prev,
          { id: uuidv4(), type: componentType.id, Component: componentType.component },
        ]);
      }
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Header */}
      <header className="w-full max-w-4xl bg-indigo-600 text-white text-center py-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">Drag & Drop Website Builder</h1>
      </header>

      {/* Main Content Layout */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl mt-6">
        {/* Sidebar with Draggable Components */}
        <div className="w-full md:w-1/3 bg-white shadow-md rounded-lg p-4 border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Available Components</h2>
          <div className="space-y-3">
            {COMPONENT_TYPES.map(({ id, name }) => (
              <Draggable key={id} id={id}>
                <div className="p-3 bg-indigo-100 text-indigo-700 rounded-md cursor-pointer text-center font-medium shadow hover:bg-indigo-200 transition">
                  {name}
                </div>
              </Draggable>
            ))}
          </div>
        </div>

        {/* Droppable Canvas Area */}
        <Droppable id="droppable">
          <div className="w-full md:w-2/3 bg-white shadow-md rounded-lg p-6 border-2 border-dashed border-indigo-400 min-h-[300px] flex flex-col items-center justify-center">
            {droppedComponents.length === 0 ? (
              <p className="text-gray-400 text-lg font-medium">Drag components here</p>
            ) : (
              droppedComponents.map(({ id, Component }) => (
                <Component key={id} id={id} editable={true} />
              ))
            )}
          </div>
        </Droppable>
      </div>
    </div>
    </DndContext>
  );
}

export default App;
