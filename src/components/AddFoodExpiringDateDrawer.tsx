import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { BsCalendar2Date } from "react-icons/bs";

const AddFoodExpiringDateDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="w-full h-full">
      <Button colorScheme="teal" onClick={onOpen}>
        Enter Expiring Date
        <BsCalendar2Date className="mx-2" />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Add Expiring Date</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={onClose}>
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default AddFoodExpiringDateDrawer;
