import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import useAxios from '../Utilis/useAxios';
import {
	Container,
	Grid,
	LinearProgress,
	Typography,
	CardMedia,
	CardContent,
	Card,
	CardActionArea,
	Divider,
	Button,
} from '@mui/material';
import '../App.css';
import useStyles from '../Styles';
import SearchFunc from './SearchFunc';
function AllSeries(props) {
	let navigate = useNavigate();
	const classes = useStyles();
	const { pageNum } = useParams();
	const [searchTerm, setSearchTerm] = useState(null);
	const [searchUrl, setSearchUrl] = useState(
		`https://gateway.marvel.com:443/v1/public/series?offset=${pageNum * 20}&`
	);
	let { data, loading } = useAxios(searchUrl);
	useEffect(() => {
		if (!searchTerm) {
			if (pageNum < 0) {
				navigate('/404');
			}
			setSearchUrl(`https://gateway.marvel.com:443/v1/public/series?offset=${pageNum * 20}&`);
		} else {
			setSearchUrl(
				`https://gateway.marvel.com:443/v1/public/series?titleStartsWith=${searchTerm}&`
			);
		}
	}, [searchTerm, pageNum, navigate]);
	useEffect(() => {
		if (data && data.data.data.offset >= data.data.data.total && data.data.data.total > 0) {
			navigate('/404');
		}
	}, [data, navigate]);
	let Allseries = data && data.data.data.results;
	let card = null;
	const searchValue = (data) => {
		setSearchTerm(data);
	};
	function buildCard(series) {
		return (
			<Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={series.id}>
				<Card className={classes.card} variant="outlined">
					<CardActionArea>
						<Link to={`/series/${series.id}`} className="cardlink">
							<CardMedia
								className={classes.media}
								component="img"
								image={series.thumbnail.path + '.' + series.thumbnail.extension}
								title={series.name}
							/>
							<CardContent>
								<Typography className={classes.titleHead} component="h4">
									{series.title}
								</Typography>
								<Typography className={classes.titleDesc}>
									{series.description ? series.description : 'Description : Not Available'}
								</Typography>

								<Typography className={classes.desc}>
									Creators :{' '}
									{series.creators.available ? series.creators.available : 'Not Available'}
								</Typography>
								<Typography className={classes.desc}>
									Stories : {series.stories.available ? series.stories.available : 'Not Available'}
								</Typography>
							</CardContent>
						</Link>
					</CardActionArea>
				</Card>
			</Grid>
		);
	}
	if (loading) {
		return (
			<Container maxWidth="sm">
				<Typography variant="h6">Hold your horses its Loading...</Typography>
				<LinearProgress />
			</Container>
		);
	} else {
		card =
			data &&
			Allseries.map((series) => {
				return buildCard(series);
			});
		return (
			<>
				<Typography
					variant="h2"
					fontSize="32px"
					p={3}
					textAlign="center"
					gutterBottom
					className={classes.pageNumTitle}
					style={{ textTransform: 'uppercase', fontFamily: 'cursive' }}
				>
					<b> All Marvel Series </b>
				</Typography>
				<SearchFunc searchValue={searchValue} />
				<Grid container className={classes.pagination}>
					<Grid item sm={4}>
						{pageNum <= '0' ? (
							<Button
								variant="contained"
								disabled
								style={{
									background: 'linear-gradient(180deg, #ed1d24 0%, #1f1f1f 100%)',
									color: 'white',
									textShadow: '1px 1px 1px black', // Optional: add text shadow for better contrast
								}}
							>
								go to Previous
							</Button>
						) : (
							<Button
								variant="contained"
								onClick={() => navigate(`/series/page/${pageNum * 1 - 1}`)}
								style={{
									background: 'linear-gradient(180deg, #ed1d24 0%, #1f1f1f 100%)',
									color: 'white',
									textShadow: '1px 1px 1px black', // Optional: add text shadow for better contrast
								}}
							>
								go to Previous
							</Button>
						)}
					</Grid>
					<Grid item sm={3}>
						<Typography variant="h3" fontSize="24px" className={classes.paginationText}>
							current page : {pageNum}
						</Typography>
					</Grid>
					<Grid item sm={4}>
						{data && pageNum * 20 + 20 >= data.data.data.total ? (
							<Button
								variant="contained"
								disabled
								style={{
									background: 'linear-gradient(180deg, #ed1d24 0%, #1f1f1f 100%)',
									color: 'white',
									textShadow: '1px 1px 1px black', // Optional: add text shadow for better contrast
								}}
							>
								go to Next
							</Button>
						) : (
							<Button
								variant="contained"
								onClick={() => navigate(`/series/page/${pageNum * 1 + 1}`)}
								style={{
									background: 'linear-gradient(180deg, #ed1d24 0%, #1f1f1f 100%)',
									color: 'white',
									textShadow: '1px 1px 1px black', // Optional: add text shadow for better contrast
								}}
							>
								go to Next
							</Button>
						)}
					</Grid>
				</Grid>
				<Divider className={classes.divider} variant="middle" />
				<Grid container className={classes.grid} spacing={5}>
					{card}
				</Grid>
			</>
		);
	}
}

export default AllSeries;
