import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function useAxios(props) {
	const navigate = useNavigate();
	const [data, setData] = useState({ data: null, loading: true });
	const md5 = require('blueimp-md5');
	const publicKey = 'd1697d0c608295a4aa51a339a010b1a7';
	const privateKey = '0938611ce4226a17c06cf8890e36d78c108a54a0';
	const ts = new Date().getTime();
	const stringToHash = ts + privateKey + publicKey;
	const hash = md5(stringToHash);
	const baseUrl = props;
	const url = baseUrl + 'ts=' + ts + '&apikey=' + publicKey + '&hash=' + hash;

	useEffect(() => {
		async function getData() {
			try {
				setData({ data: await axios.get(url), loading: false });
			} catch (e) {
				navigate('/404');
			}
		}
		getData();
	}, [props]);
	return data;
}

export default useAxios;
