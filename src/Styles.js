import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	paginationText: {
		fontWeight: 'lighter',
	},
	divider: {
		marginBottom: 35,
		marginLeft: 55,
		marginRight: 55,
	},
	pagination: {
		textAlign: 'center',
		paddingBottom: 25,
		justifyContent: 'center',
		alignItems: 'center',
		color: 'violet',
	},
	pageTitle: {
		fontWeight: 'lighter',
	},
	card: {
		maxWidth: 250,
		height: 'auto',
		marginLeft: 'auto',
		marginRight: 'auto',
		borderRadius: 5,
		border: '1px solid #1e8678',
		boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);',
	},
	charCard: {
		textAlign: 'center',
		width: '40%',
		marginLeft: 'auto',
		marginRight: 'auto',
		borderRadius: 5,
		boxShadow: '0 10px 15px rgb(0 0 0 / 30%), 0 0px 0px rgb(0 0 0 / 22%);',
	},
	titleHead: {
		borderBottom: '1px solid #1e8678',
		textAlign: 'center',
		height: '35px',
		overflow: 'hidden',
		fontWeight: 'lighter',
	},
	title: {
		textAlign: 'center',
		height: '40px',
		overflow: 'hidden',
		margin: '15px',
	},
	titleDesc: {
		borderBottom: '1px solid #1e8678',
		textAlign: 'center',
		overflow: 'hidden',
		fontWeight: 'lighter',
		height: '100px',
	},
	desc: {
		textAlign: 'center',
		height: '30px',
		fontWeight: 'lighter',
		overflow: 'hidden',
	},
	grid: {
		flexGrow: 1,
		flexDirection: 'row',
	},
	media: {
		height: '200px',
		width: '100%',
	},
	image: {
		marginLeft: 'auto',
		marginRight: 'auto',
		height: '60%',
		width: '60%',
	},
	button: {
		color: '#d18484',
		fontWeight: 'bold',
		fontSize: 14,
	},
	characterDt: {
		fontWeight: 'bold',
		background: 'antiquewhite',
		padding: '5px',
		color: 'Pink',
	},
	characterDD: {
		margin: '2px',
		fontSize: '18px',
		color: 'black',
	},
});

export default useStyles;
