<script>
    let props = $props();
</script>

<div
    class="bg-purple-900 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10"
>
    <div
        class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
    >
        <div class="mt-6 text-xl/8 text-gray-700">
            <span class="font-semibold text-gray-900 uppercase tracking-widest"
                >{props.name}</span
            ><br /><br />
            <span class="font-semibold text-gray-900"> {props.brief}</span><br
            /><br />
            <p>{props.brief}</p>
            <br />
            <a
                href={props.registrationLink}
                target="_blank"
                class="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >Sign up / Registration</a
            >
            <a
                href="events/pricing/{props.slug}"
                class="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >Pricing</a
            >
        </div>
    </div>
    <div
        class="p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
    >
        <img width="50%" height="auto" src={props.imageURL} alt="Event Logo" />
    </div>
</div>
