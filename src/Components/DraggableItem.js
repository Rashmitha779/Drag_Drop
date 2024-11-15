import React from "react";
import { useDrag } from "react-dnd";
import { Box } from "@mui/material";

const DraggableItem = ({ type }) => {
  const [, dragRef] = useDrag({
    type: "ELEMENT",
    item: { type },
  });

  return (
    <Box
      ref={dragRef}
      sx={{
        padding: "8px 16px",
        backgroundColor: "#eee",
        cursor: "grab",
      }}
    >
      {type}
    </Box>
  );
};

export default DraggableItem;
