import React, { useState } from 'react';
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
	NumberInput,
	Radio,
	RadioGroup,
	HStack,
	Select,
	NumberInputField,
	NumberIncrementStepper,
	NumberDecrementStepper,
	NumberInputStepper,
	Flex,
	Box,
	Heading,
	Button,
	Text,
	Link,
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

export default function SignupForm() {
	const [input, setInput] = useState('');

	const handleInputChange = (e) => setInput(e.target.value);

	const isError = input === '';

	const inputAttributes = [
		{
			name: 'firstName',
			type: 'text',
			value: '',
			label: 'First Name',
			onChange: '',
		},
		{
			name: 'lastName',
			type: 'text',
			value: '',
			label: 'Last Name',
			onChange: '',
		},
		{
			name: 'email',
			type: 'email',
			value: '',
			label: 'Email Address',
			onChange: '',
		},
		// {
		// 	name: 'cause',
		// 	type: 'text',
		// 	value: '',
		// 	label: 'Course',
		// 	onChange: '',
		// },
		// {
		// 	name: 'program',
		// 	type: 'text',
		// 	value: '',
		// 	label: 'Program',
		// 	onChange: '',
		// },
		// {
		// 	name: 'year',
		// 	type: 'number',
		// 	value: '',
		// 	label: 'Year',
		// 	onChange: '',
		// },

		// {
		// 	name: 'level',
		// 	type: 'number',
		// 	value: 'Level',
		// 	label: 'Level',
		// 	onChange: '',
		// },
		// {
		// 	name: 'index',
		// 	type: 'number',
		// 	value: '',
		// 	label: 'Index',
		// 	onChange: '',
		// },
	];

	return (
		<>
			<Box>
				<Heading mb={10}>Sign up</Heading>
				<Flex direction={'column'}>
					{inputAttributes.map((attribute, index) => (
						<FormControl
						key={index}
							mb={'1em'}
							isInvalid={false}
							isRequired>
							<FormLabel>{attribute.label}</FormLabel>
							<Input
								type={attribute.type}
								onChange={handleInputChange}
								name={attribute.name}
							/>
							<FormHelperText>
								Lorem ipsum dolor sit amet.
							</FormHelperText>
						</FormControl>
					))}
					<Button
						w={'md'}
						type='submit'>
						Submit
					</Button>
					<Text>
						Have Account?{' '}
						<Link
							as={ReachLink}
							to={'/login'}
							color={'primary'}>
							Log In
						</Link>
					</Text>
				</Flex>
			</Box>

			{/* ------------------------------------------------ */}
			{/* <FormControl>
				<FormLabel>Amount</FormLabel>
				<NumberInput
					max={50}
					min={10}>
					<NumberInputField />
					<NumberInputStepper>
						<NumberIncrementStepper />
						<NumberDecrementStepper />
					</NumberInputStepper>
				</NumberInput>
			</FormControl> */}
			{/* ------------------------------------------------ */}
			{/* <FormControl>
				<FormLabel>Country</FormLabel>
				<Select placeholder='Select country'>
					<option>United Arab Emirates</option>
					<option>Nigeria</option>
				</Select>
			</FormControl> */}
			{/* ------------------------------------------------ */}
			{/* <FormControl isRequired>
				<FormLabel>First name</FormLabel>
				<Input placeholder='First name' />
			</FormControl> */}
			{/* ------------------------------------------------ */}
			{/* <FormControl as='fieldset'>
				<FormLabel as='legend'>Favorite Naruto Character</FormLabel>
				<RadioGroup defaultValue='Itachi'>
					<HStack spacing='24px'>
						<Radio value='Sasuke'>Sasuke</Radio>
						<Radio value='Nagato'>Nagato</Radio>
						<Radio value='Itachi'>Itachi</Radio>
						<Radio value='Sage of the six Paths'>
							Sage of the six Paths
						</Radio>
					</HStack>
				</RadioGroup>
				<FormHelperText>
					Select only if you're a fan.
				</FormHelperText>
			</FormControl> */}
			{/* ------------------------------------------------ */}
			{/* ------------------------------------------------ */}
		</>
	);
}
