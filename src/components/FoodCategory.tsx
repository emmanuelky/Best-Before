import { VStack } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import React from "react";

const FoodCategory = () => {
  return (
    <VStack>
      <Box>
        <h1 className=" shadow-2xl text-fuchsia-700 bg-amber-50 p-4">
          Food Category
        </h1>
      </Box>
    </VStack>
  );
};

export default FoodCategory;
