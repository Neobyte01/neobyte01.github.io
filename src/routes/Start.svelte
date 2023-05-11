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
                <svg class="desktop" width="38" height="57" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.84613 56.3795C6.13903 56.6723 6.6139 56.6723 6.90679 56.3795L11.6798 51.6065C11.9727 51.3136 11.9727 50.8387 11.6798 50.5458C11.3869 50.2529 10.912 50.2529 10.6191 50.5458L6.37646 54.7885L2.13382 50.5458C1.84093 50.2529 1.36606 50.2529 1.07316 50.5458C0.780271 50.8387 0.780271 51.3136 1.07316 51.6065L5.84613 56.3795ZM7.12646 55.8491C7.12646 46.4078 9.42116 34.1475 14.4482 23.682C19.4796 13.2076 27.1771 4.66555 37.9147 2.37745L37.6021 0.91039C26.219 3.33601 18.2255 12.3541 13.0961 23.0326C7.96239 33.7201 5.62646 46.2055 5.62646 55.8491L7.12646 55.8491Z" fill="white"/>
                </svg>
                <svg class="mobile" width="15" height="39" viewBox="0 0 15 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.62511 37.8413C5.918 38.1342 6.39288 38.1342 6.68577 37.8413L11.4587 33.0683C11.7516 32.7754 11.7516 32.3005 11.4587 32.0076C11.1658 31.7148 10.691 31.7148 10.3981 32.0076L6.15544 36.2503L1.9128 32.0076C1.61991 31.7148 1.14503 31.7148 0.85214 32.0076C0.559247 32.3005 0.559247 32.7754 0.85214 33.0683L5.62511 37.8413ZM6.90544 37.3109C6.90544 22.2668 7.94828 11.7238 14.2369 1.66209L12.9649 0.867091C6.43646 11.3125 5.40544 22.2294 5.40544 37.3109H6.90544Z" fill="white"/>
                </svg>    
            </div>
            <span>{$t("start.profile.joke")}</span>
        </div>
    </div>
</main>

<style>
    @media only screen and (min-width: 600px) {
        main { 
            position: relative;
            height: 100vh;
        }
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

    @media only screen and (max-width: 600px) {
        .content {
            top: 0;
            left: 0;
            transform: none;
            
            display: flex;
            flex-direction: column;
            width: 100vw;
            overflow: hidden;
        }
    }

    .hello-text {
        grid-column: 1 / span 3; 
        grid-row: 1;
    }

    @media only screen and (max-width: 600px) {
        .hello-text {
            order: 1;
            margin: 110px 0 105px 45px;
        }
    }

    .hello-text > span {
        font-size: 18px;
        line-height: 35px;

        display: block;
        width: fit-content;
        transform: rotate(-1deg);

        margin-bottom: -20px;
    }
    
    @media only screen and (max-width: 600px) {
        .hello-text > span {
            margin-bottom: -10px;
        }
    }

    .hello-text > h1 {
        display: block;
        width: fit-content;
        transform: rotate(-1deg);

        font-family: 'Alice', serif;
        font-size: 96px;
    }

    @media only screen and (max-width: 600px) {
        .hello-text > h1 {
            font-size: 45px;
        }
    }

    .description-text {
        padding-left: 7px;

        grid-column: 1; 
        grid-row: 3 / span 4;
    }

    @media only screen and (max-width: 600px) {
        .description-text {       
            padding-left: 28px;
            order: 3;   
        }
    }

    .description-text > span {
        display: block;
        font-size: 18px;
        line-height: 35px;
        margin-bottom: 18px;
    }

    @media only screen and (max-width: 600px) {
        .description-text > span {
            font-size: 16px;
            line-height: 31px;
            max-width: 335px;

        }
    }

    .description-text-1 {
        transform: rotate(-0.33deg);
    }

    .description-text-2 {
        transform: rotate(0.33deg);
    }

    #img-arrow-joke {
        justify-self: center;
        grid-column: 3;
        grid-row: 4;

        transform: translate(80px, -45px);
    }

    #img-arrow-joke #arrow .mobile {
        display: none;
    }

    @media only screen and (max-width: 600px) {
        #arrow {
            display: inline-block;
        }

        #img-arrow-joke > #arrow > .mobile {
            transform: translate(80px, 0);
            display: inline-block;
        }
     
        #img-arrow-joke > #arrow > .desktop {
            display: none;
        }

        #img-arrow-joke {
            display: inline-block;
            width: fit-content;
            transform: translate(105px, -400px);
            order: 2;
        }
    }

    #img-arrow-joke > span {
        display: block;
        transform: translate(48px, -72px) rotate(2deg);
        font-size: 16px;
        font-family: "Alice", sans-serif;
        width: fit-content;
    }

    @media only screen and (max-width: 600px) {
        #img-arrow-joke > span {
            transform: translate(42px, -67px) rotate(2deg);
        }
    }

    #profile-img {
        grid-column: 3; 
        grid-row: 4;
        width: 510px;
    }

    @media only screen and (max-width: 600px) {
        #profile-img {
            order: 2;    
            transform: translateX(-90px);
        }
    }

    #profile-img img {
        width: 100%;
        border-radius: 4px;
    }

    .look-further {
        transform: rotate(1deg);
        margin-top: 45px;
    }

    @media only screen and (max-width: 600px) {
        .look-further {
            margin-top: 55px;
            margin-bottom: 120px;
        }
    }
</style>