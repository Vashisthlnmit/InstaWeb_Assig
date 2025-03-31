import React from 'react';
import { useDroppable } from '@dnd-kit/core';

export function Droppable({ id, children, style: propStyle = {} }) {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });

  const style = {
    ...propStyle,
    backgroundColor: isOver ? 'rgba(0, 255, 0, 0.1)' : undefined,
    transition: 'background-color 0.2s ease',
  };

  return (
    <div 
      ref={setNodeRef} 
      style={style} 
      className="droppable-area w-full min-h-[500px] border-2 border-dashed border-indigo-300 p-4 rounded-lg"
    >
      {children}
    </div>
  );
}