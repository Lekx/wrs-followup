import { CircularProgress } from "@mui/material";

export default function Loader() {
  return (
    <CircularProgress
      color="warning"
      sx={{ margin: "auto" }}
      size="4em"
      thickness={4}
    />
  );
}
