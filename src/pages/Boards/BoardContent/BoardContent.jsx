/* eslint-disable react/prop-types */
import Box from "@mui/material/Box"
import ListColumns from "./ListColumns/ListColumns"

const BoardContent = ({ board }) => {
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
        width: "100%",
        height: (theme) => theme.trelloCustom.boardContentHeight,
        p: "10px 0"
      }}
      Box
    >
      <ListColumns columns={board.columns} />
    </Box>
  )
}

export default BoardContent
