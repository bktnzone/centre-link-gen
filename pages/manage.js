import Head from 'next/head'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { stringify } from 'querystring';

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

export default function Manage() {

	const base_curl = 'https://script.google.com/macros/s/AKfycbwaJwpjxblNfvEhkVCXgZCjJvnN0oh1LJAo-QJDGIytmm90LyIn/exec';
	const [pagePin, setPagePin] = useState('');
	const [centreInfo, setCentreInfo] = useState({});
	const [centreCode, setCentreCode] = useState('');
	const [centreActiveDate, setCentreActiveDate] = useState('');
	const [centreEmailId, setCentreEmailId] = useState('');
	const [centreDispName, setCentreDispName] = useState('');
	
	
	const handleParam = (setValue,specific) => (e) => {

		if(specific){

			if(specific=="dt") setCentreActiveDate(e.target.value);
			if(specific=="email") setCentreEmailId(e.target.value);
			if(specific=="disp") setCentreDispName(e.target.value);

		}
		else
			setValue(e.target.value);
	};


	const getCentreInfo = async () => {
		const params = { action: 'centre-info', data: { ccode: centreCode } };
		const res = await fetch(`${base_curl}?d=${JSON.stringify(params)}`);
		const data = await res.json();
		setCentreInfo(data);
		return data;
	};


	const updateConfig = async () => {
		let centreLangs='';
		let centreOtherLangs='';
		const formData =  {"row_id":centreInfo.row_id, langs:centreLangs,otherLangs:centreOtherLangs, "active_date":centreActiveDate,"status":centreStatus, "email_id":centreEmailId,"centre_disp_name":centreDispName,"centre_link_code":centreCode};
		const params = { action: 'update-config', data: { pin: pagePin, formInput: formData } };
		const res = await fetch(`${base_url}?d=${JSON.stringify(params)}`);
		const data = await res.json();
		return data;
	};




	return (
		<div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">


			<div className="relative sm:max-w-xl sm:mx-auto">

				<div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
				<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
					<img src="/img/bk-logo-2.png" className="align-right" /> Blessing Card Tool Setup

					<div className="max-w-md mx-auto">

						<div className="divide-y divide-gray-200 ">
							<div className="py-1 text-base leading-6  text-gray-700 sm:text-lg sm:leading-7 ">

								<div className="flex p-2 align-middle text-center ">

									<input type="text" onChange={handleParam(setCentreCode)} className="border-2 text-xl rounded-md p-1 text-center" placeholder="Enter Centre Code" />
									<input
										placeholder="Enter 4 Digit PIN"
										maxLength={4}
										onChange={handleParam(setPagePin)}
										className="border-2 text-xl rounded-md p-1 text-center"
									/>
									<button onClick={getCentreInfo}
										className="w-3/5 flex px-2 items-center justify-center rounded-md bg-sky-500 text-white"
										type="text" >
										Go
									</button>

								</div>
								<div>
									<hr />
								</div>
								<div className="flex-auto " >
									<div className="flex items-baseline mt-4">
										<div className="space-x-2 flex">
											<label className="font-bold"> Centre Display Name </label>
										</div>
									</div>
									<div className="flex items-baseline mb-6">
										<div className="space-x-2 flex">
											<input type="text" size={25} onChange={handleParam('','disp')} className="border-2 rounded-md" value={centreDispName} />
										</div>
									</div>
									<div className="flex items-baseline">
										<div className="space-x-2 flex">
											<label className="font-bold"> Email ID </label>
										</div>
									</div>
									<div className="flex items-baseline mb-6">
										<div className="space-x-2 flex">
											<input type="text" size={25} onChange={handleParam('','email')}  className="border-2 rounded-md" value={centreEmailId} />
										</div>
									</div>

									<div className="flex items-baseline">
										<div className="space-x-2 flex">
											<label className="font-bold"> Link Active from date </label>
										</div>
									</div>



									<div className="flex items-baseline mb-6">
										<div className="space-x-2 flex">
											<input type="date" onChange={handleParam('','dt')}  className="border-2 rounded-md" value={centreActiveDate} />

										</div>
									</div>



									<div className="flex mt-4">



										<div className="flex flex-col mb-6">
											<label className="font-bold"> Main Languages </label>

											{centreInfo.allowedLangs && centreInfo.allowedLangs.map((item, ctr) => {

												return (<label className="inline-flex items-center mt-3" key={item.code}>
													<input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600" value={item.code} /><span className="ml-2 text-gray-700">{item.name}</span>
												</label>)

											})}
										</div>

									</div>

									<div className="flex flex-col mb-6">
										<label className="font-bold"> Other Languages </label>

										{centreInfo.allowedLangs && centreInfo.allowedLangs.map((item, ctr) => {

											return (<label className="inline-flex items-center mt-3" key={item.code}>
												<input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600" value={item.code} /><span className="ml-2 text-gray-700">{item.name}</span>
											</label>)

										})}
									</div>


									<div className="flex flex-col mb-6">
										<label className="font-bold"> Is Closed? <input type="checkbox" value={centreInfo.status} /></label>

									</div>


									<div className="flex space-x-3 mb-4 text-sm font-medium">
										<div className="flex-auto flex ">
											<button
												className="w-3/5 flex items-center justify-center rounded-md bg-sky-500 text-white"
												onClick={updateConfig}
											>
												Save
											</button>
										</div>
										<div className="flex-auto flex ">
											<button
												className="w-3/5 pl-2 pr-2 flex items-center justify-center rounded-md bg-sky-500 text-white"
												type="submit"
											>
												Share Link
											</button>
										</div>

									</div>
								</div>

							</div>
							<div className="hidden pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
								<p>For Support</p>
								<p>
									<a className="text-cyan-600 hover:text-cyan-700">
										{' '}
										Contact : BK Selvanathan
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
