import {
	Flex,
	Menu,
	MenuButton,
	MenuGroup,
	MenuDivider,
	MenuItem,
	MenuList,
	Button
} from '@chakra-ui/react';

export default function TopBar() {
	return (
		<Flex
			pos={'sticky'}
			bg=''
			w={'100%'}
			h={'50px'}
			boxShadow={'0 4px 12px 0 rgba(0, 0, 0, 0.1)'}
			flexDir={'row'}
			borderRadius={'sm'}
			alignItems={'center'}
			justifyContent={'space-between'}
			transition={'ease-out'}
			transitionDuration={'0.3s'}>
			<Flex></Flex>
			<Flex>
				<Menu placement='left-end'>
					<MenuButton
						as={Button}
						colorScheme='pink'>
						Profile
					</MenuButton>
					<MenuList>
						<MenuGroup title='Profile'>
							<MenuItem>My Account</MenuItem>
							<MenuItem>Payments </MenuItem>
						</MenuGroup>
						<MenuDivider />
						<MenuGroup title='Help'>
							<MenuItem>Docs</MenuItem>
							<MenuItem>FAQ</MenuItem>
						</MenuGroup>
					</MenuList>
				</Menu>
			</Flex>
		</Flex>
	);
}
