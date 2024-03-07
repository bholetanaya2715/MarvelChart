import { Button, ButtonGroup } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Navi() {
	let navigate = useNavigate();
	return (
		<ButtonGroup variant="text" color="inherit" fullWidth={true}>
			<Button style={{ border: 0 }} onClick={() => navigate('/')} size="large">
				<b> Explore </b>
			</Button>
			<Button style={{ border: 0 }} onClick={() => navigate('/characters/page/0')} size="large">
				<b> Characters </b>
			</Button>
			<Button style={{ border: 0 }} onClick={() => navigate('/comics/page/0')} size="large">
				<b> Comics</b>
			</Button>
			<Button style={{ border: 0 }} onClick={() => navigate('/series/page/0')} size="large">
				<b> Series</b>
			</Button>
		</ButtonGroup>
	);
}

export default Navi;
