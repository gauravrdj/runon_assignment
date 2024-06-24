'use client'
import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialColors = [
    '#FF6633', '#FFB399', '#FF33FF', '#FFFF99',
    '#00B3E6', '#E6B333', '#3366E6', '#999966'
  ];

export default function colorPallet(){
    const [colors, setColors] = useState(initialColors);

  const handleColorChange = (index:any, newColor:any) => {
    const newColors = [...colors];
    newColors[index] = newColor;
    setColors(newColors);
  };

  const onDragEnd = (result:any) => {
    if (!result.destination) return;

    const reorderedColors = [...colors];
    const [removed] = reorderedColors.splice(result.source.index, 1);
    reorderedColors.splice(result.destination.index, 0, removed);

    setColors(reorderedColors);
  };
    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">Color Palette</h1>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="colors" direction="horizontal">
            {(provided:any) => (
              <div
                className="flex space-x-4"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {colors.map((color, index) => (
                  <Draggable key={index} draggableId={`color-${index}`} index={index}>
                    {(provided:any) => (
                      <div
                        className="w-16 h-16 border-2 border-gray-300 rounded"
                        style={{ backgroundColor: color }}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <input
                          type="color"
                          value={color}
                          onChange={(e) => handleColorChange(index, e.target.value)}
                          className="opacity-0 w-full h-full cursor-pointer"
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    )
}