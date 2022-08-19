<script>
  import signature from "../assets/signature.png";
  import { link } from "svelte-spa-router";
  import active from "svelte-spa-router/active";

  export let mobile;
</script>

<nav id="navigation">
  <img src="{signature}" alt="Emil Wagman's signature 'E'"/>
  <div class="center">
    <div class="links">
      <a href="/" use:link use:active={{className: "active"}}>Start</a>
      <a href="/stories" use:link use:active={{className: "active"}}>Stories</a>
      <a href="/art" use:link use:active={{className: "active"}}>Art</a>
    </div>
    <div class="line" />
  </div>
  <span>© 2022 Emil Wagman</span>

  <!-- extra a tag to allow "active" css selector -->
  <a class="active" />
</nav>

{#if mobile}
  <style>
    #navigation {
      max-width: 327px;
    }

    #navigation img {
      width: 115px !important;
      height: 107px !important;
    }

    #navigation .center .line {
      width: 0px !important;
    }

    #navigation .center {
      left: 55px !important;
    }

    #navigation .center .links a {
      margin-bottom: 34px !important;
    }
  </style>
{/if}

<style>
  @media only screen and (min-width: 2500px) {
    #navigation {
      width: 500px !important;
    }
  }

  @media only screen and (max-width: 2000px) {
    #navigation {
      width: 400px !important;
    }
  }

  #navigation {
    position: relative;
    width: 457px;
    height: 100%;
    height: -webkit-fill-available;
    background-color: #476252;
  }

  #navigation img {
    position: absolute;
    top: 11px;
    left: 20px;
    width: 135px;
    height: 124px;
  }

  #navigation .center {
    display: flex;
    align-items: center;
    position: absolute;
    top: 50%;
    right: 82px;
    transform: translateY(-50%);
  }

  #navigation .center .links {
    display: flex;
    flex-direction: column;
    margin-right: 73px;
  }

  #navigation .center .links a {
    text-decoration: none;
    color: white;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 46px;
  }

  #navigation .center .links a:hover {
    opacity: 0.75;
  }

  #navigation .center .links a.active {
    opacity: 0.5;
  }

  @media only screen and (max-height: 1000px) {
    #navigation .center .line {
      height: 449px !important;
    }
  }

  #navigation .center .line {
    height: 549px;
    width: 2px;
    background-color: white;
  }

  #navigation span {
    position: absolute;
    left: 33px;
    bottom: 38px;
    font-size: 16px;
    color: white;
  }
</style>