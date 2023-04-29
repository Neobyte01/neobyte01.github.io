<script>
  import { spring } from 'svelte/motion';
  import Router from "svelte-spa-router";
  import Start from "./routes/Start.svelte";
  
  const routes = {
    "/": Start,
  };

  let mouseCoords = spring({ x: -100, y: -100 });

  function handleMousemove(event) {
    // mouseCoords.set({ x: event.clientX - 22, y: event.clientY - 22 });
  }
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Alice&family=Roboto&display=swap" rel="stylesheet">
</svelte:head>

<div id="cursor" style="top: {$mouseCoords.y}px; left: {$mouseCoords.x}px;" />

<main on:mousemove={handleMousemove}>
  <Router {routes} />
</main>

<style>
  #cursor {
    position: absolute;

    background-color: #4125ED;   
    mix-blend-mode: exclusion;

    z-index: 100;

    width: 44px;
    height: 44px;
    border-radius: 100%;
  }
</style>
