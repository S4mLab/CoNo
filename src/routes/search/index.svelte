<script context="module">
    export const load = ({ url }) => {
        const university = url.searchParams.get("university") || "/dashboard";
        const course = url.searchParams.get("course") || "/dashboard";
        const major = url.searchParams.get("major") || "/dashboard";
        return {
            props: {
                university,
                course,
                major,
            },
        };
    };
</script>

<script>
    export let university;
    export let course;
    export let major;

    import BsSearch from "svelte-icons-pack/bs/BsSearch";
    import Icon from "svelte-icons-pack/Icon.svelte";
    import { flip } from "svelte/animate";
//     import SvelteTooltip from "svelte-tooltip";
    import { dndzone } from "svelte-dnd-action";
    import { courseDataReformat } from "../../datasource/universityCourses-reformat";
    import SemesterVerticalList from "../../components/dragAndDrop/SemesterVerticalList.svelte";
    let currentCourse = "";
    let items = [...courseDataReformat];
    let coursePlanningData = [
        {
            id: 1,
            year: 1,
            semester: {
                "1": [],
                "2": [],
                "3": [],
            },
            droppable: {
                "1": true,
                "2": true,
                "3": true,
            },
        },
        {
            id: 2,
            year: 2,
            semester: {
                "1": [],
                "2": [],
                "3": [],
            },
            droppable: {
                "1": true,
                "2": true,
                "3": true,
            },
        },
        {
            id: 3,
            year: 3,
            semester: {
                "1": [],
                "2": [],
                "3": [],
            },
            droppable: {
                "1": true,
                "2": true,
                "3": true,
            },
        },
        {
            id: 4,
            year: 4,
            semester: {
                "1": [],
                "2": [],
                "3": [],
            },
            droppable: {
                "1": true,
                "2": true,
                "3": true,
            },
        },
    ];
    let isSearching = false;
    let isDataChanged = false;
    let courseDataSearchResult = [];
    let chosenItem = [];
    let chosenItemDestination = {
        year: [],
        semester: [],
    };
    const flipDurationMs = 300;
    function handleDndConsider(e) {
        chosenItem = items.filter((item) => item.id === e.detail.info.id);

        items = e.detail.items;
    }
    function handleDndFinalize(e) {
        console.log("e: ", e);
        items = e.detail.items;
    }
    $: {
        if (currentCourse === "") {
            isSearching = false;
        }
        console.log("course: ", coursePlanningData);

        for (let i = 0; i < coursePlanningData.length; i++) {
            for (let key in coursePlanningData[i].semester) {
                if (chosenItem.length === 1 && chosenItem[0].requisites) {
                    let requisites = chosenItem[0].requisites;
                    if (
                        requisites.prerequisites &&
                        requisites.prerequisites.length > 0
                    ) {
                        for (let prerequisiteCourseCode in requisites.prerequisites) {
                        }
                    }
                }
            }
            // coursePlanningData[i].semester.forEach((semesterItem, index) => {
            //     if (chosenItem.length === 1 && chosenItem[0].requisites) {
            //         let requisites = chosenItem[0].requisites;
            //         if (
            //             requisites.prerequisites &&
            //             requisites.prerequisites.length > 0
            //         ) {
            //             for (let prerequisiteCourseCode in requisites.prerequisites) {
            //                 // if (prerequisiteCourseCode === )
            //             }
            //         }
            //     }
            // });
        }
    }
    const searchCourse = () => {
        courseDataSearchResult = [];
        var courseReg = new RegExp(currentCourse);

        items.forEach((item, index) => {
            if (item.title.toLowerCase().match(courseReg)) {
                courseDataSearchResult.push(item);
            }
        });
        isSearching = true;
    };
</script>

<div class="flex h-[90vh]">
    <div
        class="basis-3/4 overflow-y-auto scrollabr scrollbar scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-white scrollbar-track-gray-100 dark:scrollbar-track-gray-400"
    >
        {#each coursePlanningData as planningData}
            <h1
                class="text-4xl font-bold m-5 text-indigo-500 dark:text-cyan-200"
            >
                Year {planningData.year}
            </h1>
            <div class="semester-container flex items-center justify-around ">
                {#each Object.entries(planningData.semester) as [semesterNumber, semesterData]}
                    <div
                        class="semester-{semesterNumber} min-h-[17rem] w-[20vw] border border-1 dark:border-gray-500 border-indigo-100 rounded-md hover:scale-[1.03] drop-shadow-md dark:drop-shadow-[2px_2px_3px_rgba(0,0,0,0.2)] duration-300"
                    >
                        <div
                            class="semester-header flex items-center justify-center py-2 bg-indigo-100 dark:bg-slate-600 rounded-tl-md rounded-tr-md"
                        >
                            <h1
                                class="font-[500] text-3xl text-blue-400 dark:text-white text-shadow"
                            >
                                Semester {semesterNumber}
                            </h1>
                        </div>
                        <SemesterVerticalList
                            semester={semesterNumber}
                            year={planningData.year}
                            items={semesterData}
                            chosenItemData={chosenItem}
                        />
                    </div>
                {/each}
            </div>
        {/each}
    </div>

    <div
        class="flex flex-col items-center grow h-full overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-white scrollbar-track-gray-100 dark:scrollbar-track-gray-400"
    >
        <div class="search-courses w-full relative ">
            <input
                type="text"
                class="rounded-full py-2 px-5 my-2 w-full text-xl truncate pr-12 border border-[3.1px]"
                placeholder="Search course here"
                on:input={searchCourse}
                bind:value={currentCourse}
            />
            <Icon
                src={BsSearch}
                className="absolute top-0 right-0 mr-[1.5rem] mt-[1.2rem]"
                size="25"
            />
        </div>
        <section
            use:dndzone={{ items, flipDurationMs }}
            on:consider={handleDndConsider}
            on:finalize={handleDndFinalize}
            class="w-full self-start"
        >
            {#if isSearching}
                {#each courseDataSearchResult as courseInfo (courseInfo.id)}
                    <div
                        animate:flip={{ duration: flipDurationMs }}
                        class="course-data-result cursor-grab max-w-[30vw]"
                    >
                        <p
                            class="text-[1vw] truncate font-[500] py-2 pl-4 w-full dark:text-slate-50 dark:hover:text-black hover:bg-indigo-50 dark:hover:bg-cyan-100 text-lg"
                        >
                            {courseInfo.code} - {courseInfo.title}
                        </p>
                    </div>
                {/each}
            {:else}
                {#each items as courseInfo (courseInfo.id)}
                    <div
                        animate:flip={{ duration: flipDurationMs }}
                        class="course-data-result cursor-grab max-w-[30vw]"
                    >
                        <p
                            class="text-[1vw] truncate font-[500] py-2 pl-4 w-full dark:text-slate-50 dark:hover:text-black hover:bg-indigo-50 dark:hover:bg-cyan-100 text-lg"
                        >
                            {courseInfo.code} - {courseInfo.title}
                        </p>
                    </div>
                {/each}
            {/if}
        </section>
    </div>
</div>
