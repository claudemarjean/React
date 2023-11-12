import React, { useState } from 'react';

const DropTarget = ({ onDrop, children }) => {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = e.dataTransfer.files;
    onDrop(droppedFiles);
  };

  return (
    <div onDragOver={handleDragOver} onDrop={handleDrop} style={{ border: '2px dashed #aaa', padding: '16px', minHeight: '100px' }}>
      {children}
    </div>
  );
};

const DragAndDropContainer = () => {
  const [droppedFiles, setDroppedFiles] = useState([]);

  const handleDrop = (droppedFiles) => {
    setDroppedFiles([...droppedFiles]);
  };

  return (
    <div>
      <h2>Drag and Drop Files</h2>
      <DropTarget onDrop={handleDrop}>
        {droppedFiles.map((file, index) => (
          <div key={index} style={{ border: '1px solid black', padding: '8px', margin: '8px' }}>
            <p>File Name: {file.name}</p>
            <p>File Type: {file.type}</p>
            <p>File Size: {file.size} bytes</p>
          </div>
        ))}
      </DropTarget>
    </div>
  );
};

export default DragAndDropContainer;
