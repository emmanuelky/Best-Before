import { Box, HStack } from "@chakra-ui/layout";
import React from "react";
import bestLogo from "../data/bestLogo.png";
import beforeLogo from "../data/beforeLogo.png";

const NavBar = () => {
  return (
    <HStack className="flex flex-wrap justify-center p-4 ">
      <Box className="flex justify-center">
        <img src={bestLogo} className="rounded w-40" alt="bestLog" />
        <img src={beforeLogo} className="rounded w-40" alt="beforeLogo" />
      </Box>
    </HStack>
  );
};

export default NavBar;
