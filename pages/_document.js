import {Html, Head, Main, NextScript} from "next/document";

export default function Document(){
    return(
        <Html>
            <Head>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="logo.jpg" />
                <link rel='stylesheet' href='/bootstrap-reboot.css' />
                <link rel='stylesheet' href='/bootstrap.css' />
                <link rel='stylesheet' href='/bootstrap-utilities.css' />
                <link rel='stylesheet' href='/style_base.css' />
                <link rel='stylesheet' href='/style.css' />
                <link rel='stylesheet' href='/responsive.css' />
            </Head>
            <body>
                <Main/>
                <NextScript />
            </body>
        </Html>
    )
}