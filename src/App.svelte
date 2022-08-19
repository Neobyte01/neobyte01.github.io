<script>
  import Navigation from './lib/Navigation.svelte';

  import Router from "svelte-spa-router";
  import Start from "./routes/Start.svelte";
  import Stories from "./routes/Stories.svelte";
  import Art from "./routes/Art.svelte";

  const routes = {
    "/": Start,
    "/stories": Stories,
    "/art": Art
  };

  export let mobileSidebarShow = false;
</script>

<main>
  <div id="content">
    
    <div id="desktop-navigation">
      <Navigation mobile={false}/>
      <div style="position: fixed; top: 0; left: 0;">
        <Navigation mobile={false}/>
      </div>
    </div>

    <div id="page">
      <Router {routes} on:routeLoading={() => mobileSidebarShow = false}/>
      <span id="copyright">© 2022 Emil Wagman</span>
    </div>

  </div>

  <button on:click={() => mobileSidebarShow = true} id="open-sidebar">
    <svg width="36" height="23" viewBox="0 0 36 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="1.5" y1="1.5" x2="34.5" y2="1.5" stroke="white" stroke-width="3" stroke-linecap="round"/>
      <line x1="1.5" y1="11.5" x2="34.5" y2="11.5" stroke="white" stroke-width="3" stroke-linecap="round"/>
      <line x1="1.5" y1="21.5" x2="22.5" y2="21.5" stroke="white" stroke-width="3" stroke-linecap="round"/>
    </svg>      
  </button>
  <span id="last-update">Updated 18 aug</span>

  {#if mobileSidebarShow}
    <div id="mobile-navigation">
      <div class="background"/>
      <Navigation mobile={true}/>
      <button on:click={() => mobileSidebarShow = false}>close</button>
    </div>  
  {/if}

</main>

<style>
  #content {
    display: flex;
    flex-direction: row;
  }

  @media only screen and (max-width: 800px) {
    #desktop-navigation {
      display: none;
    }

    #last-update {
      top: 34px !important;
      right: 34px !important;
    }

    #page {
      padding: 162px 28px 40px !important;
    }
  }

  @media only screen and (min-width: 800px) {
    @media only screen and (max-height: 1000px) {
      #page {
        padding: 142px 80px !important;
      }
    }

    #open-sidebar {
      display: none;
    }

    #copyright {
      display: none !important;
    }
  }

  #copyright {
    display: block;
    margin-top: 134px;
    width: 100%;
    text-align: center;
    opacity: 0.25;
  }

  #open-sidebar {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    border: none;
    border-radius: 0 0 6px 0;
    background: #476252;
    padding: 27px 36px; 
  }

  #open-sidebar:hover {
    cursor: pointer;
  }

  #open-sidebar:hover svg {
    opacity: 0.75;
  }

  #open-sidebar:active svg {
    opacity: 0.5;
  }

  #mobile-navigation {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
  }

  #mobile-navigation .background {
    position: absolute;
    background-color: black;
    opacity: 0.2;
    width: 100vw;
    height: 100%;
  }

  #mobile-navigation button {
    position: absolute;
    top: 43.5px; 
    right: 38px;
    font-family: "Poppins", sans-serif;
    font-weight: 600px;
    font-size: 22px;
    color: white;
    background: none;
    border: none;
  }

  #mobile-navigation button:hover {
    opacity: 0.75;
    cursor: pointer;
  }

  #mobile-navigation button:active {
    opacity: 0.5;
  }

  #page {
    padding: 211px 96px;
    width: 100%;
  }

  #last-update {
    position: absolute;
    top: 57px;
    right: 66px;
    color: #B9B9B9;
  }
</style>
