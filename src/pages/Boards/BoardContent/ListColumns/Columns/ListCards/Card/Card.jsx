/* eslint-disable react/prop-types */
import { Card as MuiCard } from "@mui/material"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import GroupIcon from "@mui/icons-material/Group"
import CommentIcon from "@mui/icons-material/Comment"
import AttachmentIcon from "@mui/icons-material/Attachment"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

const Card = ({ temporaryHideMedia }) => {
  if (temporaryHideMedia) {
    return (
      <MuiCard
        sx={{
          cursor: "pointer",
          boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
          overflow: "unset"
        }}
      >
        <CardContent
          sx={{ p: 1.5, "&:last-child": { p: 1.5 }, overflow: "unset" }}
        >
          <Typography>Card Test 01</Typography>
        </CardContent>
      </MuiCard>
    )
  }
  return (
    <MuiCard
      sx={{
        cursor: "pointer",
        boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
        overflow: "unset"
      }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image="https://givenow.vn/wp-content/uploads/2024/05/MINIAPP_1200x840-450x338.png"
        title="green iguana"
      />
      <CardContent
        sx={{ p: 1.5, "&:last-child": { p: 1.5 }, overflow: "unset" }}
      >
        <Typography>Lizard</Typography>
      </CardContent>
      <CardActions sx={{ p: "0 4px 8px 4px", justifyContent: "space-between" }}>
        <Button size="small" startIcon={<GroupIcon />}>
          20
        </Button>
        <Button size="small" startIcon={<CommentIcon />}>
          14
        </Button>
        <Button size="small" startIcon={<AttachmentIcon />}>
          30
        </Button>
      </CardActions>
    </MuiCard>
  )
}

export default Card