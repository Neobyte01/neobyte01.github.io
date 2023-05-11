<script>
    import { link } from "svelte-spa-router";
    import { t } from "../i18n";
</script>

<main>
    <a id="cv" href="/cv" use:link>{$t("nav.cv")}</a>
    <a id="work" href="/work" use:link>{$t("work.title")}</a>
    <a id="about" href="/about" use:link>{$t("nav.about")}</a>
    <a id="hobbies" href="/hobbies" use:link>{$t("nav.hobbies")}</a>
    <a id="social" href="/social" use:link>{$t("nav.social")}</a>
    <a id="contact" href="/contact" use:link>{$t("nav.contact")}</a>
</main>

<style>
    main {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    @media only screen and (max-width: 600px) {
        main {
            position: initial;
            top: 0;
            left: 0;
            transform: none;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            width: 100vw;
            height: 100vh;
        }
    }

    main > a {
        position: absolute;
        display: block;
        width: max-content;

        text-decoration: none;
        
        font-family: "Alice", sans-serif;
        font-size: 64px;

        opacity: 0.5;
    }
    
    @media only screen and (max-width: 600px) {
        main > a {
            position: initial;
            display: block;
            font-size: 32px;
        }

        main > a:not(:last-child) {
            margin-bottom: 50px;
        }
    }

    #cv {
        transform: Translate(calc(-270px - 50%), calc(-230px - 50%)) Rotate(-1.3deg);
    }
    #work {
        transform: Translate(calc(260px - 50%), calc(-200px - 50%)) Rotate(1.75deg);
        opacity: 1;
    }
    #about {
        transform: Translate(calc(0px - 50%), calc(-60px - 50%));
    }
    #hobbies {
        transform: Translate(calc(290px - 50%), calc(90px - 50%)) Rotate(-0.8deg);
    }
    #social {
        transform: Translate(calc(10px - 50%), calc(230px - 50%)) Rotate(0.1deg);
    }
    #contact {
        transform: Translate(calc(-325px - 50%), calc(60px - 50%)) Rotate(-1.6deg); 
    }

    @media only screen and (max-width: 600px) {
        #cv {
            transform: Rotate(-1.3deg);
        }
        #work {
            transform: Rotate(1.75deg);
        }
        #about {
            transform: none;
        }
        #hobbies {
            transform: Rotate(-0.8deg);
        }
        #social {
            transform: Rotate(0.1deg);
        }
        #contact {
            transform: Rotate(-1.6deg); 
        }
    }
</style>