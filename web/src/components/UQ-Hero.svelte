<script>
  let props = $props();
</script>

<div
  class="h-[100vh] bg-uq-purple grid grid-rows-5 grid-columns-5 justify-items-center items-center"
>
  <div
    class="col-span-5 font-semibold text-uq-white uppercase tracking-widest text-xl/8"
  >
    {props.title}
  </div>
  <div class="row-span-2 row-start-2 p-20">
    <img
      class="rounded-xl w-auto h-full"
      src={props.imageURLs[0]}
      alt="Event Logo"
    />
  </div>
  <div class="column-span-3 row-span-4 row-start-2 text-uq-white">
    {#each props.description as description}
      <p>
        {#each description as textblock}
          <span>{textblock.text}</span>
        {/each}
      </p>
    {/each}
  </div>
  <div class="row-span-2 row-start-2 column-start-5 p-20">
    <img
      class="rounded-xl w-auto h-full"
      src={props.imageURLs[1]}
      alt="Event Logo"
    />
  </div>
  <div class="row-span-2 row-start-4 p-20">
    <img
      class="rounded-xl w-auto h-full"
      src={props.imageURLs[2]}
      alt="Event Logo"
    />
  </div>
  <div class="row-span-2 row-start-4 column-start-5 p-20">
    <img
      class="rounded-xl w-auto h-full"
      src={props.imageURLs[3]}
      alt="Event Logo"
    />
  </div>
</div>
