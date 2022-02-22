import React from "react";
import { Box, Button, Container, HStack, VStack } from "@chakra-ui/react";
import BBTimer from "../data/BBTimerGif.gif";
import FoodCategory from "./FoodCategory";

const HomePage = () => {
  return (
    <Container className="w-full h-full">
      <Box className="p-5 text-4xl text-white text-center">
        Food Expiring Date Tracker
      </Box>
      <HStack className="flex justify-around">
        <Box className=" m-4 w-full">
          <img src={BBTimer} className="rounded-lg" alt="BBTimer" />
        </Box>
        <Box className="m-4">
          <Button className=""> ENTER EXPIRING DATE</Button>
        </Box>
      </HStack>

      <div>
        <FoodCategory />
      </div>
    </Container>
  );
};
export default HomePage;
