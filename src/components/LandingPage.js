import { Container, Stack, Typography } from '@mui/material';
import React from 'react';
import marvelimage from '../marvel-characters.jpg.webp';

function LandingPage(props) {
	return (
		<Container
			maxWidth="lg"
			sx={{
				backgroundImage: `url(${marvelimage})`,
				background: 'linear-gradient(180deg, #ed1d24 0%, #1f1f1f 100%)',
				minHeight: '100vh',
				display: 'flex',
				alignItems: 'center',
			}}
		>
			<Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
				<Typography variant="h2">Hello Welcome to Marvel App!</Typography>
				<br />
				<Typography variant="h3" fontSize="32px">
					Navigate to see characters, series and comics of marvel
				</Typography>
				<br />
				<Typography variant="h6" fontSize="32px">
					This APP is a one stop app which helps you for searching your favorite character,Comics,
					and series of Marvel and also Show the individual details of each character, series and
					comic. Its built using React.js with marvel API.
				</Typography>
			</Stack>
		</Container>
	);
}

export default LandingPage;
