<script>
    import Hero from "../components/hero.svelte";
    import UnQHero from "../components/un-q-hero.svelte";
    let { data } = $props();
    const unquizzesId = "unquizzes-hero";
</script>

<svelte:head>
    <title>Un-quizzes</title>
</svelte:head>
<div class="w-full flex flex-col items-center justify-center">
    <Hero {unquizzesId} />
</div>

<div id={unquizzesId} class="w-full block">
    <UnQHero />
</div>
