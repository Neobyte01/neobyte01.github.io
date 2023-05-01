<script>
  import { spring } from 'svelte/motion';
  import Router, { location, link } from "svelte-spa-router";
  import { t } from './i18n';
  
  import Start from "./routes/Start.svelte";
  import Nav from "./routes/Nav.svelte";
  import Work from "./routes/Work.svelte";
  import Website from './routes/work/Website.svelte';
  
  const routes = {
    "/": Start,
    "/navigation": Nav,
    "/work": Work,
    "/work/website": Website
  };

  let mouseCoords = spring({ x: -100, y: -100 });

  function handleMousemove(event) {
  // mouseCoords.set({ x: event.clientX - 22, y: event.clientY - 22 });
  }

  import { locale, locales } from "./i18n";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Alice&family=Roboto&display=swap" rel="stylesheet">
</svelte:head>

<div id="cursor" style="top: {$mouseCoords.y}px; left: {$mouseCoords.x}px;" />

{#if $location != "/"}
  <a href="/" use:link id="back-to-start">{$t("app.start")}</a>
{/if}

<div id="lang-select">
  {#each locales as [abbr, verb]}
    <span on:click={() => $locale = abbr} class="{$locale == abbr ? "active-lang" : "inactive-lang"}">{verb}</span>
  {/each}
</div>

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

  #back-to-start {
    position: absolute;
    top: 29px;
    left: 40px;

    z-index: 99;

    text-decoration: none;
    line-height: 35px;
    font-family: "Alice", sans-serif;
  }

  #lang-select {
    position: absolute;
    top: 29px;
    right: 40px;

    z-index: 99;
  }

  #lang-select > span {
    line-height: 35px;
    font-family: "Alice", sans-serif;
    
    margin-left: 10px;
    
    cursor: pointer;
  }

  .inactive-lang {
    opacity: 0.5;
  }
</style>
