import { writable } from 'svelte/store';
export const uniCourses = writable();
const getCourseByUni = async (university: string) => {
	const url = 'https://helloworld';
	const courseData = (await fetch(url)).json();
	// const loadedCourses = courseData.results.map((data, index) => {
	// 	return {
	// 		name: data.name,
	// 		id: index + 1
	// 	};
	// });
	// uniCourses.set(loadedCourses);
	uniCourses.set(courseData);
};
getCourseByUni('hello world');
