<div class="drawer">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" bind:checked={open}>
	
	<div class="drawer-content relative">
		<!-- Page content here -->
		<button class="absolute top-0 left-0 z-50 text-white rounded-lg p-1 ml-2 drop-shadow-lg bg-sky-100 dark:bg-slate-50" on:click={toggleDrawer}>
			<Icon src={BiMenuAltRight} className="toggle-drawer-icon h-[50px] w-[50px]" color="darkblue" />
		</button>
		<Canvas style="width: 100%; height: 100%">
			<Layer {render} />
		</Canvas>
	</div> 
	<div class="drawer-side">
		<label for="my-drawer" class="drawer-overlay"></label>
		
		<ul class="menu w-[32%] bg-base-100 flex flex-col rounded-tr-xl rounded-br-xl">
			<div class="drawer-header bg-indigo-500 dark:bg-[#3d3e51] py-4 relative rounded-tr-xl">
				<button class="absolute top-0 left-0 z-50 text-white rounded-full my-2 ml-2" on:click={toggleDrawer}>
					<Icon src={BiMenuAltRight} className="toggle-drawer-icon h-[50px] w-[50px]" color="white" />
				</button>
				<h1 class="font-bold text-2xl text-center" style="color: white">University Search</h1>
			</div>
			<div class="grow rounded-tr-xl rounded-br-xl">
				<!-- Sidebar content here -->
				<div class="drawer-body-container p-2 overflow-y-auto">
					<h1 class="font-semibold ml-2 text-lg my-2">Search your university here</h1>
					<div class="input-wrapper w-full relative h-full">
						<input type="text" name="autocomplete" id="" bind:value={inputValue} placeholder="search here" class="border border-2 border-slate-200 rounded-xl pl-3 pr-14 w-full text-lg h-[3rem]">
						<Icon src={BsSearch} className="absolute top-0 right-0 mt-[0.7rem] mr-[4%] w-[1.5rem] h-[1.5rem] cursor-pointer"/>
					</div>
					<div class="flex justify-center items-center h-full">
						{#if loading}
							<CircularProgress style="height: 48px; width: 48px;" indeterminate />
						{/if}
					</div>
					<br>
					<div class="search-result flex flex-col items-center justify-center rounded-bl-md rounded-br-md duration-100">
						<div class="unidata-wrapper flex flex-col items-start justify-center mr-2 w-[95%] h-full max-h-[30vh] bg-[red] overflow-y-auto">
							{#each $uniData as university, i}
								{#if i < 5}
								<div class="university-wrapper flex items-center p-1 cursor-pointer rounded-lg hover:bg-sky-100 duration-100 w-full h-full">
									{#if university.domain}
										<img alt="" src={`https://logo.clearbit.com/${university.domain}`} class="w-[42px] h-[42px] rounded-full mb-1 border border-1">
									{:else}
										<img alt="" src="/college.png" class="w-[42px] h-[42px] rounded-full ml-1 mr-3 mb-1 border border-1">
									{/if}
									<div class="left-side-container flex flex-col justify-center items-start ml-1 mr-3">
										
										<p class="text-xl truncate font-semibold">{i+1}.{university.name}</p>
										{#if university.country}
											<div class="badge badge-md">{university.country}</div>
										{:else}
											<div class="badge badge-md">N/A</div>
										{/if}
	
									</div>
								</div>
								{/if}
							{/each}
						</div>
					</div>
					<li><a href="/">Sidebar Item 1</a></li>
					<li><a href="/">Sidebar Item 2</a></li>
				</div>

			</div>
		</ul>
	</div>
</div>
