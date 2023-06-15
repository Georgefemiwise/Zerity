import React from 'react';
import SignupForm from '../components/Authentication/SignupForm';
import { Flex } from '@chakra-ui/react';

export default function SignupPage() {
	return (
		<Flex
			h={'100vh'}
			alignItems={'center'}
			justifyContent={'center'}>
			<Flex
				border={'solid 1px'}
				p={20}
				borderRadius={'lg'}
				minW={'30%'}>
				{/*the data or content component*/}
				<SignupForm />
			</Flex>
		</Flex>
	);
}
