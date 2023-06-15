import { Link as ReachLink } from 'react-router-dom';
import {
	Box,
	Button,
	Container,
	Flex,
	HStack,
	Heading,
	Text,
	useColorMode,
	ButtonGroup,
	IconButton,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from '@chakra-ui/react';

import { FaGithub, FaMoon, FaSun } from 'react-icons/fa';

export default function HomePage() {
	const { toggleColorMode } = useColorMode();
	const [toggleColorModeIcon, setToggleColorModeIcon] = useState(false);

	return (
		<Box>
			<Flex
				minH={'2rem'}
				alignItems={'center'}
				py={'2'}
				justifyContent={'space-around'}>
				<Box
					fontSize={20}
					fontWeight={'extrabold'}>
					<Link>Zerity</Link>
				</Box>

				
				<ButtonGroup
					size='sm'
					variant='solid'>
					{/* <IconButton
						aria-label='Add to friends'
						icon={<FaSun />}
					/> */}
					<IconButton
						aria-label='Add to friends'
						icon={<FaGithub />}
					/>
					<IconButton
						aria-label='toggle theme mode'
						icon={
							toggleColorModeIcon ? <FaMoon /> : <FaSun />
						}
						onClick={() => {
							toggleColorMode();
							setToggleColorModeIcon(!toggleColorModeIcon);
						}}
					/>
				</ButtonGroup>
			</Flex>

			<Container
				maxW='container.lg'
				minH={'80vh'}
				mt={'8rem'}>
				<Flex
					direction={'column'}
					h={'full'}
					alignItems={'center'}>
					<Heading
						fontSize={'6xl'}
						fontWeight={'extrabold'}
						lineHeight={1}
						color={'text'}
						textAlign={'center'}>
						<Text> Paperless way of </Text> writing code in
						exams!
					</Heading>
					<Text
						fontSize={'large'}
						fontStyle={'italic'}
						mt={'2rem'}
						color={'text'}
						textAlign={'center'}
						w={'40rem'}>
						Say goodbye to the limitations of traditional pen
						and paper, and experience the freedom to focus on
						your code, with no distractions or limitations.
					</Text>
					<HStack mt={5}>
						<Button
							variant={'solid'}
							color={'white'}
							bg={'primary'}
							_hover={{
								backgroundColor: '#ab3400f',
							}}>
							<Link
								as={ReachLink}
								fontStyle={'unset'}
								to='/login'
								_hover={{
									fontStyle: 'none',
								}}>
								Get Started
							</Link>
						</Button>

						<Button
							border={'solid 1px black'}
							_hover={{
								borderColor: ' primary',
							}}>
							learn more
						</Button>
					</HStack>
				</Flex>
			</Container>
		</Box>
	);
}
