import React from "react";
import "./Home.css";

const Home = () => {
    return (
        <div className="home-page">
            <h4 className="content-center">Invitation to P2Q4 Symposium.<br/>Oct 14, 2022, Gates and Hillman Centers
                4405, Carnegie Mellon
                University</h4>
            <h2 className="content-center">“Pawn to Queen Four”</h2>
            <p className="content-center">50thAnniversary Symposium of The Beginning of Speech Understanding</p>
            <p>We cordially invite you to join us at CMU on Oct 14, 2022, when we celebrate the 50th anniversary of the
                first working Speech Understanding System demonstration and the 50 years of Speech Research at Carnegie
                Mellon University.</p>
            <p>The first demonstration of a working Speech Understanding System happened at Carnegie Mellon in 1972
                using the task domain of Voice Chess, led by the team of Raj Reddy, Lee Erman, and Victor Lesser. This
                event was memorialized in the <a href="https://www.youtube.com/embed/kJ9WekPYaXQ">1973 Hearsay video</a>,
                which included a detailed explanation of how the
                system worked using Erman speaking “Pawn to Queen Four.” This demo showed the plausibility of building a
                large vocabulary, connected speech understanding system.</p>
            <p>In 1971, a committee headed by Allen Newell <a href="http://www.rr.cs.cmu.edu/SUR.pdf">proposed a 5-year
                research effort</a> toward the development and
                demonstration of such a system. Based on this report, Cordell Green at DARPA crafted a unique
                multi-institution research model. Green was followed by Steve Crocker who oversaw the first few years of
                the program. That model has since proved, at DARPA and elsewhere, to be highly effective in organizing
                large-scale research efforts toward a clearly specified long-term goal.</p>
            <p>In this case, five institutions were each charged with demonstrating a working system within five years
                satisfying the research goals laid out in the Newell report. In this model of co-opetition, the periodic
                review meetings and presentations ensured the open sharing of ideas among the institutions. At the end
                of the DARPA program, in 1976, the Harpy and Hearsay systems developed at CMU not only satisfied the
                original program goals but exceeded some of them. Building on this work and inventing many new paths,
                CMU has been at the forefront of speech understanding research for now over 50 years.</p>
            <p>This 1-day symposium and celebration will include short talks and recollections of many of the key
                participants at CMU in this 50-year journey followed by a reception and banquet. Please visit
                <a href="src/components/Home/Home">www.p2q4.org</a> for more information and to register.</p>
            <p>Sincerely Yours,<br/>Raj Reddy, Lee Erman, Vic Lesser</p>
            <br/>
            <p>School of Computer Science, Carnegie Mellon University, 5325 Wean Hall, Pittsburgh PA 15213</p>
        </div>
    );
};

export default Home;