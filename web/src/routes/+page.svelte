<script>
  import Hero from "../components/Hero.svelte";
  import UqHero from "../components/UQ-Hero.svelte";
  let { data } = $props();
  const unquizzesId = "unquizzes-hero";
</script>

<svelte:head>
  <title>Un-quizzes</title>
</svelte:head>
{#each data.body.people as person}
  <div class="w-full flex flex-col items-center justify-center">
    <Hero
      name={person.name}
      brief={person.brief}
      imageCaption={person.imageCaption}
      imageURL={person.imageURL}
      {unquizzesId}
    />
  </div>
{/each}
{#each data.body.uqHero as uqData}
  <div id={unquizzesId} class="w-full">
    <UqHero
      title={uqData.title}
      description={uqData.description}
      imageURLs={uqData.imageURLs}
    />
  </div>
{/each}
