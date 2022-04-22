import { writable } from 'svelte/store';
export const uniData = writable([]);
export let loadingUniData = false;
export const searchUniversity = async (university: string) => {
	if (loadingUniData) return;
	console.log('the university is: ', university);

	const url = `http://universities.hipolabs.com/search?name=${university}`;
	const fetchRequest = await fetch(url);
	const formatData = await fetchRequest.json();
	console.log('format data: ', formatData);

	const universityData = formatData.map((data, index) => ({
		name: data.name,
		country: data.country,
		countryCode: data.alpha_two_code,
		province: data['state-province'],
		domain: data.domains[0]
	}));
	uniData.set(universityData);
	loadingUniData = true;
};
