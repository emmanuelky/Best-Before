import { Badge, HStack, VStack } from "@chakra-ui/layout";
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const FoodCategory = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <div>
        <h1 className="text-center text-2xl shadow-2xl rounded-lg text-white bg-orange-500 p-2">
          Food Category
        </h1>
      </div>
      <VStack className="flex flex-wrap flex-start justify-between my-2">
        <Button onClick={onOpen}>
          <Text fontSize="xl" fontWeight="bold">
            Dairy
            <Badge ml="1" fontSize="0.8em" colorScheme="green">
              45
            </Badge>
          </Text>
        </Button>
        <Button onClick={onOpen}>
          <Text fontSize="xl" fontWeight="bold">
            Grains
            <Badge ml="1" fontSize="0.8em" colorScheme="green">
              2
            </Badge>
          </Text>
        </Button>
        <Button onClick={onOpen}>
          <Text fontSize="xl" fontWeight="bold">
            Fruits and Vegetables
            <Badge ml="1" fontSize="0.8em" colorScheme="green">
              23
            </Badge>
          </Text>
        </Button>
        <Button onClick={onOpen}>
          <Text fontSize="xl" fontWeight="bold">
            Meats and Proteins
            <Badge ml="1" fontSize="0.8em" colorScheme="green">
              5
            </Badge>
          </Text>
        </Button>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h4>item</h4>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default FoodCategory;
