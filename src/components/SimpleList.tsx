import { Box, Typography } from "@mui/material";
import { ListItem } from "../shared/types";

interface PropsDef {
  list: ListItem[] | undefined;
  numberedPrefix?: number | undefined;
  simpleList?: boolean | undefined;
}
export default function SimpleList({
  list,
  numberedPrefix,
  simpleList,
}: PropsDef) {
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
