import CommentIcon from "@mui/icons-material/Comment";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import AlarmAddIcon from "@mui/icons-material/AlarmAdd";
import { Dictionary } from "../types";

export const followUpTypeDict: Dictionary = {
  comment: { text: "Comentario", icon: CommentIcon },
  request: { text: "Requisición", icon: AlarmAddIcon },
  notification: { text: "Notificación", icon: CircleNotificationsIcon },
  milestone: { text: "Objetivo", icon: SportsScoreIcon },
};

export const statusTypeDict: Dictionary = {
  resolved: { text: "Resuelto", icon: null },
  pending: { text: "Pendiente", icon: null },
  inprogress: { text: "En progreso", icon: null },
};
