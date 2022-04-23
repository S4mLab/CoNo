<script lang="ts">
    import CgArrowLongRight from "svelte-icons-pack/cg/CgArrowLongRight";
    import Icon from "svelte-icons-pack/Icon.svelte";
    import BsSearch from "svelte-icons-pack/bs/BsSearch";
    import VscTriangleDown from "svelte-icons-pack/vsc/VscTriangleDown";
    import { courseData } from "../datasource/universityCourses";
    import { country_code_list } from "../datasource/countryCode";

    import { uniData, searchUniversity } from "../stores/searchUniversity";
    import { goto } from "$app/navigation";
    let displayCountryDropdown = false;
    let displayCourseDropdown = false;
    let displayMajorDropdown = false;

    let currentCountryCode = "All";
    let currentCourse = "";
    let currentMajor = "";

    let submitIconColorLight = "indigo-400";
    let submitIconColorDark = "cyan-400";
    let searchResult: any = [];
    let loading: boolean = false;
    const searchItems = async (input: string) => {
        loading = true;
        searchResult = [];
        if (input === "") {
            return [];
        }
        await searchUniversity(input);
        searchResult = $uniData;
        loading = false;
        return searchResult;
    };
    let courseDataSearchResult: any = { ...courseData };
    const searchCourse = (): void => {
        displayCourseDropdown = true;
        if (currentCourse === "") {
            displayCourseDropdown = false;
            return;
        }
        var courseReg = new RegExp(currentCourse);

        courseDataSearchResult = {};
        for (const key in courseData) {
            if (courseData[key].title.toLowerCase().match(courseReg)) {
                courseDataSearchResult[key] = courseData[key];
            }
        }
    };
    let majorDataSearchResult: any = { ...courseData };
    const searchMajor = (): void => {
        displayMajorDropdown = true;
        if (currentMajor === "") {
            displayMajorDropdown = true;
            return;
        }
        var majorReg = new RegExp(currentMajor);

        majorDataSearchResult = {};
        for (const key in courseData) {
            if (courseData[key].title.toLowerCase().match(majorReg)) {
                majorDataSearchResult[key] = courseData[key];
            }
        }
    };
    let universityData = "test";
    const goToSearch = (e) => {
        console.log("e: ", e);

        e.preventDefault();
        goto(
            `/search?university=${universityData}&course=${currentCourse}&major=${currentMajor}`
        );
    };
</script>

<h1
    class="text-4xl text-center font-bold text-slate-400 dark:text-slate-100 my-8"
>
    WELCOME TO <span
        class="text-5xl text-center font-bold text-indigo-500 bg-indigo-100 dark:bg-black rounded-md px-3 dark:text-cyan-200 my-8"
        >COURSE NODE</span
    >
