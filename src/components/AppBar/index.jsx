import ModeSelect from "../ModeSelect"
import { Box } from "@mui/material"

const Board = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.light",
        width: "100%",
        height: (theme) => theme.trelloCustom.appBarHeight,
        display: "flex",
        alignItems: "center"
      }}
    >
      <ModeSelect />
    </Box>
  )
}

export default Board
