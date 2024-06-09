/* eslint-disable react/prop-types */
import { useState } from "react"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import MenuItem from "@mui/material/MenuItem"
import ListItemText from "@mui/material/ListItemText"
import ListItemIcon from "@mui/material/ListItemIcon"
import ContentCut from "@mui/icons-material/ContentCut"
import ContentCopy from "@mui/icons-material/ContentCopy"
import ContentPaste from "@mui/icons-material/ContentPaste"
import Cloud from "@mui/icons-material/Cloud"
import Menu from "@mui/material/Menu"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Tooltip from "@mui/material/Tooltip"
import DeleteIcon from "@mui/icons-material/Delete"
import AddCardIcon from "@mui/icons-material/AddCard"
import Button from "@mui/material/Button"
import DragHandleIcon from "@mui/icons-material/DragHandle"
import Box from "@mui/material/Box"
import ListCards from "./ListCards/ListCards"
import { mapOrder } from "~/utils/sorts"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

const Column = ({ column }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: column._id, data: { ...column } })

  const dndKitColumnStyles = {
    transform: CSS.Translate.toString(transform),
    transition,
    height: "100%",
    opacity: isDragging ? 0.5 : undefined
  }

  const orderedCards = mapOrder(column?.cards, column?.cardOrderIds, "_id")

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
    <div ref={setNodeRef} style={dndKitColumnStyles} {...attributes}>
      <Box
        {...listeners}
        sx={{
          minWidth: "300px",
          maxWidth: "300px",
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#333643" : "#ebecf0",
          borderRadius: "6px",
          ml: 2,
          height: "fit-content",
          maxHeight: (theme) =>
            `calc(${theme.trelloCustom.boardContentHeight} - ${theme.spacing(
              4
            )})`
        }}
      >
        <Box
          sx={{
            height: (theme) => theme.trelloCustom.columnHeaderHeight,
            p: 2,
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", cursor: "pointer", fontSize: "1rem" }}
          >
            {column.title}
          </Typography>
          <Tooltip title="More Option">
            <Box>
              <ExpandMoreIcon
                sx={{ color: "text.primary", cursor: "pointer" }}
                id="basic-column-dropdown"
                aria-controls={open ? "basic-menu-column-dropdown" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              />
              <Menu
                id="basic-menu-column-dropdown"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-column-dropdown"
                }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <AddCardIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Add new card</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCopy fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Copy</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentPaste fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Paste</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCut fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Cut</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <Cloud fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Archive this column</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <DeleteIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Remove this column</ListItemText>
                </MenuItem>
              </Menu>
            </Box>
          </Tooltip>
        </Box>
        <ListCards cards={orderedCards} />
        <Box
          sx={{
            height: (theme) => theme.trelloCustom.columnFooterHeight,
            p: 2,
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <Button startIcon={<AddCardIcon />}>Add new card</Button>
          <Tooltip title="Drag to move">
            <DragHandleIcon sx={{ cursor: "pointer" }} />
          </Tooltip>
        </Box>
      </Box>
    </div>
  )
}

export default Column
