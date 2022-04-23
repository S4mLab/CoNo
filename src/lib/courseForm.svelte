<script lang="ts">
    import formInput from './formInput.svelte';
    
    const courseForm: HTMLElement = document.querySelector("#courseForm");

    courseForm?.addEventListener("submit", (event) => {
        event.preventDefault();  // prevent page refresh

        // query firebase database for inputs here
    });
</script>

<div>
    <form id="courseForm" class="">
        <formInput placeholder="Enter university"></formInput>
        <formInput placeholder="Enter course"></formInput>
        <formInput placeholder="Enter major"></formInput>
        <formInput placeholder="Enter major"></formInput>
        <formInput placeholder="Enter minor"></formInput>
        <button type="submit">Submit</button>
    </form>
</div>