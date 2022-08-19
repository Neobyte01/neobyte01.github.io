<script>
    import { link } from "svelte-spa-router";
    import dentistDream from "../assets/dentist-dream.jpg";
</script>

<main>
    <span>Hello! I'm</span>
    <h1>Emil Wagman</h1>
    <p>A little character that studies AI development and enjoys art and particularly creating stories on the side.</p>
    <h2>Stories</h2>
    <a class="content-bar" href="/stories" use:link>
        <div class="dentist-image">
            <img src="{dentistDream}" alt="dentist dream story" />
        </div>
        
    </a>
    <h2>Art</h2>
    <a class="content-bar" href="/art" use:link>

    </a>
</main>

<style>
    @media only screen and (max-width: 800px) {
        main > span {
            font-size: 28px !important;
        }

        main > h1 {
            margin: -10px 0 30px !important;
            font-size: 42px !important;
        }

        main > p {
            font-size: 18px !important;
            width: auto !important;
        }
    }

    main > span {
        font-size: 32px;
        font-family: "Poppins", sans-serif;
        font-weight: 600;
    }

    main > h1 {
        margin: -10px 0 31px;
        font-size: 48px;
    }

    main > p {
        font-size: 20px;
        width: 507px;
        opacity: 0.75;
        margin-bottom: 18px;
    }

    main > h2 {
        margin-top: 59px;
        margin-bottom: 19px;
        font-size: 24px;
        font-style: italic;
        font-weight: 600;
    }

    @media only screen and (max-width: 800px) {
        main .content-bar {
            height: 323px !important;
        }

        main .content-bar .dentist-image img {
            margin-top: -60px !important;
            margin-left: -80px !important;
            height: 125% !important;
        }
    }

    main .content-bar {
        display: block;
        width: 100%;
        max-width: 1200px;
        height: 238px;
        border-radius: 6px;
        background: #f6f6f6;
        text-decoration: none;
    }

    main .content-bar:hover {
        filter: brightness(0.98);
    }

    main .content-bar .dentist-image {
        display: block;
        overflow: hidden;
        height: 100%;
        border-radius: 6px 0 0 6px;
    }

    main .content-bar .dentist-image img {
        margin-top: -80px;
        margin-left: -30px;
        height: 165%;
        transform: matrix(0.98, -0.26, 0.21, 0.97, 0, 0);
        border-radius: 4px;
    }
</style>