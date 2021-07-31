import Head from 'next/head'

export default function Home() {
	return (
		<div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
			<div className="relative py-3 sm:max-w-xl sm:mx-auto">
				<div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
				<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
					<div className="max-w-md mx-auto">
						<div>
							<img
								src="https://mamma-rday.vercel.app/assets/bk-logo-1.png"
								className="w-3/4"
							/>
						</div>

						<div className="divide-y divide-gray-200 mt-4">
							<div className="flex flex-wrap">
								<h1 className="flex-auto text-xl font-semibold text-center">
									Blessing Card Setup - Tool
								</h1>
							</div>

							<div className="py-1 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 ">
							 
									<div className="flex-auto p-2 align-middle text-center h-64 min-h-full ">
										<label className="text-sm">
											{' '}
											Enter Provided Centre PIN to Continue{' '}
										</label>
										<input
											placeholder="Enter 4 Digit PIN"
											maxLength={4}
										 
											className="border-2 text-xl rounded-md p-4 text-center"
										/>
									</div>
								

							  
									<form className="flex-auto p-2">
										<p className="text-sm">
											You can configure your Centrewise Blessing Link. Can be
											activated on a specific date.
										</p>
										<div className="flex items-baseline mt-4">
											<div className="space-x-2 flex">
												<label> Centre Name </label>
											</div>
										</div>
										<div className="flex items-baseline mb-6">
											<div className="space-x-2 flex">
												<input type="text" size={25}  className="border-2 rounded-md" />
											</div>
										</div>
										<div className="flex items-baseline">
											<div className="space-x-2 flex">
												<label> Email ID </label>
											</div>
										</div>
										<div className="flex items-baseline mb-6">
											<div className="space-x-2 flex">
												<input type="text" size={25} className="border-2 rounded-md" />
											</div>
										</div>

										<div className="flex items-baseline">
											<div className="space-x-2 flex">
												<label> Start Date </label>
											</div>
										</div>

										<div className="flex items-baseline mb-6">
											<div className="space-x-2 flex">
												<input type="date" className="border-2 rounded-md" />
                        <input type="time" className="border-2 rounded-md" />
											</div>
										</div>
										<label> Language </label>
										<div className="flex mt-4 mb-6">
											<div className="space-x-2 flex">
												<label>
													<input
														className="w-4 h-4 flex items-center justify-center bg-gray-100 rounded-lg"
														name="lang_eng"
														type="checkbox"
														value="eng"
														
													/>
													English
												</label>
												<label>
													<input
														className="w-4 h-4 flex items-center justify-center bg-gray-100 rounded-lg"
														name="lang_tam"
														type="checkbox"
														value="tam"
														
													/>
													Tamil
												</label>
												<label>
													<input
														className="w-4 h-4 flex items-center justify-center bg-gray-100 rounded-lg"
														name="lang_hin"
														type="checkbox"
														value="hin"
														
													/>
													Hindi
												</label>
												<label>
													<input
														className="w-4 h-4 flex items-center justify-center bg-gray-100 rounded-lg"
														name="lang_mal"
														type="checkbox"
														value="mal"
														
													/>
													Malayalam
												</label>
												<label>
													<input
														className="w-4 h-4 flex items-center justify-center bg-gray-100 rounded-lg"
														name="lang_tel"
														type="checkbox"
														value="tel"
														
													/>
													Telugu
												</label>
												
											</div>
										</div>

						

										<div className="flex space-x-3 mb-4 text-sm font-medium">
											<div className="flex-auto flex space-x-3">
												<button
													className="w-3/5 flex items-center justify-center rounded-md bg-sky-500 text-white"
													type="submit"
												>
													Save
												</button>
											</div>
											<div className="flex-auto flex space-x-3">
												<button
													className="w-3/5 pl-2 pr-2 flex items-center justify-center rounded-md bg-sky-500 text-white"
													type="submit"
												>
													Send Mail
												</button>
											</div>
											<button
												className="flex-none flex items-center justify-center w-9 h-9 rounded-md"
												type="button"
												aria-label="like"
											></button>
										</div>
									</form>
								 
							</div>
							<div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
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
