import { Box, Typography } from "@mui/material";
import { ListItem } from "../shared/types";
import { SimpleListProps } from "../shared/types";

export default function SimpleList({
  list,
  numberedPrefix,
  simpleList,
}: SimpleListProps) {
  return (
    <Box ml={5}>
      {list?.map((item: ListItem, index: number) => {
        return (
          <Box p={1} key={index}>
            {!simpleList ? (
              <>
                <Typography
                  variant="subtitle1"
                  fontWeight={"bold"}
                  color="#b69f57"
                >
                  {numberedPrefix ? `${numberedPrefix}.${index + 1}.` : null}
                  {item.title}
                </Typography>
                <Typography>{item.description}</Typography>
              </>
            ) : (
              <Typography variant={"overline"}>- {item.title}</Typography>
            )}

            <SimpleList list={item.list} simpleList={true} />
          </Box>
        );
      })}
    </Box>
  );
}
