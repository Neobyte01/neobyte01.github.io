<script>
    import { link } from "svelte-spa-router";

    export let dest;
    export let text;
</script>

<a href="{dest}" use:link class="button-link">
    <span>{text}</span>
    <div class="arrow">
        <svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.42529 1.31287L9.98184 10.1734C10.1737 10.3721 10.1681 10.6886 9.9695 10.8804L1.10894 19.437" stroke="white" stroke-width="2"/>
        </svg>
    </div>
</a>

<style>
    .button-link {
        border-radius: 4px;
        border: 2px solid white;
        
        display: flex;
        justify-content: space-between;
        align-items: center;

        text-decoration: none;

        width: fit-content;
        padding: 8px 16px 8px 25px;
    }

    .button-link > span {
        padding-right: 53px;
        line-height: 35px;
        min-width: 80px;
    }

</style>