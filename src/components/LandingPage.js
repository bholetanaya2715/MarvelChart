import { Container, Stack, Typography } from '@mui/material';
import React from 'react';

function LandingPage(props) {
	return (
		<Container maxWidth="lg">
			<Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
				<Typography variant="h2">Welcome to Marvel App react Lab4!</Typography>
				<Typography variant="h3" fontSize="32px">
					Navigate to see characters, series and comics of marvel
				</Typography>
				<Typography variant="h4" fontSize="32px">
					This APP helps you for searching your favorite character,Comics, and series of Marvel and
					also Show the individual details of each character, series and comic
				</Typography>
			</Stack>
		</Container>
	);
}

export default LandingPage;
