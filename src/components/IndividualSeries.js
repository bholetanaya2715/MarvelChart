import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import useAxios from '../Utilis/useAxios';
import useStyles from '../Styles';
import {
	Container,
	CardHeader,
	LinearProgress,
	Typography,
	CardMedia,
	CardContent,
	Card,
	Button,
} from '@mui/material';
import '../App.css';

function IndividualSeries(props) {
	const navigate = useNavigate();
	const { id } = useParams();
	const { data, loading } = useAxios(`https://gateway.marvel.com:443/v1/public/series/${id}?`);
	const classes = useStyles();
	const showData = data && data.data.data.results[0];
	let individualSeriesCard = null;
	let seriesCardLink = null;
	let c = null;
	if (loading) {
		return (
			<Container maxWidth="sm">
				<Typography variant="h6">Hold your horses its Loading...</Typography>
				<LinearProgress />
			</Container>
		);
	} else {
		seriesCardLink = (items) => {
			return items.map((item) => {
				c = item.resourceURI.split('/');
				return (
					<dd key={item.resourceURI} className={classes.characterDD}>
						<Link to={'/' + c[c.length - 2] + '/' + c[c.length - 1]} className="charlink">
							{item.name}
						</Link>
					</dd>
				);
			});
		};
		individualSeriesCard = (items) => {
			return items.map((item) => {
				c = item.resourceURI.split('/');
				return (
					<dd key={item.resourceURI} className={classes.characterDD}>
						{item.name}
					</dd>
				);
			});
		};
		return (
			<Card className={classes.charCard} variant="outlined">
				<CardHeader className={classes.title} title={showData.name} />
				<CardMedia
					className={classes.image}
					component="img"
					image={showData.thumbnail.path + '.' + showData.thumbnail.extension}
					title={showData.name}
				/>

				<CardContent>
					<Typography variant="h6" color="textSecondary" component="span" className={classes.desc}>
						<dl>
							<div>
								<dt className={classes.characterDt}> Description:</dt>
								{showData && showData.description ? (
									<dd className={classes.characterDD}>{showData.description}</dd>
								) : (
									<dd className={classes.characterDD}>N/A</dd>
								)}
							</div>
							<div>
								<dt className={classes.characterDt}> Comics:</dt>
								{showData && showData.comics.available > 0 ? (
									seriesCardLink(showData.comics.items)
								) : (
									<div className={classes.characterDD}>N/A</div>
								)}
							</div>
							<div>
								<dt className={classes.characterDt}> Events:</dt>
								{showData && showData.events.available > 0 ? (
									individualSeriesCard(showData.events.items)
								) : (
									<dd className={classes.characterDD}>N/A</dd>
								)}
							</div>
							<div>
								<dt className={classes.characterDt}> Stories:</dt>
								{showData && showData.stories.available > 0 ? (
									individualSeriesCard(showData.stories.items)
								) : (
									<dd className={classes.characterDD}>N/A</dd>
								)}
							</div>
							<div>
								<dt className={classes.characterDt}> Characters:</dt>
								{showData && showData.characters.available > 0 ? (
									seriesCardLink(showData.characters.items)
								) : (
									<dd className={classes.characterDD}>N/A</dd>
								)}
							</div>
							<div>
								<dt className={classes.characterDt}> Creators:</dt>
								{showData && showData.creators.available > 0 ? (
									individualSeriesCard(showData.creators.items)
								) : (
									<dd className={classes.characterDD}>N/A</dd>
								)}
							</div>
						</dl>
					</Typography>
				</CardContent>
				<Button
					variant="contained"
					style={{
						marginBottom: '30px',
						background: 'linear-gradient(180deg, #ed1d24 0%, #1f1f1f 100%)',
						color: 'white',
						textShadow: '1px 1px 1px black', // Optional: add text shadow for better contrast
					}}
					onClick={() => navigate('/series/page/0')}
				>
					Go Back to Series main page
				</Button>
			</Card>
		);
	}
}

export default IndividualSeries;
