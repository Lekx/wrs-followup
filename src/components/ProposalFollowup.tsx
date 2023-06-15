import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import { Box, Icon, Tooltip, Typography } from "@mui/material";

import { Followup } from "../shared/types";
import { statusTypeDict, followUpTypeDict } from "../shared/dictionaries";
import { useFollowupData } from "../hooks/useFollowupData";
import Loader from "./Loader";

export default function OppositeContentTimeline() {
  const { isFollowupLoading, followupData } = useFollowupData();
  return (
    <Box py={5} bgcolor={"white"}>
      {isFollowupLoading ? (
        <Loader />
      ) : (
        <Timeline
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.1,
            },
          }}
        >
          {followupData?.map((followup: Followup) => {
            return (
              <TimelineItem>
                <TimelineOppositeContent color="textSecondary">
                  <Tooltip title={followUpTypeDict[followup.type].text}>
                    <Icon component={followUpTypeDict[followup.type].icon} />
                  </Tooltip>
                  <Typography component="div">
                    {followup.creationDate}
                  </Typography>
                  {followup.status !== undefined ? (
                    <Typography>
                      {statusTypeDict[followup.status].text}
                    </Typography>
                  ) : null}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="overline">
                    Por {followup.createdBy}
                  </Typography>
                  <Typography>{followup.content}</Typography>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      )}
    </Box>
  );
}
