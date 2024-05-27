import {
  List,
  Skeleton,
  ListItem,
  HStack,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <List>
      <ListItem paddingY="5px">
        <Skeleton paddingY="5px">
          <HStack spacing={2}>
            <SkeletonText fontSize="sm" />
          </HStack>
        </Skeleton>
      </ListItem>
    </List>
  );
};

export default GenreListSkeleton;
