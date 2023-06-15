import {
	Flex,
	Icon,
	Link,
	Menu,
	MenuButton,
	Text,
	Tooltip,
} from '@chakra-ui/react';
import React from 'react';

export default function NavItem({ navSize, icon, title, active }) {
	return (
		<Flex
			mt={'5'}
			flexDir={'column'}
			w={'100%'}
			alignItems={navSize == 'small' ? 'center' : 'flex-start'}>
			<Menu placement='right'>
				<Link
					backgroundColor={active && 'primary'}
					p={3}
					borderRadius={'md'}
					_hover={{ textDecor: 'none', bg: 'primary' }}
					w={navSize === 'large' && '100%'}>
					<MenuButton w={'100%'}>
						<Flex>
							<Icon
								as={icon}
								fontSize={'xl'}
								color={active && 'white'}
							/>
							<Text
								color={active && 'white'}
								ml={5}
								transitionDuration={'0.5s'}
								transition={'all ease'}
								display={
									navSize == 'small' && 'none'
										
								}>
								{title}
							</Text>
						</Flex>
					</MenuButton>
				</Link>
			</Menu>
		</Flex>
	);
}
