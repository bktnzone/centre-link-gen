import Head from 'next/head'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Footer from '../components/footer';
import MetaTags from '../components/page-meta';


import Select from 'react-select';


const locations = [
  {
    label: 'Gujarati',
    value: 'newYork',
  },
  {
    label: 'Bengali',
    value: 'oslo',
  },
  {
    label: 'Oriya',
    value: 'istanbul',
  }
];


const preventDefault = (f) => (e) => {
	e.preventDefault();
	f(e);
};

const base_curl = 'https://script.google.com/macros/s/AKfycbwaJwpjxblNfvEhkVCXgZCjJvnN0oh1LJAo-QJDGIytmm90LyIn/exec';
const sleep = (milliseconds) => {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
};



export default function Home({ action = '/bcard' }) {

	const router = useRouter();

	const [centreCode,setCentreCode] = useState('');
	const [query, setQuery] = useState('');
	const [currentDate] = useState(new Date());

	const [activeDate,setActiveDate] = useState('');
	const [isLoaded, setIsLoaded] = useState(false);
	const [centreInfo,setCentreInfo] = useState({});
	const [lang, setLang] = useState('eng');

	const [langs, setLangs] = useState([{ name: 'Hindi', code: 'hin' },{ name: 'English', code: 'eng' }]);
	const handleParam = (setValue) => (e) => {
		setValue(e.target.value);
	};


	const getCentreInfo = async (centreCode) => {
		const params = { action: 'centre-info', data: { ccode: centreCode } };
		const res = await fetch(`${base_curl}?d=${JSON.stringify(params)}`);
		const data = await res.json();
		return data;
	};



	useEffect(() => {
		if (router.isReady) {
			const _qryParam = router.query;
			setCentreCode(_qryParam.c  || 'tnzone');
		}
		}, [router.query]);


	useEffect(() => {
    const fetchData = async () => {
	      try {
					if(centreCode){
				let ccode=centreCode;
        const result = await getCentreInfo(ccode);
				if(result.languages) setLangs(result.languages);
				if(result.active_date) setActiveDate(new Date(result.active_date));
        setCentreInfo(result);
				setIsLoaded(true);
					}
					
      } catch (error) {
				console.log(error);
      }
    };
    fetchData();
  }, [centreCode]);

	const handleSubmit = preventDefault(() => {
		// Show Progress
		router.push({
			pathname: action,
			query: {
				q: query,
				l: lang,
				c: centreInfo.centre_disp_name,
				cc: centreInfo.centre_code
			},
		});
	});





	return (
		<div className="min-h-screen bg-gray-100 py-2 flex flex-col justify-center sm:py-4">
 
			<MetaTags />
			<div className="relative py-3 sm:max-w-xl sm:mx-auto">
				<div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
				<div className="relative px-4 py-6 bg-white shadow-lg sm:rounded-3xl sm:p-2">
					<div className="max-w-md mx-auto align-middle items-center ">

						<div className="max-w-md mx-auto align-middle items-center ">
							<img
								src="/img/bk-logo-2.png"
								className="w-3/5 pl-2 md:mt-1" 
							/>
							<h1 className="animate-pulse -mt-4 text-right flex-auto text-sm text-indigo-900 font-thin font-Inter text-left ">
								{ (centreInfo && centreInfo.centre_disp_name) || "Loading..."}
							</h1>

						</div>

						<div className="divide-y divide-gray-200 -mt-1" >


							<div className="py-1 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 mt-4">

								<div className=" flex-auto p-2 align-middle text-left h-96 min-h-full bg rounded-md ">
									<div>
										<h1 className="text-center text-indigo-900 font-Inter animate-pulse text-2xl" >Raksha Bandhan 2021</h1>
									</div>
									<div className="mt-1">&nbsp;</div>
									<img src="/img/bandhan.png"   className="animate-pulse "/>
									<div>
										<h1 className="text-center text-indigo-900 font-Inter  text-2xl" >Special Blessings</h1>
									</div>

									{ activeDate>=currentDate && 
							 <div className="inline-block align-middle  flex-auto p-10 text-center items-center my-auto">
							 The event has not started yet.
							 
							 Please check out later
						 </div>
}

									{ !isLoaded && 
										<div className=" w-full text-center text-sm text-indigo-900 ">
											Loading languages...
											</div>
}
{ isLoaded && activeDate<=currentDate &&
							<div className=" w-full mt-6 flex rounded-md shadow-sm">
					<div className="relative flex-grow focus-within:z-10">
						<form onSubmit={handleSubmit}>
							<div className="w-full mt-1 text-center text-indigo-900">

							<ul className="segmented-control">
						
								

							{
							
							langs.map((lg,key)=>{

								return (	<li key={lg.code} className="segmented-control__item ">
								<input
								className="segmented-control__input"
								type="radio"
								onChange={() => {
								
								setLang(lg.code);
								}}
								name="langType"
								value={lg.code}
								defaultChecked={lg.code=="eng"}
								id={lg.code}
								/>
								<label
								className="py-2 rounded-l  segmented-control__label text-sm font-semibold"
								htmlFor={lg.code}
								>
								{lg.name}
								</label>
								</li>
               );

							})
						}
              
					 
								</ul>
							</div>

							<div className=" w-full mt-1 flex rounded-md shadow-sm">
								<div className="relative flex-grow focus-within:z-10">
									<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"></div>
									<input
										placeholder="Your Name"
										value={query}
										onChange={handleParam(setQuery)}
										className="text-gray-700 py-3 form-input block w-full rounded-none rounded-l-md pl-5 transition ease-in-out duration-150 font-semibold sm:text-sm sm:leading-5"
									/>
								</div>
								<button
									onClick={handleSubmit}
									className=" bg-purple-800 text-white hover:bg-purple-600 font-bold  pl-2 rounded-r-md shadow hover:shadow-md outline-none focus:outline-none mr-1 pr-2 text-sm"
									type="button"
									style={{ transition: 'all .15s ease' }}
								>
									<i className="fas fa-heart text-sm"></i> Get  →
								</button>
							</div>
						</form>
					</div>
				</div>
			}



								</div>


							</div>

						



							<Footer  />
						
						</div>
					</div>
				</div>
			</div>
			
		</div>
	);
}
