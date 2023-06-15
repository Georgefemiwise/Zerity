import React from 'react';
import { Box, Flex, Grid, GridItem, SimpleGrid } from '@chakra-ui/react';
import Sidebar from '../components/Layout/SideBar/Sidebar';
import TopBar from '../components/Layout/TopBar/Topbar';
import Main from '../components/Layout/Main/Main';

export default function DashboardPage() {
	return (
		<Flex>
			<Sidebar />
			<Flex
				flexDir={'column'}
				border='1px solid gray'
				ml={10}>
				<TopBar />
				<Main />
			</Flex>
		</Flex>
	);
}
