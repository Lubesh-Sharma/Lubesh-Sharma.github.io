import React from "react";
import Typewriter from "typewriter-effect";

function Typing() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Developer",
                    "Software Engineer",
                    "Systems Engineer",
                    "Frontend Developer",
                    "Backend Developer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 80,
            }}
        />
    );
}

export default Typing;
