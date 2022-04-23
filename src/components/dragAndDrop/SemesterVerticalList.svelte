<script>
    import { flip } from "svelte/animate";
    import { dndzone } from "svelte-dnd-action";
    export let items;
    export let chosenItemData;
    export let semester;
    export let year;

    let dropFromOthersDisabled = false;
    const flipDurationMs = 300;
    $: {
        dropFromOthersDisabled = items.length === 4;

        if (chosenItemData.length === 1 && chosenItemData[0].requisites) {
            let requisites = chosenItemData[0].requisites;
            if (
                requisites.prerequisites &&
                requisites.prerequisites.length > 0
            ) {
                console.log("fjiwfjwei");

                for (let prerequisiteCourseCode in requisites.prerequisites) {
                    for (let item in items) {
                        console.log("item: ", item);
                        // if (item.code === prerequisiteCourseCode) {
                        //     dropFromOthersDisabled = false;
                        // }
                    }
                }
            }
        }
    }
    // $: {
    //     if (chosenItem.length === 1 && chosenItem[0].requisite) {
    //         let requisite = chosenItem[0].requisite;
    //         if (requisite.prerequisite.length > 0) {
    //             for (let prerequisiteCourseCode in requisite.prerequisite) {
    //                 for (let item in items) {
    //                     // console.log("item: ", item);
    //                     // if (item.code === prerequisiteCourseCode) {
    //                     //     dropFromOthersDisabled = false;
    //                     // }
    //                 }
    //             }
    //         }
    //     }
    // }
    function handleDndConsider(e) {
        // console.log("", e.detail.info);
        // console.log("items: ", items);

        items = e.detail.items;
    }
    function handleDndFinalize(e) {
        items = e.detail.items;
    }
</script>

<section
    use:dndzone={{ items, flipDurationMs, dropFromOthersDisabled }}
    on:consider={handleDndConsider}
    on:finalize={handleDndFinalize}
    class="min-h-[17rem] w-full"
>
    {#each items as item (item.id)}
        <div
            animate:flip={{ duration: flipDurationMs }}
            class="dropped-item flex items-center justify-center my-2"
        >
            <p
                class="text-2xl font-[500] text-black dark:text-white text-center border border-l-[6px] border-indigo-500 dark:border-cyan-100 hover:bg-indigo-500 dark:hover:bg-cyan-100 hover:text-white dark:hover:text-black hover:font-[600] duration-200 border-y-0 w-full border-r-[6px] "
            >
                {item.title}
            </p>
        </div>
    {/each}
</section>
