import { Stack } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

const SkeletonList = () => {
  return (
    <Stack width={350} spacing={1} data-testid="SkeletonList">
      <Skeleton variant="rounded" height={194} animation="wave" />
      <Skeleton
        variant="rectangular"
        width={341}
        height={56}
        animation="wave"
      />
      <Skeleton
        variant="rectangular"
        width={341}
        height={32}
        animation="wave"
      />
      <Skeleton variant="rounded" width={341} height={140} animation="wave" />
      <Skeleton variant="rounded" width={64} height={30} animation="wave" />
    </Stack>
  );
};

export default SkeletonList;
