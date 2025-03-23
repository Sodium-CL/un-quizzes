<script>
    let props = $props();
    import Next from "./svg/next.svelte";
    import HeroImage from "$lib/assets/images/hero/1.png?enhanced";
</script>

<div class="h-[100vh] bg-uq-purple mx-auto flex items-center justify-center">
    <div class="flex items-center justify-end px-12">
        <div class="mt-6 text-xl/8 text-gray-700">
            <span class="font-semibold text-uq-white uppercase tracking-widest"
                >Yooti Bhansali</span
            ><br /><br />
            <span class="font-abhaya-libre text-uq-white text-7xl">
                designer & facilitator of curiosity driven "un-quizzes"</span
            >
        </div>
    </div>
    <div class="flex items-center justify-between p-12">
        <figure class="w-1/2">
            <enhanced:img
                class="rounded-3xl w-full h-auto"
                src={HeroImage}
                alt="Event Logo"
            />
            <figcaption
                class="text-sm font-light italic text-uq-white w-full m-2"
            >
                Pictured here: conducting Bing-oh, which incorporates the game
                of Tambola as the competitive element
            </figcaption>
        </figure>
        <a href="#{props.unquizzesId}" class="mx-8">
            <Next width="10em" height="10em" fill="#f4e7d9" />
        </a>
    </div>
</div>
