import Head from 'next/head'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Typed from 'react-typed';
import Footer from '../components/footer';
import { CopyToClipboard } from "react-copy-to-clipboard";


const preventDefault = (f) => (e) => {
	e.preventDefault();
	f(e);
};


const sleep = (milliseconds) => {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
};


export default function BCard({ }) {

	const router = useRouter();
	const [reqInfo, setReqInfo] = useState({});
	const [centreName, setCentreName] = useState('');

	const [isLoaded, setIsLoaded] = useState(false);
	const [cardInfo, setCardInfo] = useState({});
	useEffect(() => {
		const _qryParam = router.query;

		setReqInfo(_qryParam);
	}, []);




	useEffect(() => {
		const fetchData = async () => {
			try {
				if (reqInfo.q) {
					setCentreName(reqInfo.c);
					const result = await getCardInfo({ name: reqInfo.q, lang: reqInfo.l });
					setCardInfo(result);
					setIsLoaded(true);
				}
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, [reqInfo]);



	const getCardInfo = async (query) => {
		const base_curl = `https://script.google.com/macros/s/AKfycbzIIh0H0aEpkeIgxMPT1YUzBp9f5aUBd6BadQVOPw/exec?fullname=${query.name}&lang=${query.lang}`;
		const res = await fetch(`${base_curl}`);
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
								className="w-3/5 pl-2 -mt-3"
							/>
							<h1 className="animate-pulse -mt-4 text-right flex-auto text-sm text-indigo-900 font-thin font-Inter text-left ">
								{(centreName) || "Loading..."}
							</h1>

						</div>




						<div className="divide-y divide-gray-200 -mt-1">


							<div className="py-1 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 mt-4">

								<div className=" flex-auto p-2 align-middle text-left  min-h-full bg rounded-md ">

									<div className="min-w-screen  flex items-center justify-center px-2 py-5">
										<div className="w-full mx-auto border-4 rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800"  >

											<div className="w-full h-auto m2">

												{isLoaded &&
													<div className="aspect-w-16 aspect-h-9">
														<iframe src="https://player.vimeo.com/video/582888192?color=0c88dd&title=0&byline=0&portrait=0&badge=0" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
													</div>
												}

												{!isLoaded &&
													<div className="w-full pt-1 pb-3 pt-3 ">
														<img src="/img/bandhan.png" className="animate-pulse " />
													</div>
												}

												{isLoaded && (
													<p className="text-md text-purple-500 font-semibold text-center mt-4 ">
														{cardInfo.disp_name}
													</p>)
												}

											</div>
											<div className="w-full mb-1">

												<div className="text-3xl text-indigo-500 text-left leading-tight h-3">“</div>
												<p className="text-lg font-semibold text-gray-600 text-center px-5">
													{!isLoaded &&
														<span className="text-sm font-normal">Please stay in silence for a moment...</span>
													}
													{isLoaded && (<Typed
														strings={[cardInfo.slogan]}
														showCursor={false}
														typeSpeed={70}
													/>)
													}

												</p>
												<div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">”</div>
											</div>

										</div>

									</div>
									{isLoaded &&

										<div className="-mt-3 min-w-screen  flex items-center justify-center px-3">
											<div className="w-full mx-auto  bg-white shadow-lg px-2 p-1 text-gray-800"  >
												<div className="flex justify-evenly">

												<span className="cursor-pointer">
													<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
													</svg>
													</span>
													<span className="cursor-pointer">
													<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
													</svg>
													</span>

													<CopyToClipboard text={cardInfo.slogan}
													>
														<span className="cursor-pointer">

															<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
																<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
															</svg>
														</span>
													</CopyToClipboard>

												</div>
												<div className="flex text-xs justify-evenly ">
													<label>
														download
													</label>
													<label>
														share
													</label>
													<label>
														copy text
													</label>

												</div>

											</div>
										</div>

									}
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
