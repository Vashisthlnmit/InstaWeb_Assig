import React, { useState,useEffect } from "react";

export function Card({
  id,
  title = "Card Title",
  content = "This is a sample card content. Click to edit me!",
  width = "w-64",
  bgColor = "bg-white",
  textColor = "text-gray-800",
  shadow = "shadow-md",
  rounded = "rounded-lg",
  border = "border border-gray-200",
  editable = false,
  isSelected=false,
  onSave
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [cardProps, setCardProps] = useState({
    title,
    content,
    width,
    bgColor,
    textColor,
    shadow,
    rounded,
    border
  });
  const handlePropChange = (e) => {
    const { name, value } = e.target;
    setCardProps(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCardClick = () => {
     if(editable){
       setIsEditing(!isEditing)
     }
  };

  const handleSave = () => {
    setIsEditing(false);
    if (onSave) onSave(cardProps);
  };

  return (
    <div className="flex flex-col gap-4 mb-4" >
      <div 
        id={id}
        onClick={handleCardClick}
        className={`${cardProps.width} ${cardProps.bgColor} ${cardProps.textColor} ${cardProps.shadow} ${cardProps.rounded} ${cardProps.border} p-6 cursor-${editable ? 'pointer' : 'default'}`}
      >
        <h3 className="text-xl font-bold mb-2">{cardProps.title}</h3>
        <p className="text-base">{cardProps.content}</p>
      </div>
      
      {isEditing && (
        <div className="p-4 border border-gray-200 rounded-lg space-y-3">
          <h4 className="font-medium text-lg">Edit Card Properties</h4>
          <div className="space-y-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                value={cardProps.title}
                onChange={handlePropChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Content</label>
              <textarea
                name="content"
                value={cardProps.content}
                onChange={handlePropChange}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Width</label>
              <select
                name="width"
                value={cardProps.width}
                onChange={handlePropChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="w-48">Small (12rem)</option>
                <option value="w-64">Medium (16rem)</option>
                <option value="w-80">Large (20rem)</option>
                <option value="w-96">Extra Large (24rem)</option>
                <option value="w-full">Full width</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Background Color</label>
              <select
                name="bgColor"
                value={cardProps.bgColor}
                onChange={handlePropChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="bg-white">White</option>
                <option value="bg-gray-50">Light Gray</option>
                <option value="bg-blue-50">Light Blue</option>
                <option value="bg-red-50">Light Red</option>
                <option value="bg-green-50">Light Green</option>
                <option value="bg-indigo-100">Indigo</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Text Color</label>
              <select
                name="textColor"
                value={cardProps.textColor}
                onChange={handlePropChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="text-gray-800">Dark Gray</option>
                <option value="text-black">Black</option>
                <option value="text-gray-700">Gray</option>
                <option value="text-blue-800">Blue</option>
                <option value="text-red-800">Red</option>
                <option value="text-green-800">Green</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Shadow</label>
              <select
                name="shadow"
                value={cardProps.shadow}
                onChange={handlePropChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="shadow-none">None</option>
                <option value="shadow-sm">Small</option>
                <option value="shadow-md">Medium</option>
                <option value="shadow-lg">Large</option>
                <option value="shadow-xl">Extra Large</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Rounded Corners</label>
              <select
                name="rounded"
                value={cardProps.rounded}
                onChange={handlePropChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="rounded-none">None</option>
                <option value="rounded-sm">Small</option>
                <option value="rounded-md">Medium</option>
                <option value="rounded-lg">Large</option>
                <option value="rounded-xl">Extra Large</option>
                <option value="rounded-full">Full</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Border</label>
              <select
                name="border"
                value={cardProps.border}
                onChange={handlePropChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="border border-gray-200">Light Gray</option>
                <option value="border border-gray-300">Gray</option>
                <option value="border border-blue-200">Light Blue</option>
                <option value="border border-red-200">Light Red</option>
                <option value="border border-green-200">Light Green</option>
                <option value="border-0">None</option>
              </select>
            </div>

            <button
              onClick={handleSave}
              className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Save Changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Example parent component usage
export default Card;