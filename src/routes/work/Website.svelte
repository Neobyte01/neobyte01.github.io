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

    .images {
        margin-bottom: 42px;
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

    p {
        margin-bottom: 18px;
        width: 690px;

        font-size: 18px;
        line-height: 30px;
    }

    a {
        display: block;
        width: 690px;
        font-size: 18px;
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