import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
	Flex,
	VStack,
	Heading,
	Button,
	Text,
	Link,
	CheckboxIcon,
	GenericAvatarIcon,
	AlertIcon,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link as ReachLink } from 'react-router-dom';

export default function LoginForm() {
	const [values, setValues] = useState({
		email: '',
		password: '',
	});
	// handles any change made on inputs such as words typed
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setValues((prevValues) => ({
			...prevValues,
			[name]: value,
		}));
	};
	const errorMsg = ({value}) => {
		
		if (value === undefined || value === '') {
			return false;
		}
	};

	console.log(values);
	return (
		<VStack>
			<Heading
				mb={8}
				textColor={'text'}>
				Log in
			</Heading>
			<FormControl
				isInvalid={errorMsg(values.email)}
				>
				<FormLabel>Email</FormLabel>
				<Input
					type='email'
					value={values.email}
					name='email'
					onChange={handleInputChange}
				/>
				{!errorMsg(values.email) ? (
					<FormHelperText>
						Enter the email you'd like to receive the
						newsletter on.
					</FormHelperText>
				) : (
					<FormErrorMessage>Email is required.</FormErrorMessage>
				)}
			</FormControl>
			<FormControl isInvalid={errorMsg(values.password)}>
				<FormLabel>Password</FormLabel>
				<Input
					type='password'
					value={values.password}
					onChange={handleInputChange}
					
					name='password'
				/>
				{values.password.length < 6 ? (
					<FormHelperText>
						Password must be at least 6 characters
					</FormHelperText>
				) : (
					<FormErrorMessage>Email is required.</FormErrorMessage>
				)}
			</FormControl>
			<Button
				isLoading={false}
				onClick={''}
				justifySelf={'left'}
				w={'md'}
				mt={4}>
				Submit
			</Button>
			<Text>
				Dont have an account?{' '}
				<Link
					as={ReachLink}
					to={'/signup'}
					color={'primary'}>
					Sign up{' '}
				</Link>
			</Text>
		</VStack>
	);
}
