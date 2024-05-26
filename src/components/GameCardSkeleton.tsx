import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton maxW="sm" height="200px" borderRadius="lg" overflow="hidden" />
      <CardBody>
        <SkeletonText height="50px" />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
