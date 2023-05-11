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
            <img class="image-1" src="./website/image_2.png" >
            <img class="image-2" src="./website/image_1.png">
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

    @media only screen and (max-width: 600px) {
        .header {
            margin-top: 120px;
        } 
    }

    .header > * {
        text-align: center;
    }

    .header > h2 {
        font-family: "Alice", sans-serif;
        font-size: 64px;

        transform: rotate(1deg);
    }  

    @media only screen and (max-width: 600px) {
        .header > h2 {
            font-size: 40px;
        } 
    }
    
    .header > p {
        margin-top: 10px;
        font-size: 18px;
        line-height: 35px;
        max-width: 600px;

        transform: rotate(0.33deg);
    }

    @media only screen and (max-width: 600px) {
        .header > p {
            font-size: 16px;
            line-height: 31px;
            max-width: 350px;
        }
    }

    .content {
        margin-top: 100px;
    }

    @media only screen and (max-width: 600px) {
        .content {
            margin-bottom: 100px;
        }
    }

    .work {
        display: flex;
        margin: auto;
        width: fit-content;
    }

    @media only screen and (max-width: 600px) {
        .work {
            flex-direction: column;
            align-items: center;
        }
    }

    .image-stack {
        position: relative;
        display: inline-block;
        width: 490px;
    }

    @media only screen and (max-width: 600px) {
        .image-stack {
            order: 1;
            width: 310px;
            height: 240px;
        }
    }

    .image-stack > img {
        position: absolute;
        width: 400px;
        border: 1px solid white;
        border-radius: 1px;
    }

    @media only screen and (max-width: 600px) {
        .image-stack > img {
            width: 310px;
        }
    }

    .image-1 {
        transform: translate(-10px, 0px) rotate(-1deg);
    }
    .image-2 {
        transform: translate(5px, 0px) rotate(0.5deg);
    }

    @media only screen and (max-width: 600px) {
        .image-1 {
            transform: translate(-5px, 0px) rotate(-1deg);
        }
        .image-2 {
            transform: translate(0px, 0px) rotate(0.5deg);
        }
    }
    
    .work-info {
        display: inline-block;
    }

    @media only screen and (max-width: 600px) {
        .work-info {
            order: 2;
        }
    }

    .work-info > h3 {
        font-size: 48px;
        font-family: "Alice", sans-serif;
    }

    @media only screen and (max-width: 600px) {
        .work-info > h3 {
            font-size: 32px;
        }
    }

    .work-info > p {
        margin-top: 28px;
        margin-bottom: 21px;

        width: 400px;

        line-height: 30px;
    }

    @media only screen and (max-width: 600px) {
        .work-info > p {
            width: 310px;
            line-height: 27px;
            font-size: 14px;
        }
    }

    .work-info > .tools {
        display: flex;
        align-items: center;
        margin-bottom: 35px;
    }

    @media only screen and (max-width: 600px) {
        .work-info > .tools > span {
            line-height: 27px;
            font-size: 14px;
        }
    }

    .work-info > .tools > img {
        width: 23.5px;
        margin-left: 10px;
        margin-right: 46px;
    }

    @media only screen and (max-width: 600px) {
        .work-info > .tools > img {
            margin-right: 24px;
        }
    }
</style>