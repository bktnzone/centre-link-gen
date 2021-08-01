import Head from 'next/head'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { stringify } from 'querystring';
import Footer from '../components/footer';
import useSWR from 'swr';


const preventDefault = (f) => (e) => {
	e.preventDefault();
	f(e);
};




const base_url =
	'https://script.google.com/macros/s/AKfycbwaJwpjxblNfvEhkVCXgZCjJvnN0oh1LJAo-QJDGIytmm90LyIn/exec';
//`https://script.google.com/macros/s/AKfycbwaJwpjxblNfvEhkVCXgZCjJvnN0oh1LJAo-QJDGIytmm90LyIn/exec`;

const sleep = (milliseconds) => {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

export default function Home({ action = '/bcard' }) {


	const router = useRouter();
	const [query, setQuery] = useState('');
	const [lang, setLang] = useState('eng-mal');

	
	const { data, error } = useSWR(url, fetcher);


	const [langs, setLangs] = useState([{ name: 'Hindi', code: 'hin' }, { name: 'Malayalam', code: 'mal' }, { name: 'Tamil', code: 'tam' }, { name: 'English', code: 'eng' }]);
	const handleParam = (setValue) => (e) => {
		setValue(e.target.value);
	};

	useEffect((e) => {

		//setLangs([{ name: 'Tamil', code: 'tam', name: 'English', code: 'eng' }]);

	}, []);

	const handleSubmit = preventDefault(() => {
		// Show Progress
		router.push({
			pathname: action,
			query: {
				q: query,
				l: lang,
			},
		});
	});

	const verifyPIN = async (pinValue) => {
		const params = { action: 'verify-pin', data: { pin: pinValue } };
		const res = await fetch(`${base_url}?d=${JSON.stringify(params)}`);
		const data = await res.json();
		return data;
	};

	const handlePINEntry = preventDefault(async (e) => {
		const pinValue = e.target.value;
		if (pinValue.length == 4) {
			//await sleep(3000);
			setCentrePIN(pinValue);
			var actual = await verifyPIN(pinValue);
			if (actual.is_valid === true) setAuthorized(true);
		}
	});

	const getConfig = async () => {
		const params = { action: 'verify-pin', data: { pin: 'pinValue' } };
		const res = await fetch(`${base_url}?d=${JSON.stringify(params)}`);
		const data = await res.json();
		return data;
	};

	const updateConfig = async () => {
		const params = { action: 'verify-pin', data: { pin: 'pinValue' } };
		const res = await fetch(`${base_url}?d=${JSON.stringify(params)}`);
		const data = await res.json();
		return data;
	};




	return (
		<div className="min-h-screen bg-gray-100 py-2 flex flex-col justify-center sm:py-4">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"></meta>
				<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400&display=swap" rel="stylesheet" />
			</Head>
			<div className="relative py-3 sm:max-w-xl sm:mx-auto">

				<div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
				<div className="relative px-4 py-6 bg-white shadow-lg sm:rounded-3xl sm:p-2">
					<div className="max-w-md mx-auto align-middle items-center ">
						<div className="max-w-md mx-auto align-middle items-center ">
							<img
								src="/img/bk-logo-2.png"
								className="w-3/5 pl-2 mt-2"
							/>
							<h1 className="animate-pulse -mt-4 text-right flex-auto text-sm text-indigo-700 font-semibold font-Inter text-left ">
								Annanagar, Chennai, India
							</h1>

						</div>


											

						<div className="divide-y divide-gray-200 -mt-1">


							<div className="py-1 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 mt-4">

								<div className=" flex-auto p-2 align-middle text-left  min-h-full bg rounded-md ">

									<div className="min-w-screen  flex items-center justify-center px-5 py-5 mt-4">
										<div className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800"  >


									

											<div className="w-full pt-1 pb-3">

												<div className="overflow-hidden rounded-full w-10 h-10 -mt-11 mx-auto shadow-lg">
													<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIbHIm1LujoLgewgDwi1JJbnda62wBGFDxyA&usqp=CAU" />
												</div>
											</div>
											<div className="w-full">
												<div className="aspect-w-16 aspect-h-9">
													<iframe src="https://player.vimeo.com/video/146022717?color=0c88dd&title=0&byline=0&portrait=0&badge=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
												</div>
												<p className="text-md text-indigo-500 font-bold text-center">Dear Scott Windon</p>

											</div>
											<div className="w-full mb-5">
												<div className="text-3xl text-indigo-500 text-left leading-tight h-3">“</div>
												<p className="text-sm text-gray-600 text-center px-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam obcaecati laudantium recusandae, debitis eum voluptatem ad, illo voluptatibus temporibus odio provident.</p>
												<div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">”</div>
											</div>

										</div>

									</div>
									<div className="-mt-3 min-w-screen  flex items-center justify-center px-5">
										<div className="w-full mx-auto  bg-white shadow-lg px-5 p-1 text-gray-800"  >
											<div className="flex justify-center space-x-4 ">
												<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
												</svg>

												<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
</svg>
											</div>

										</div>
									</div>


								</div>


							</div>

						<Footer />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
