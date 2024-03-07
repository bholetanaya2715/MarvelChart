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

function IndividualComic(props) {
	const regex = /(<([^>]+)>)/gi;
	const navigate = useNavigate();
	const { id } = useParams();
	const { data, loading } = useAxios(`https://gateway.marvel.com:443/v1/public/comics/${id}?`);
	const classes = useStyles();
	const showData = data && data.data.data.results[0];
	let mcomicCard = null;
	let comicCardLink = null;
	let pCard = null;
	let showSeries = null;
	let c = null;
	if (loading) {
		return (
			<Container maxWidth="sm">
				<Typography variant="h6">Hold your horses its Loading...</Typography>
				<LinearProgress />
			</Container>
		);
	} else {
		comicCardLink = (items) => {
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
		pCard = (prices) => {
			return prices.map((price) => {
				return (
					<dd key={price.type} className={classes.characterDD}>
						{price.type} : $ {price.price}
					</dd>
				);
			});
		};
		mcomicCard = (items) => {
			return items.map((item) => {
				return (
					<dd key={item.resourceURI} className={classes.characterDD}>
						{item.name}
					</dd>
				);
			});
		};
		showSeries = (series) => {
			c = series.resourceURI.split('/');
			return (
				<dd className={classes.characterDD}>
					<Link to={'/' + c[c.length - 2] + '/' + c[c.length - 1]} className="charlink">
						{series.name}
					</Link>
				</dd>
			);
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
									<dd className={classes.characterDD}>{showData.description.replace(regex, '')}</dd>
								) : (
									<dd className={classes.characterDD}>N/A</dd>
								)}
							</div>
							<div>
								<dt className={classes.characterDt}> Series:</dt>
								{showData && showData.series ? (
									showSeries(showData.series)
								) : (
									<div className={classes.characterDD}>N/A</div>
								)}
							</div>
							<div>
								<dt className={classes.characterDt}> Prices:</dt>
								{showData && showData.prices ? (
									pCard(showData.prices)
								) : (
									<div className={classes.characterDD}>N/A</div>
								)}
							</div>
							<div>
								<dt className={classes.characterDt}> Events:</dt>
								{showData && showData.events.available > 0 ? (
									mcomicCard(showData.events.items)
								) : (
									<dd className={classes.characterDD}>N/A</dd>
								)}
							</div>
							<div>
								<dt className={classes.characterDt}> Stories:</dt>
								{showData && showData.stories.available > 0 ? (
									mcomicCard(showData.stories.items)
								) : (
									<dd className={classes.characterDD}>N/A</dd>
								)}
							</div>
							<div>
								<dt className={classes.characterDt}> Characters:</dt>
								{showData && showData.characters.available > 0 ? (
									comicCardLink(showData.characters.items)
								) : (
									<dd className={classes.characterDD}>N/A</dd>
								)}
							</div>
							<div>
								<dt className={classes.characterDt}> Creators:</dt>
								{showData && showData.creators.available > 0 ? (
									mcomicCard(showData.creators.items)
								) : (
									<dd className={classes.characterDD}>N/A</dd>
								)}
							</div>
						</dl>
					</Typography>
				</CardContent>
				<Button
					variant="contained"
					style={{ marginBottom: '30px' }}
					onClick={() => navigate('/comics/page/0')}
				>
					Go Back to Comics main page
				</Button>
			</Card>
		);
	}
}

export default IndividualComic;
