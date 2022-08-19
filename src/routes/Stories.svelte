<script>
    import dentistDream from "../assets/dentist-dream.jpg";
</script>

<h1>Stories</h1>
<div class="story">
    <div class="image">
        <img src="{dentistDream}" alt="Dentist dream story thumbnail" />
    </div>
    <div class="right">
        <span>Unfinished rough draft — 40% done</span>
        <h3>Dentist dream (short story)</h3>
        <p>Hugo Hansen has had a terrible toothache all day and when he goes to sleep that very night, he dreams about an unusual visit to the dentist.</p>
        <div class="actions">
            <a class="read" href="/Dentist dream.pdf">Read</a>
            <a class="download" href="/Dentist dream.pdf" download>Download</a>
        </div>
    </div>
</div>

<style>
    h1 {
        font-size: 48px;
        margin: 0 0 51px;
    }

    @media only screen and (max-width: 800px) {
        .story {
            flex-direction: column;
        }

        .story .image {
            display: flex;
            justify-content: center;
            margin-top: 16px;
            margin-right: 0px !important;
            margin-bottom: 60px;
            background: rgba(71, 98, 82, 0.1);
            border-radius: 4px;
            width: 100%;
            height: calc(348px - 32px) !important;
        }

        .story .image img {
            margin-top: -16px !important;
            height: 348px !important;
        }

        .story .right span {
            margin-bottom: 7px !important;
        }

        .story .right h3 {
            font-size: 24px !important; 
        }

        .story .right p {
            width: auto !important;
        }

        .story .right .actions a {
            flex: 1;
            width: auto !important;
        }
    }

    .story {
        display: flex;
        align-items: center;
    }
    
    .story .image {
        height: 348px;
        margin-right: 59px;
    }

    .story .image img {
        height: 100%;
        border-radius: 4px;
    }

    .story .right span {
        display: block;
        color: #656565;
        margin-bottom: 5px;
    }

    .story .right h3 {
        margin: 0 0 19px;
        font-size: 32px;
    }

    .story .right p {
        width: 483px;
        margin-bottom: 42px;
    }

    .story .right .actions {
        display: flex;
    }

    .story .right .actions a {
        display: block;
        text-decoration: none;
        text-align: center;
        border-radius: 4px;
        font-size: 14px;
    }
    
    .story .right .actions a:hover {
        filter: brightness(0.95);
    }
    
    .story .right .actions a:active {
        filter: brightness(0.9);
    }

    .story .right .actions .read {
        background: #558467;
        color: white;
        width: 177px;
        padding: 17px 0;
        margin-right: 14px;
    }

    .story .right .actions .download {
        color: white;
        width: 173px;
        padding: 15px 0;
        border: 2px solid #558467;
        color: #558467;
    }
</style>