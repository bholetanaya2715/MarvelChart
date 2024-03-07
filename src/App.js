import { AppBar, CssBaseline, Fab, Grid, Toolbar, Typography } from '@mui/material';
import './App.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Navi from './components/Navi';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AllComics from './components/AllComics';
import AllCharacters from './components/AllCharacters';
import AllSeries from './components/AllSeries';
import LandingPage from './components/LandingPage';
import Error from './components/Error';
import IndividualCharacter from './components/IndividualCharacter';
import { useState, useEffect } from 'react';
import IndividualSeries from './components/IndividualSeries';
import IndividualComic from './components/IndividualComic';
import marvelimage from './marvel-characters.jpg.webp';

function App() {
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.pageYOffset > 200) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		});
	}, []);
	return (
		<Router>
			<CssBaseline />
			<div
				style={{
					backgroundImage: `url(${marvelimage})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					minHeight: '100vh', // Ensure the background covers the entire viewport
				}}
			>
				<AppBar
					position="sticky"
					sx={{ marginBottom: 5 }}
					style={{ background: 'linear-gradient(180deg, #ed1d24 0%, #1f1f1f 100%)' }}
				>
					<Toolbar disableGutters>
						<Grid container spacing={1} marginTop={0}>
							<Grid
								item
								xs={1}
								textAlign="right"
								sx={{ paddingRight: '30px', paddingLeft: '10px' }}
							>
								<AcUnitIcon sx={{ fontSize: 35 }} />
							</Grid>

							<Grid item xs={6} padding={1}>
								<Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
									<Typography variant="h1" fontSize="26px" style={{ fontFamily: 'cursive' }}>
										<b>My React Marvel App</b>
									</Typography>
								</Link>
							</Grid>
							<Grid item xs={4} marginRight="5px">
								<Navi />
							</Grid>
						</Grid>
					</Toolbar>
				</AppBar>
				<Routes>
					<Route exact path="/" element={<LandingPage />} />
					<Route exact path="/comics/page/:pageNum" element={<AllComics />} />
					<Route exact path="/comics/:id" element={<IndividualComic />} />
					<Route exact path="/characters/page/:pageNum" element={<AllCharacters />} />
					<Route exact path="/characters/:id" element={<IndividualCharacter />} />
					<Route exact path="/series/page/:pageNum" element={<AllSeries />} />
					<Route exact path="/series/:id" element={<IndividualSeries />} />
					<Route path="*" element={<Error />} />
				</Routes>
				<footer style={{ marginBottom: '50px' }}>
					{showButton && (
						<Fab
							style={{
								position: 'absoulute',
								right: 0,
								bottom: 0,
								margin: '35px',
								zIndex: 11,
								background: 'linear-gradient(180deg, #ed1d24 0%, #1f1f1f 100%)',
								color: 'white',
								textShadow: '1px 1px 1px black', // Optional: add text shadow for better contrast
							}}
							aria-label="scroll to top"
							onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
						>
							go to top
						</Fab>
					)}
				</footer>
			</div>
		</Router>
	);
}

export default App;
