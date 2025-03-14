<script>
  import Hero from "../components/Hero.svelte";
  import UqHero from "../components/UQ-Hero.svelte";
  let { data } = $props();
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
    />
  </div>
{/each}
{#each data.body.people as person}
  <div class="w-full flex flex-col items-center justify-center">
    <UqHero
      name={person.name}
      brief={person.brief}
      imageCaption={person.imageCaption}
      imageURL={person.imageURL}
    />
  </div>
{/each}
