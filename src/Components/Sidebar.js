import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import ArticleIcon from "@mui/icons-material/Article";
import SmartButtonIcon from "@mui/icons-material/SmartButton";
import ContainerIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import DraggableItem from "./DraggableItem";

const items = [
  { type: "Image", icon: <ImageIcon fontSize="large" style={{ color: '#000B58' }} /> },
  { type: "Text", icon: <TextFieldsIcon fontSize="large" style={{ color: '#000B58' }} /> },
  { type: "Paragraph", icon: <ArticleIcon fontSize="large" style={{ color: '#000B58' }} /> },
  { type: "Button", icon: <SmartButtonIcon fontSize="large" style={{ color: '#000B58' }} /> },
  { type: "Container", icon: <ContainerIcon fontSize="large" style={{ color: '#000B58' }} /> },
];

const Sidebar = () => (
  <Box
    sx={{
      padding: 2,
      height: "100vh",
      borderRight: "1px solid #ddd",
      backgroundColor: "#FBF8EF",
    }}
  >
    <Typography variant="h6" gutterBottom sx={{ textAlign: "center", color: "#ffffff", fontWeight: "bold", backgroundColor: '#78B3CE', borderRadius: '5px' }}>
      Elements
    </Typography>
    <Grid container spacing={2}>
      {items.map((item) => (
        <Grid item xs={12} key={item.type} >
          <div style={{ display: 'flex', flexDirection: 'row', border: '1px solid #C9E6F0', padding: '5px', borderRadius: '5px' }}>
            <div style={{ backgroundColor: '#C6E7FF', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '3px' }}>
              {item.icon}
            </div>
            <div style={{ width: '100%' }}>
              <DraggableItem type={item.type}>
                <Paper
                  elevation={3}
                  sx={{
                    padding: 1,
                    borderRadius: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s",
                    "&:hover": {
                      backgroundColor: "#e0f7fa",
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Typography variant="body2" sx={{ marginLeft: 1, color: "#555" }}>
                      {item.type}
                    </Typography>
                  </Box>
                </Paper>
              </DraggableItem>
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Sidebar;