</h1>
<form class="mb-[40vh]" on:submit={goToSearch}>
    <div class="wrapper flex flex-col items-center justify-center">
        <!-- University -->

        <div
            class="university-label-wrapper flex justify-start items-center w-[55%] my-5"
        >
            <label
                for="university"
                class="text-center text-3xl font-semibold text-black dark:text-white"
                >Search your university</label
            >
        </div>

        <div
            class="search_box rounded-lg dark:drop-shadow-[8px_8px_7px_rgba(0,0,0,0.5)] py-2 border-r-3 flex w-[55%] bg-white"
            style="box-shadow: 0 8px 6px -10px #b3c6ff;"
        >
            <div
                class="dropdown z-80 cursor-pointer border-r-4 border-blue-100 rounded-sm relative"
            >
                <div
                    class="chosen-option flex items-center justify-around p-2"
                    on:click={() =>
                        (displayCountryDropdown = !displayCountryDropdown)}
                >
                    <input
                        class="default_option text-xl w-[4rem] px-[1.2rem] py-2"
                        bind:value={currentCountryCode}
                        disabled
                    />
                    <Icon src={VscTriangleDown} color="rgb(129 140 248)" />
                </div>
                {#if displayCountryDropdown}
                    <ul
                        class="country-code-dropdown-list z-50 scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-white-300 absolute top-0 left-0 mt-[4.5rem] rounded-xl bg-white w-[6rem] rounded-sm max-h-[200px] overflow-y-scroll"
                        style="box-shadow: 8px 8px 6px -10px #b3c6ff;"
                    >
                        {#each country_code_list as country_code}
                            <li
                                class="hover:bg-indigo-500 dark:hover:bg-cyan-400 hover:text-white py-2 pl-9 text-lg"
                                on:click={() => {
                                    currentCountryCode = country_code;
                                    displayCountryDropdown = false;
                                }}
                            >
                                {country_code}
                            </li>
                        {/each}
                    </ul>
                {/if}
            </div>
            <div
                class="university_search_field flex items-center justify-center relative w-full"
            >
                <input
                    type="text"
                    class="input w-full text-xl border-none bg-white"
                    placeholder="Search"
                    name="university"
                />
                <Icon
                    src={BsSearch}
                    className="absolute top-0 right-0 mt-[1rem] mr-[4%] w-[1.5rem] h-[1.5rem] cursor-pointer"
                />
            </div>
        </div>

        <!-- Course -->

        <div
            class="course-label-wrapper flex justify-start items-center w-[55%] my-5"
        >
            <label
                for="course"
                class="text-center text-3xl font-semibold text-black dark:text-white"
                >Course</label
            >
        </div>

        <div
            class="search_box rounded-lg dark:drop-shadow-[8px_8px_7px_rgba(0,0,0,0.5)] py-2 border-r-3 flex w-[55%] bg-white"
            style="box-shadow: 0 8px 6px -10px #b3c6ff;"
        >
            <div
                class="course_search_field z-60 flex items-center justify-center w-full relative"
            >
                <input
                    type="text"
                    class="input input-course w-full text-xl border-none bg-white"
                    placeholder="Search"
                    name="course"
                    bind:value={currentCourse}
                    on:input={searchCourse}
                    on:click={() => {
                        displayCourseDropdown = true;
                    }}
                />
                <Icon
                    src={BsSearch}
                    className="absolute top-0 right-0 mt-[1rem] mr-[4%] w-[1.5rem] h-[1.5rem] cursor-pointer"
                />
                {#if displayCourseDropdown}
                    <div
                        class="course-search-result z-30 absolute top-0 left-0 w-full mt-[3.7rem] overflow-y-auto p-2 bg-white flex items-center justify-center"
                    >
                        <ul
                            class="country-code-dropdown-list scrollbar-thin scrollbar-thumb-blue-700 w-full scrollbar-track-white-300 rounded-xl bg-white rounded-sm max-h-[200px] overflow-y-scroll"
                            style="box-shadow: 8px 8px 6px -10px #b3c6ff;"
                        >
                            {#each Object.entries(courseDataSearchResult) as [key, value]}
                                <li
                                    class="hover:bg-indigo-500 dark:hover:bg-cyan-400 hover:text-white py-2 pl-9 text-lg"
                                    on:click={() => {
                                        currentCourse =
                                            value.code + " - " + value.title;
                                        displayCourseDropdown = false;
                                    }}
                                >
                                    {value.code} - {value.title}
                                </li>
                            {/each}
                        </ul>
                    </div>
                {/if}
            </div>
        </div>

        <!-- Major / Minor -->

        <div
            class="major-label-wrapper flex justify-start items-center w-[55%] my-5"
        >
            <label
                for="major"
                class="text-center text-3xl font-semibold text-black dark:text-white"
                >Major/Minor</label
            >
        </div>
        <div
            class="major_search_box rounded-lg dark:drop-shadow-[8px_8px_7px_rgba(0,0,0,0.5)] py-2 border-r-3 flex w-[55%] bg-white mb-16"
            style="box-shadow: 0 8px 6px -10px #b3c6ff;"
        >
            <div
                class="major_search_field flex items-center justify-center w-full relative"
            >
                <input
                    type="text"
                    class="input w-full text-xl border-none bg-white"
                    placeholder="Search"
                    name="course"
                    bind:value={currentMajor}
                    on:input={searchMajor}
                    on:click={() => {
                        displayMajorDropdown = true;
                    }}
                />
                <Icon
                    src={BsSearch}
                    className="absolute top-0 right-0 mt-[1rem] mr-[4%] w-[1.5rem] h-[1.5rem] cursor-pointer"
                />
                {#if displayMajorDropdown}
                    <div
                        class="major_search_result absolute top-0 left-0 w-full mt-[3.7rem] overflow-y-auto p-2 bg-white flex items-center justify-center"
                    >
                        <ul
                            class="country-code-dropdown-list scrollbar-thin scrollbar-thumb-blue-700 w-full scrollbar-track-white-300 rounded-xl bg-white rounded-sm max-h-[200px] overflow-y-scroll"
                            style="box-shadow: 8px 8px 6px -10px #b3c6ff;"
                        >
                            {#each Object.entries(majorDataSearchResult) as [key, value]}
                                <li
                                    class="hover:bg-indigo-500 dark:hover:bg-cyan-400 hover:text-white py-2 pl-9 text-lg"
                                    on:click={() => {
                                        currentMajor =
                                            value.code + " - " + value.title;
                                        displayMajorDropdown = false;
                                    }}
                                >
                                    {value.code} - {value.title}
                                </li>
                            {/each}
                        </ul>
                    </div>
                {/if}
            </div>
        </div>
        <div class="submit-container w-[55%] flex items-center justify-end">
            <div
                class="submit-wrapper rounded-full self-end hover:px-5 px-3 py-2 bg-white border border-[3px] border-indigo-400 dark:border-cyan-400 hover:bg-indigo-400 dark:hover:bg-cyan-400 flex items-center justify-end duration-300"
                on:mouseover={() => {
                    submitIconColorLight = "white";
                    submitIconColorDark = "white";
                }}
                on:mouseout={() => {
                    submitIconColorLight = "indigo-400";
                    submitIconColorDark = "cyan-400";
                }}
            >
                <Icon
                    src={CgArrowLongRight}
                    className={`submit-icon text-3xl duration-300 dark:text-${submitIconColorDark} text-${submitIconColorLight}`}
                />
                <input
                    type="submit"
                    class="text-2xl font-bold text-indigo-400 dark:text-cyan-400 ml-3"
                    value="Search"
                />
            </div>
        </div>
    </div>
</form>

<style>
    .submit-wrapper:hover input {
        color: white !important;
    }
    .submit-wrapper:hover .submit-icon {
        color: white !important;
        background: green;
    }
</style>
