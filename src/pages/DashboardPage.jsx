import React from 'react';
import { Box, Flex, Grid, GridItem, SimpleGrid } from '@chakra-ui/react';
import Sidebar from '../components/Layout/SideBar/Sidebar';
import Main from '../components/Layout/Main/Main';

export default function DashboardPage() {
	return (
		<Flex>
			<Sidebar />
			<Main />
		</Flex>
	);
}
