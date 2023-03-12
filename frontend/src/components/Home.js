import React from "react";
import TitleList from "./TitleList";

function Home() {
    return (
        <main>
            <p>
                Welcome to <b>Microblog</b>! The number one site for voicing 
                your thoughts and opinions.
            </p>
            <TitleList />
        </main>
    )
};

export default Home;