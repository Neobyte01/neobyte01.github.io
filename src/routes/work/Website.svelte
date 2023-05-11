<script>
  import { t } from "../../i18n";
  
</script>

<div class="content">
    <h2>EmilWagman.com</h2>

    <div class="images">
        <img src="./website/image_2.png" style="transform: rotate(-1deg);">
        <img src="./website/image_1.png" style="transform: rotate(0.5deg);">
    </div>

    <p>{@html $t("work.website.article")}</p>
    <br/>
    
    <a class="github" href="https://github.com/Neobyte01/neobyte01.github.io" target="_blank">
        <img src="./github.png" />    
        <span>Github repository</span>
    </a>
</div>

<style>
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;

        margin-bottom: 140px;
    }

    h2 {
        margin-top: 96px;
        margin-bottom: 70px;

        font-size: 64px;
        font-family: "Alice", sans-serif;
        text-align: center;
    }

    @media only screen and (max-width: 600px) {
        h2 {
            margin-top: 120px;

            font-size: 36px;
        }
    }

    .images {
        margin-bottom: 42px;
    }

    @media only screen and (max-width: 600px) {
        .images {
            display: flex;
            flex-direction: column;
        }   
    }

    .images > img:first-child {
        margin-right: 28px;
        margin-bottom: 78px;
    }

    .images > img:last-child {
        margin-top: 78px;
    }

    .images > img {
        width: 400px;

        border-radius: 1px;
        border: 1px solid white;
    }

    @media only screen and (max-width: 600px) {
        .images > img:first-child {
            margin-right: 0;
            margin-bottom: 0;
        }

        .images > img:last-child {
            margin-top: 40px;
        }

        .images > img {
            width: 300px;
        }
    }

    p {
        margin-bottom: 18px;
        width: 690px;

        font-size: 18px;
        line-height: 30px;
    }

    @media only screen and (max-width: 600px) {
        p {
            width: 320px;

            font-size: 16px;
            line-height: 27px;
        }
    }

    a {
        display: block;
        width: 690px;
        font-size: 18px;
    }

    @media only screen and (max-width: 600px) {
        a {
            width: fit-content;
        }
    }

    .github {
        display: flex;
        align-items: center;
    }

    .github > img {
        width: 42px;
        margin-right: 15px;
    }

</style>