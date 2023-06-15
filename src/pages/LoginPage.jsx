import React from 'react';
import LoginForm from '../components/Authentication/LoginForm';
import { Flex } from '@chakra-ui/react';

export default function LoginPage() {
	return (
		// here is the layout
		<Flex
			h={'100vh'}
			alignItems={'center'}
			justifyContent={'center'}>
			<Flex
				border={'solid 1px'}
				p={20}
				borderRadius={'lg'}minW={'30%'}>
				<LoginForm /> {/*the data or content component*/}
			</Flex>
		</Flex>
	);
}
