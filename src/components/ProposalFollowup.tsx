import { Box, Chip, Icon, Tooltip, Typography } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { Followup } from "../shared/types";
import { statusTypeDict, followUpTypeDict } from "../shared/dictionaries";
import { useFollowupData } from "../hooks/useFollowupData";
import Loader from "./Loader";

export default function OppositeContentTimeline() {
  const { isFollowupLoading, followupData } = useFollowupData();
  return (
    <Box py={5} px={{ sm: 2, md: 4 }} bgcolor={"white"}>
      {isFollowupLoading ? (
        <Loader />
      ) : (
        <Timeline>
          {followupData?.map((followup: Followup, index: number) => {
            return (
              <TimelineItem key={index} color="#b69f57">
                <TimelineOppositeContent display="none"></TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot variant="outlined">
                    <Tooltip title={followUpTypeDict[followup.type].text} arrow>
                      <Icon component={followUpTypeDict[followup.type].icon} />
                    </Tooltip>
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="overline">
                    {followup.creationDate} por {followup.createdBy}
                  </Typography>
                  <Typography>{followup.content}</Typography>
                  <Typography variant="caption">
                    ID: {`${index + 1}`.padStart(3, "0")}
                    {followup.status !== undefined ? (
                      <Chip label={statusTypeDict[followup.status].text} />
                    ) : null}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      )}
    </Box>
  );
}
