import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { Box, Button, Typography } from "@mui/material";
import { Rnd } from "react-rnd";
import RightPanel from "./RightPanel";

const MainPage = () => {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  // drop area for elements
  const [, dropRef] = useDrop({
    accept: "ELEMENT",
    drop: (item) => addElementToPage(item.type),
  });

  // Function to add a new element 
  const addElementToPage = (type) => {
    const newElement = {
      id: Date.now(),
      type,
      position: { x: 100, y: 100 },
      size: { width: 100, height: 100 },
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      opacity: 1,
      backgroundColor: '#ffffff',
      color: 'red',
      content:
        type === "Text"
          ? "Sample Text"
          : type === "Paragraph"
            ? "This is a sample paragraph."
            : null,
      src: type === "Image" ? "https://via.placeholder.com/100" : null,
    };

    // styles for different element types
    if (type === "Container") {
      newElement.size = { width: 300, height: 200 };
      newElement.backgroundColor = "#f0f0f0";
    } else if (type === "Button") {
      newElement.content = "Click Me";
    }

    setElements((prev) => [...prev, newElement]);
  };

  const handleElementClick = (element) => {
    setSelectedElement(element);
    setIsPanelOpen(true);
  };

  //  Update Array
  const updateElement = (updatedElement) => {
    setElements((prev) =>
      prev.map((el) =>
        el.id === updatedElement.id ? {
          ...el,
          size: updatedElement.size,
          position: updatedElement.position,
          backgroundColor: updatedElement.backgroundColor,
          opacity: updatedElement.opacity,
          src: updatedElement.src,
          padding: updatedElement.padding,
          margin: updatedElement.margin,
          content: updatedElement.content,
          paddingTop: updatedElement.paddingTop,
          paddingBottom: updatedElement.paddingBottom,
          paddingLeft: updatedElement.paddingLeft,
          paddingRight: updatedElement.paddingRight,
          marginTop: updatedElement.marginTop,
          marginBottom: updatedElement.marginBottom,
          marginLeft: updatedElement.marginLeft,
          marginRight: updatedElement.marginRight,
          positionType: updatedElement.positionType,
          textColor: updatedElement.textColor,
        } : el
      )
    );
    setSelectedElement(updatedElement);
  };

  return (
    <Box
      ref={dropRef}
      sx={{
        minHeight: "100vh",
        padding: 2,
        position: "relative",
        backgroundColor: "#fafafa",
        overflow: "hidden",
      }}
    >
      {elements.map((element) => (
        <Rnd
          key={element.id}
          size={{ width: element.size.width, height: element.size.height }}
          position={{ x: element.position.x, y: element.position.y }}
          backgroundColor={element.backgroundColor}
          opacity={element.opacity}
          onDragStop={(e, d) => {
            setElements((prev) =>
              prev.map((el) =>
                el.id === element.id ? { ...el, position: { x: d.x, y: d.y } } : el
              )
            );
          }}
          onResizeStop={(e, direction, ref, delta, position) => {
            setElements((prev) =>
              prev.map((el) =>
                el.id === element.id
                  ? {
                    ...el,
                    size: { width: ref.style.width, height: ref.style.height },
                    position,
                  }
                  : el
              )
            );
          }}
          onClick={() => handleElementClick(element)}
          style={{
            padding: element.type === "Button" ? 0 : element.padding,
            margin: element.margin,
            backgroundColor: element.type === "Button" ? '#ffffff' : element.backgroundColor,
            textAlign: "center",
            cursor: "move",
            border: element.type === "Button" ? "none" : "1px solid #ddd",
            opacity: element.opacity,
            paddingTop: element.type === "Button" ? "none" : element.paddingTop,
            paddingBottom: element.type === "Button" ? "none" : element.paddingBottom,
            paddingLeft: element.type === "Button" ? "none" : element.paddingLeft,
            paddingRight: element.type === "Button" ? "none" : element.paddingRight,
            marginTop: element.marginTop,
            marginBottom: element.marginBottom,
            marginLeft: element.marginLeft,
            marginRight: element.marginRight,
            position: element.positionType,
          }}
        >
          {element.type === "Text" && <Typography style={{ color: element.textColor }}>{element.content}</Typography>}
          {element.type === "Paragraph" && (
            <Typography variant="body1" style={{ whiteSpace: "pre-wrap", color: element.textColor }}>
              {element.content}
            </Typography>
          )}
          {element.type === "Image" && (
            <img src={element.src} alt="Default" style={{ width: "100%", height: "100%" }} />
          )}
          {element.type === "Button" && (
            <Button
              variant="contained"
              onClick={() => alert("Button clicked!")}
              sx={{
                width: element.size.width,
                height: element.size.height,
                border: "none",
                backgroundColor: element.backgroundColor,
                color: element.textColor ?element.textColor : '#000000',
                paddingTop: element.paddingTop,
                paddingBottom: element.paddingBottom,
                paddingLeft: element.paddingLeft,
                paddingRight: element.paddingRight,
                whiteSpace: 'nowrap',
              }}
            >
              {element.content}
            </Button>
          )}
          {element.type === "Container" && (
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: element.backgroundColor,
              }}
            >
              Container
            </Box>
          )}
        </Rnd>
      ))}

      <RightPanel
        open={isPanelOpen}
        element={selectedElement}
        onUpdate={updateElement}
        onClose={() => setIsPanelOpen(false)}
      />

    </Box>
  );
};

export default MainPage;
