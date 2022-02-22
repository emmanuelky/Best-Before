import { Badge, HStack, VStack } from "@chakra-ui/layout";
import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

const FoodCategory = () => {
  return (
    <div className="w-full h-full p-4 mt-5">
      <div>
        <h1 className="text-center text-2xl shadow-2xl rounded-lg text-fuchsia-700 bg-amber-50 p-2">
          Food Category
        </h1>
      </div>
      <div className="flex flex-wrap justify-between my-2">
        <Button>
          <Text fontSize="xl" fontWeight="bold">
            Fruits and Vegetables
            <Badge ml="1" fontSize="0.8em" colorScheme="green">
              23
            </Badge>
          </Text>
        </Button>
        <Button>
          <Text fontSize="xl" fontWeight="bold">
            Meats and Proteins
            <Badge ml="1" fontSize="0.8em" colorScheme="green">
              5
            </Badge>
          </Text>
        </Button>
        <Button>
          <Text fontSize="xl" fontWeight="bold">
            Dairy
            <Badge ml="1" fontSize="0.8em" colorScheme="green">
              45
            </Badge>
          </Text>
        </Button>
        <Button>
          <Text fontSize="xl" fontWeight="bold">
            Grains
            <Badge ml="1" fontSize="0.8em" colorScheme="green">
              2
            </Badge>
          </Text>
        </Button>
      </div>
    </div>
  );
};

export default FoodCategory;
