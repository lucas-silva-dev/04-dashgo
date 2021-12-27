import {
  Box,
  useBreakpointValue,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerBody,
} from '@chakra-ui/react';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';

export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer();
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg='gray.800' p='4'>
            <DrawerCloseButton mt='6' />

            <DrawerHeader>Navegação</DrawerHeader>

            <DrawerBody>
              <Sidebar />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Box as='aside' w='64' mr='8'>
      <Sidebar />
    </Box>
  );
}
