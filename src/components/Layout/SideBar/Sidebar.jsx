import {
	Avatar,
	Divider,
	Flex,
	Heading,
	IconButton,
	Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaHamburger, FaHome } from 'react-icons/fa';
import NavItem from './NavItem';
import { FaUserTag } from 'react-icons/fa';
import { FaAmilia } from 'react-icons/fa';
import { FaMale } from 'react-icons/fa';
import { FaGamepad } from 'react-icons/fa';

export default function Sidebar() {
	const [navSize, ChangeNavSize] = useState('small');
	return (
		<Flex
			pos={'sticky'}
			left={'5'}
			h={'95vh'}
			marginTop={'2.1vh'}
			w={navSize == 'small' ? '70px' : '200px'}
			boxShadow={'0 4px 12px 0 rgba(0, 0, 0, 0.1)'}
			flexDir={'column'}
			borderRadius={'sm'}
			justifyContent={'space-between'}
			transition={'ease-out'}
			transitionDuration={'0.3s'}
			>
			<Flex
				as={'nav'}
				flexDir={'column'}
				alignItems={navSize == 'small' ? 'center' : 'flex-start'}
				px={3}>
				<IconButton
					variant={'outline'}
					bg={'blackAlpha.100'}
					mt={5}
					_hover={{ background: 'none' }}
					icon={<FaHamburger />}
					onClick={() => {
						if (navSize === 'small') {
							ChangeNavSize('large');
						} else {
							ChangeNavSize('small');
						}
					}}
				/>

				{/* navitems */}

				<NavItem
					navSize={navSize}
					active
					icon={FaHome}
					title={'Dashboard'}
				/>
				<NavItem
					navSize={navSize}
					icon={FaUserTag}
					title={'account'}
				/>
				<NavItem
					navSize={navSize}
					icon={FaAmilia}
					title={'jammmu'}
				/>
				<NavItem
					navSize={navSize}
					icon={FaMale}
					title={'details'}
				/>
				<NavItem
					navSize={navSize}
					icon={FaGamepad}
					title={'code'}
				/>
			</Flex>

			<Flex
				p={'5%'}
				flexDir={'column'}
				w={'100%'}
				alignItems={navSize == 'small' ? 'center' : 'flex-start'}
				mb={4}>
				<Divider display={navSize == 'small' ? 'none' : 'flex'} />
				<Flex
					mt={4}
					align={'center'}>
					<Avatar size={'sm'} />
					<Flex
						display={navSize == 'small' ? 'none' : 'flex'}
						flexDir={'column'}
						ml={4}>
						<Heading
							as={'h3'}
							size={'sm'}>
							Sylvia weller
						</Heading>
						<Text color={'gray'}>Admin</Text>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
}
