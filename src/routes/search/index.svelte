<script context="module">
	export const load = ({ url }) => {
		const university = url.searchParams.get('university') || '/dashboard';
		const course = url.searchParams.get('course') || '/dashboard';
		const major = url.searchParams.get('major') || '/dashboard';
		return {
			props: {
				university,
				course,
				major
			}
		};
	};
</script>

<script>
	export let university;
	export let course;
	export let major;
	import BsSearch from 'svelte-icons-pack/bs/BsSearch';
	import Icon from 'svelte-icons-pack/Icon.svelte';
</script>

<div class="flex h-[90vh]">
	<div class="basis-3/4">
		<h1 class="text-4xl font-bold text-indigo-400 dark:text-cyan-400">Year 1</h1>
		<div class="semester-container flex items-center justify-around">
			<div class="semester-1 ">
				<div
					class="semester-header flex items-center justify-center py-2 bg-sky-200 rounded-tl-md rounded-tr-md"
				>
					<h1 class="font-bold text-2xl">Semester 1</h1>
				</div>
				<div class="droppable">
					<div class="dropped-item flex items-center justify-center">
						<p>Introduction to Programming</p>
					</div>
					<div class="dropped-item flex items-center justify-center">
						<p>Software Engineering Fundamentals</p>
					</div>
					<div class="dropped-item flex items-center justify-center">
						<p>Some other courses</p>
					</div>
				</div>
			</div>
			<div class="semester-2 flex items-center justify-center">
				<div
					class="semester-header flex items-center justify-center py-2 bg-sky-200 rounded-tl-md rounded-tr-md"
				>
					<h1>Semester 2</h1>
				</div>
			</div>
			<div class="semester-3 flex items-center justify-center">
				<div
					class="semester-header flex items-center justify-center py-2 bg-sky-200 rounded-tl-md rounded-tr-md"
				>
					<h1>Semester 3</h1>
				</div>
			</div>
		</div>
		<h1 class="text-3xl font-bold">Year 2</h1>
		<h1 class="text-3xl font-bold">Year 3</h1>
		<h1 class="text-3xl font-bold">Year 4</h1>
		<p>jfewpfjwepfwp</p>
	</div>

	<div class="flex flex-col items-center grow bg-[green] h-full">
		<div class="search-courses w-full relative">
			<input
				type="text"
				class="rounded-full py-2 px-5 my-2   w-full text-xl"
				placeholder="Search course here"
			/>
			<Icon src={BsSearch} className="absolute top-0 right-0 mr-[1.5rem] mt-[0.5rem]" size="25" />
		</div>
		<p>jfewpfjwepfwp</p>
	</div>
</div>
