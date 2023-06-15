// import Link from "@mui/material/Link";
import { LinkListProps, Resouce } from "../shared/types";
import { Box, Link } from "@mui/material";
export default function LinkList({ list }: LinkListProps) {
  return (
    <Box px={4}>
      {list?.map((elem: Resouce, index: number) => {
        return (
          <li key={index}>
            <Link href={elem.linkUrl} variant="body2" target="_blank">
              {elem.title}
            </Link>
            <>{elem.description}</>
          </li>
        );
      })}
    </Box>
  );
}
