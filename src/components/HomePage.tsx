import { Box, Button, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import BBTimer from "../data/BBTimerGif.gif";
import FoodCategory from "./FoodCategory";

const HomePage = () => {
  return (
    <VStack className="w-full h-full">
      <Box className="p-5 text-4xl text-white">Food Expiring Date Tracker</Box>
      <HStack className="flex flex-wrap justify-between">
        <Box className="p-4">
          <img src={BBTimer} className=" w-1/2 rounded" alt="BBTimer" />
        </Box>
        <Button className="p-4"> ENTER DATE</Button>
      </HStack>
      <Box className=" p-4">
        <FoodCategory />
      </Box>
    </VStack>
  );
};
export default HomePage;
