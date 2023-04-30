<script>
    import { link } from "svelte-spa-router";
    import { t } from "../i18n";
</script>

<main>
    <a href="/cv" style="transform: Translate(calc(-270px - 50%), calc(-230px - 50%)) Rotate(-1.3deg);" use:link>{$t("nav.cv")}</a>
    <a href="/work" style="transform: Translate(calc(260px - 50%), calc(-200px - 50%)) Rotate(1.75deg);" use:link>{$t("nav.work")}</a>
    <a href="/about" style="transform: Translate(calc(0px - 50%), calc(-60px - 50%));" use:link>{$t("nav.about")}</a>
    <a href="/hobbies" style="transform: Translate(calc(290px - 50%), calc(90px - 50%)) Rotate(-0.8deg);" use:link>{$t("nav.hobbies")}</a>
    <a href="/social" style="transform: Translate(calc(10px - 50%), calc(230px - 50%)) Rotate(0.1deg);" use:link>{$t("nav.social")}</a>
    <a href="/contact" style="transform: Translate(calc(-331px - 50%), calc(70px - 50%)) Rotate(-1.6deg);" use:link>{$t("nav.contact")}</a>
</main>

<style>
    main {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    main > a {
        position: absolute;
        display: block;
        width: max-content;

        text-decoration: none;
        
        font-family: "Alice", sans-serif;
        font-size: 64px;
    }

</style>