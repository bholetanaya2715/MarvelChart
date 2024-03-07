import { Button, ButtonGroup, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Navi() {
	const navigate = useNavigate();
	const isLargeScreen = useMediaQuery('(min-width:600px)');

	return (
		<ButtonGroup
			variant="text"
			color="inherit"
			fullWidth={!isLargeScreen}
			sx={{ display: 'flex', flexDirection: isLargeScreen ? 'row' : 'column' }}
		>
			<Button
				style={{ border: 0, minWidth: 'auto', fontFamily: 'cursive' }}
				onClick={() => navigate('/')}
				size="large"
				sx={{ flexGrow: 1 }}
			>
				<b>Explore</b>
			</Button>
			<Button
				style={{ border: 0, minWidth: 'auto', fontFamily: 'cursive' }}
				onClick={() => navigate('/characters/page/0')}
				size="large"
				sx={{ flexGrow: 1 }}
			>
				<b>Characters</b>
			</Button>
			<Button
				style={{ border: 0, minWidth: 'auto', fontFamily: 'cursive' }}
				onClick={() => navigate('/comics/page/0')}
				size="large"
				sx={{ flexGrow: 1 }}
			>
				<b>Comics</b>
			</Button>
			<Button
				style={{ border: 0, minWidth: 'auto', fontFamily: 'cursive' }}
				onClick={() => navigate('/series/page/0')}
				size="large"
				sx={{ flexGrow: 1 }}
			>
				<b>Series</b>
			</Button>
		</ButtonGroup>
	);
}

export default Navi;
