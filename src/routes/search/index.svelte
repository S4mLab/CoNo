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
    import { dndzone } from "svelte-dnd-action";
    import { courseDataReformat } from "../../datasource/universityCourses-reformat";

    let currentCourse = "";
    let items = [...courseDataReformat];
    let coursePlanningData = [
        {
            id: 1,
            year: 1,
            semester: {
                "1": [
                    "Introduction to Programming",
                    "Software Engineering Fundamentals",
                ],
                "2": [],
                "3": [],
            },
        },
        {
            id: 2,
            year: 2,
            semester: {
                "1": [
                    "Introduction to Programming",
                    "Software Engineering Fundamentals",
                ],
                "2": [],
                "3": [],
            },
        },
        {
            id: 3,
            year: 3,
            semester: {
                "1": [
                    "Introduction to Programming",
                    "Software Engineering Fundamentals",
                ],
                "2": [],
                "3": [],
            },
        },
        {
            id: 4,
            year: 4,
            semester: {
                "1": [
                    "Introduction to Programming",
                    "Software Engineering Fundamentals",
                ],
                "2": [],
                "3": [],
            },
        },
    ];
    const flipDurationMs = 300;
    function handleDndConsider(e) {
        items = e.detail.items;
    }
    function handleDndFinalize(e) {
        items = e.detail.items;
    }
    const searchCourse = () => {
        if (currentCourse === "") {
            return;
        }
        var courseReg = new RegExp(currentCourse);

        let courseDataSearchResult = [];
        items.forEach((item, index) => {
            if (item.title.toLowerCase().match(courseReg)) {
                courseDataSearchResult.push(item);
            }
        });
        items = courseDataSearchResult;
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
                        class="semester-{semesterNumber} min-h-[17rem] w-[20vw] border border-1 dark:border-black border-indigo-100 rounded-md hover:scale-[1.03] drop-shadow-md dark:drop-shadow-[2px_2px_3px_rgba(0,0,0,0.5)] duration-300"
                    >
                        <div
                            class="semester-header flex items-center justify-center py-2 bg-indigo-100 dark:bg-black rounded-tl-md rounded-tr-md"
                        >
                            <h1
                                class="font-[500] text-2xl text-blue-400 dark:text-cyan-200"
                            >
                                Semester {semesterNumber}
                            </h1>
                        </div>
                        <section use:dndzone={{ items, flipDurationMs }}>
                            {#each semesterData as semesterCourse}
                                <div
                                    class="dropped-item flex items-center justify-center my-2"
                                >
                                    <p
                                        class="text-xl font-[500] text-black dark:text-white text-center border border-l-[6px] border-indigo-500 dark:border-cyan-100 hover:bg-indigo-500 dark:hover:bg-cyan-100 hover:text-white dark:hover:text-black hover:font-[600] duration-200 border-y-0 w-full border-r-[6px] "
                                    >
                                        {semesterCourse}
                                    </p>
                                </div>
                            {/each}
                        </section>
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
        </section>
        <!-- <section
            use:dndzone={{ items, flipDurationMs }}
            on:consider={handleDndConsider}
            on:finalize={handleDndFinalize}
        >
            {#each items as courseInfo (courseInfo.id)}
                <div
                    class="course-data-result self-start py-2 pl-4 w-full bg-[red] cursor-grab hover:bg-indigo-50"
                >
                    <p class="text-[1vw] truncate font-[500]">
                        {courseInfo.id} - {courseInfo.name}
                    </p>
                </div>
            {/each}
        </section> -->
    </div>
</div>
