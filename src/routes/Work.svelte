<script>
    import ButtonLink from "../lib/ButtonLink.svelte";
    import { t } from "../i18n"
</script>

<div class="header">
    <h2>{$t("work.title")}</h2>
    <p>{$t("work.description")}</p>
</div>

<div class="content">
    <div class="work">
        <div class="image-stack">
            <img src="./website/image_2.png" style="transform: translate(-10px, 0px) rotate(-1deg);">
            <img src="./website/image_1.png" style="transform: translate(5px, 0px) rotate(0.5deg);">
        </div>
        <div class="work-info">
            <h3>EmilWagman.com</h3>
            <p>{$t("work.website.description")}</p>
            <div class="tools">
                <span>{$t('work.designed')}</span>
                <img src="./figma.png">
                <span>{$t('work.built')}</span>
                <img src="./svelte.png">
            </div>
            <ButtonLink dest="/work/website" text="{$t('read-more')}"/>
        </div>
    </div>
</div>

<style>
    .header {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 92px auto 0;
    }

    .header > * {
        text-align: center;
    }

    .header > h2 {
        font-family: "Alice", sans-serif;
        font-size: 64px;

        transform: rotate(1deg);
    }  
    
    .header > p {
        margin-top: 10px;
        font-size: 18px;
        line-height: 35px;
        max-width: 600px;

        transform: rotate(0.33deg);
    }

    .content {
        margin-top: 100px;
    }

    .work {
        display: flex;
        margin: auto;
        width: fit-content;
    }

    .image-stack {
        position: relative;
        display: inline-block;
        width: 490px;
    }

    .image-stack > img {
        position: absolute;
        width: 400px;
        border: 1px solid white;
        border-radius: 1px;
    }

    .work-info {
        display: inline-block;
    }

    .work-info > h3 {
        font-size: 48px;
        font-family: "Alice", sans-serif;
    }

    .work-info > p {
        margin-top: 28px;
        margin-bottom: 21px;

        width: 400px;

        line-height: 30px;
    }

    .work-info > .tools {
        display: flex;
        align-items: center;
        margin-bottom: 35px;
    }

    .work-info > .tools > img {
        width: 23.5px;
        margin-left: 10px;
        margin-right: 46px;
    }
</style>