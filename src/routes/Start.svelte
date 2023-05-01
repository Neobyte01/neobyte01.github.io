<script>
    import { t } from "../i18n";
    import ButtonLink from "../lib/ButtonLink.svelte";
</script>

<main>
    <div class="content">
        <div class="hello-text">
            <span>{$t("start.hello")}</span>
            <h1>Emil Wagman</h1>
        </div>
        
        <div class="description-text">
            <span class="description-text-1">{$t("start.description.top")}</span>
            
            <span class="description-text-2">{$t("start.description.bottom")}</span>

            <div class="look-further">
                <ButtonLink dest="/navigation" text="{$t("start.navigate")}" />
            </div>
        </div>

        <div id="profile-img">
            <img src="./profile.jpg" alt="Profile picture of Emil Wagman" />
        </div>

        <div id="img-arrow-joke">
            <div id="arrow">
                <svg width="38" height="57" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.84613 56.3795C6.13903 56.6723 6.6139 56.6723 6.90679 56.3795L11.6798 51.6065C11.9727 51.3136 11.9727 50.8387 11.6798 50.5458C11.3869 50.2529 10.912 50.2529 10.6191 50.5458L6.37646 54.7885L2.13382 50.5458C1.84093 50.2529 1.36606 50.2529 1.07316 50.5458C0.780271 50.8387 0.780271 51.3136 1.07316 51.6065L5.84613 56.3795ZM7.12646 55.8491C7.12646 46.4078 9.42116 34.1475 14.4482 23.682C19.4796 13.2076 27.1771 4.66555 37.9147 2.37745L37.6021 0.91039C26.219 3.33601 18.2255 12.3541 13.0961 23.0326C7.96239 33.7201 5.62646 46.2055 5.62646 55.8491L7.12646 55.8491Z" fill="white"/>
                </svg>
            </div>
            <span>{$t("start.profile.joke")}</span>
        </div>
    </div>
</main>

<style>
    main { 
        position: relative;
        height: 100vh;
    }

    .content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        display: grid;
        grid-template-columns: 345px 45px auto;
        grid-template-rows: auto 32px 12px auto;
    }

    .hello-text {
        grid-column: 1 / span 3; 
        grid-row: 1;
    }

    .hello-text > span {
        font-size: 18px;
        line-height: 35px;

        display: block;
        width: fit-content;
        transform: rotate(-1deg);

        margin-bottom: -20px;
    }

    .hello-text > h1 {
        display: block;
        width: fit-content;
        transform: rotate(-1deg);
    }

    .description-text {
        padding-left: 7px;

        grid-column: 1; 
        grid-row: 3 / span 4;
    }

    .description-text > span {
        display: block;
        font-size: 18px;
        line-height: 35px;
        margin-bottom: 18px;
    }

    .description-text-1 {
        transform: rotate(-0.33deg);
    }

    .description-text-2 {
        transform: rotate(0.33deg);
    }

    .look-further {
        transform: rotate(1deg);
        margin-top: 45px;
    }

    h1 {
        font-family: 'Alice', serif;
        font-size: 96px;
    }

    #img-arrow-joke {
        justify-self: center;
        grid-column: 3;
        grid-row: 4;

        transform: translate(80px, -45px);
    }

    #img-arrow-joke > span {
        display: block;
        transform: translate(48px, -72px) rotate(2deg);
        font-size: 16px;
        font-family: "Alice", sans-serif;
    }

    #profile-img {
        grid-column: 3; 
        grid-row: 4;
        width: 510px;
    }

    #profile-img img {
        width: 100%;
        border-radius: 4px;
    }
</style>