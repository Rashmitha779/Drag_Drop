import React from "react";
import {
  Drawer,
  TextField,
  Button,
  Box,
  Typography,
  Divider,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  IconButton,
  Checkbox,
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const RightPanel = ({ open, element, onUpdate, onClose }) => {
  const handleChange = (field) => (e) => {
    if (element) {
      // Handle width, height, opacity, and backgroundColor updates
      if (
        field === "width" ||
        field === "height" ||
        field === "opacity" ||
        field === "fillColor" ||
        field === "margin" ||
        field === "paddingLeft" ||
        field === "paddingRight" ||
        field === "paddingTop" ||
        field === "paddingBottom" ||
        field === "marginTop" ||
        field === "marginLeft" ||
        field === "marginRight" ||
        field === "marginBottom" ||
        field === "positionType" ||
        field === "textColor"
      ) {
        if (field === "opacity") {
          onUpdate({
            ...element,
            opacity: e.target.value,
          });
        } else if (field === "fillColor") {
          onUpdate({
            ...element,
            backgroundColor: e.target.value,
          });
        } else if (field === "src") {
          onUpdate({
            ...element,
            src: e.target.value,
          });
        } else if (field === "content") {
          onUpdate({
            ...element,
            content: e.target.value,
          });
        } else if (field === "marginTop") {
          onUpdate({
            ...element,
            marginTop: Number(e.target.value),
          });
        } else if (field === "marginLeft") {
          onUpdate({
            ...element,
            marginLeft: Number(e.target.value),
          });
        } else if (field === "marginRight") {
          onUpdate({
            ...element,
            marginRight: Number(e.target.value),
          });
        } else if (field === "marginBottom") {
          onUpdate({
            ...element,
            marginBottom: Number(e.target.value),
          });
        } else if (field === "paddingTop") {
          onUpdate({
            ...element,
            paddingTop: Number(e.target.value),
          });
        } else if (field === "paddingLeft") {
          onUpdate({
            ...element,
            paddingLeft: Number(e.target.value),
          });
        } else if (field === "paddingRight") {
          onUpdate({
            ...element,
            paddingRight: Number(e.target.value),
          });
        } else if (field === "paddingBottom") {
          onUpdate({
            ...element,
            paddingBottom: Number(e.target.value),
          });
        } else if (field === "positionType") {
          onUpdate({
            ...element,
            positionType: e.target.value,
          });
        } else if (field === "textColor") {
          onUpdate({
            ...element,
            textColor: e.target.value,
          });
        } else {
          onUpdate({
            ...element,
            size: { ...element.size, [field]: Number(e.target.value) },
          });
        }
      } else {
        onUpdate({ ...element, [field]: e.target.value });
      }
    }
  };

  const handlePositionChange = (field) => (e) => {
    if (element) {
      if (field === "x" || field === "y") {
        onUpdate({
          ...element,
          position: { ...element.position, [field]: Number(e.target.value) },
        });
      } else {
        onUpdate({ ...element, [field]: e.target.value });
      }
    }
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      variant="persistent"
      sx={{
        "& .MuiDrawer-paper": {
          width: 300,
          padding: 2,
          backgroundColor: "#f9f9f9",
          position: "fixed",
          top: 0,
          right: 0,
          height: "100vh",
          boxShadow: 3,
          transition: "transform 0.3s ease-in-out",
          transform: open ? "translateX(0)" : "translateX(100%)",
        },
      }}
    >
      {element ? (
        <Box style={{marginBottom:'20px'}}>
          <Typography variant="h6" gutterBottom>
            Edit {element.type}
          </Typography>
          {element.type === "Text" && (
            <TextField
              label="Content"
              value={element.content}
              onChange={handleChange("content")}
              fullWidth
              multiline
              rows={4}
            />
          )}

          {element.type === "Button" && (
            <div>
              <TextField
                label="Button Label"
                value={element.content}
                onChange={handleChange("content")}
                fullWidth
                style={{ marginTop: "8px" }}
              />
            </div>
          )}

          {element.type === "Paragraph" && (
            <TextField
              label="Paragraph Content"
              value={element.content}
              onChange={handleChange("content")}
              fullWidth
              multiline
              rows={4}
            />
          )}

          {element.type === "Image" && (
            <TextField
              label="Image Source"
              value={element.src || ""}
              onChange={handleChange("src")}
              fullWidth
            />
          )}
          <Divider sx={{ my: 2 }} />
          <Typography variant="subtitle1">Size & Position</Typography>
          <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
            <TextField
              type="number"
              size="small"
              label="X"
              value={Number(element.position.x) || ""}
              onChange={handlePositionChange("x")}
              fullWidth
            />
            <TextField
              type="number"
              size="small"
              label="Y"
              value={Number(element.position.y) || ""}
              onChange={handlePositionChange("y")}
              fullWidth
            />
          </Box>
          <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
            <TextField
              type="number"
              size="small"
              label="Width (W)"
              value={parseInt(element.size.width, 10) || ""}
              onChange={handleChange("width")}
              fullWidth
            />
            <TextField
              type="number"
              size="small"
              label="Height (H)"
              value={parseInt(element.size.height, 10) || ""}
              onChange={handleChange("height")}
              fullWidth
            />
          </Box>
          <Divider sx={{ my: 2 }} />
          <Typography variant="subtitle1">Responsive Behavior</Typography>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Responsive</InputLabel>
            <Select
              label="Responsive"
              value={element.responsive || ""}
              onChange={handleChange("responsive")}
            >
              <MenuItem value="fixed">Fixed</MenuItem>
              <MenuItem value="responsive">Responsive</MenuItem>
              <MenuItem value="fluid">Fluid</MenuItem>
            </Select>
          </FormControl>

          <Divider sx={{ my: 2 }} />
          <Typography variant="subtitle1">Fill Color</Typography>
          <TextField
            type="color"
            value={element.backgroundColor || "#ffffff"} // Default to white
            onChange={handleChange("fillColor")}
            fullWidth
            sx={{ mb: 2 }}
          />

          <Typography variant="subtitle1">Text Color</Typography>
          <TextField
            type="text"
            size="small"
            label="Color"
            style={{ marginBottom: '10px' }}
            value={element.textColor || ""}
            onChange={handleChange("textColor")}
            fullWidth
          />

          <Typography variant="subtitle1">Opacity</Typography>
          <TextField
            type="number"
            size="small"
            label="Opacity"
            value={element.opacity || ""}
            onChange={handleChange("opacity")}
            fullWidth
          />

          <Divider sx={{ my: 2 }} />
          <Typography variant="subtitle1">Position Type</Typography>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Position Type</InputLabel>
            <Select
              label="Position Type"
              value={element.positionType || ""}
              onChange={handleChange("positionType")}
            >
              <MenuItem value="static">Static</MenuItem>
              <MenuItem value="relative">Relative</MenuItem>
              <MenuItem value="Absolute">absolute</MenuItem>
              <MenuItem value="fixed">Fixed</MenuItem>
              <MenuItem value="sticky">Sticky</MenuItem>
            </Select>
          </FormControl>

          <Divider sx={{ my: 2 }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 2,
              border: "1px solid #e0e0e0",
              borderRadius: 1,
              width: "250px",
            }}
          >
            <Typography variant="subtitle1" gutterBottom sx={{ whiteSpace: "nowrap" }}>
              Docking, Margins and Padding
            </Typography>
            <div style={{ textAlign: 'center' }}>
              <input type="text" style={{ width: '30px', height: '30px', textAlign: 'center', marginBottom: '5px' }} placeholder="MT" value={element.marginTop || ""} onChange={handleChange("marginTop")} />
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <input type="text" style={{ width: '30px', height: '30px', textAlign: 'center', marginRight: '5px' }} placeholder="ML" value={element.marginLeft || ""} onChange={handleChange("marginLeft")} />
                <div style={{ padding: '20px', border: '2px solid #e0e0e0', borderRadius: '5px' }}>
                  <input type="text" style={{ width: '30px', height: '30px', textAlign: 'center', marginBottom: '5px' }} placeholder="PT" value={element.paddingTop || ""} onChange={handleChange("paddingTop")} />
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <input type="text" style={{ width: '30px', height: '30px', textAlign: 'center', marginRight: '5px' }} placeholder="PL" value={element.paddingLeft || ""} onChange={handleChange("paddingLeft")} />
                    <div style={{ width: '50px', height: '50px', border: '2px solid #e0e0e0', display: 'flex', justifyContent: 'center', borderRadius: '5px' }}>
                      <IconButton>
                        <AddIcon />
                      </IconButton>
                    </div>
                    <input type="text" style={{ width: '30px', height: '30px', textAlign: 'center', marginLeft: '5px' }} placeholder="PR" value={element.paddingRight || ""} onChange={handleChange("paddingRight")} />
                  </div>
                  <input type="text" style={{ width: '30px', height: '30px', textAlign: 'center', marginTop: '5px' }} placeholder="PB" value={element.paddingBottom || ""} onChange={handleChange("paddingBottom")} />
                </div>
                <input type="text" style={{ width: '30px', height: '30px', textAlign: 'center', marginLeft: '5px' }} placeholder="MR" value={element.marginRight || ""} onChange={handleChange("marginRight")} />
              </div>
              <input type="text" style={{ width: '30px', height: '30px', textAlign: 'center', marginTop: '5px' }} placeholder="MB" value={element.marginBottom || ""} onChange={handleChange("marginBottom")} />
            </div>
            <Checkbox label="Element auto docks" defaultChecked />
          </Box>
          <Divider sx={{ my: 2 }} />
          <Button
            variant="contained"
            color="primary"
            onClick={onClose}
            sx={{ marginTop: 2 }}
          >
            Close
          </Button>
        </Box>
      ) : (
        <Typography variant="body1">Select an element to edit</Typography>
      )}
    </Drawer>
  );
};

export default RightPanel;
