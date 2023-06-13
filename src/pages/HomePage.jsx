import { Link as ReachLink } from 'react-router-dom';
import {
	Box,
	Button,
	Center,
	Container,
	Flex,
	HStack,
	Heading,
	Text,
	VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from '@chakra-ui/react';
import GithubIcon from '../assets/icons';

export default function HomePage() {
	return (
		<Box>
			<Flex
				bg={'brand'}
				minH={'2rem'}
				px={'8'}
				alignItems={'center'}
				py={'4'}
				justifyContent={'space-around'}>
				<Box
					color={'white'}
					fontWeight={'extrabold'}>
					<Link>Zerity</Link>
				</Box>

				<Box>
					<GithubIcon
						color='white'
						fontSize='1.2rem'
						cursor='pointer'
					/>
					<Button
						ml={'5'}
						variant={'solid'}>
						<Link
							as={ReachLink}
							fontStyle={'unset'}
							to='/signup'>
							Sign up
						</Link>
					</Button>
				</Box>
			</Flex>

			<Container
				maxW='container.lg'
				minH={'80vh'}
				mt={'8rem'}>
				<Center h={'full'}>
					<Flex direction={'column'}>
						<Heading
							fontSize={'7xl'}
							fontWeight={'extrabold'}
							lineHeight={1}
							color={'text'}>
							Code effortlessly: Go paperless during exams!
						</Heading>
						<Text
							fontSize={'large'}
							fontStyle={'italic'}
							mt={'2rem'}
							color={'text'}>
							Say goodbye to tirelessly writing code on
							paper; our forward-thinking platform enables
							you to write code effortlessly and
							efficiently, directly on the digital
							interface. Say goodbye to the limitations of
							traditional pen and paper, and embrace a new
							era of convenience and productivity.
							Experience the freedom to focus on your code,
							with no distractions or limitations.
						</Text>
						<HStack mt={5}>
							<Button colorScheme='gray'>
								Get Started
							</Button>
							<Button variant={'outline'}>
								learn more
							</Button>
						</HStack>
					</Flex>
				</Center>
			</Container>
		</Box>
	);
}
