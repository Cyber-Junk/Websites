import React from 'react';
import Card from './Card';

function Team() {
    return (
        <div className="container">
            <div className="row text-center">
                <Card profile={require("./Prasan.webp").default} name="Prasan Singh" post="Founder" linkedin="https://www.linkedin.com/in/prasan-singh-13ba15198" twitter="https://twitter.com/parsan26" />
                <Card profile={require("./Kanad.webp").default} name="Kanad Nemade" post="bot-developer" linkedin="https://www.linkedin.com/in/kanadnemade" twitter=""/>
                <Card profile={require("./Harsh.webp").default} name="Harsh Sachaniya" post="web-developer" linkedin="https://www.linkedin.com/in/harsh-sachaniya" twitter="https://twitter.com/HarshGa99484485" />
                <Card profile={require("./Anusuya.webp").default} name="Anusuya Sharma" post="web-developer" linkedin="https://www.linkedin.com/in/anusuya-sharma-abb29a209/" twitter="https://twitter.com/AnusuyaSharma12" />
                <Card profile={require("./Bachu.webp").default} name="BSV Neeraj" post="web-developer" linkedin="https://www.linkedin.com/in/bachu-sai-venkata-neeraj-113a07190/" twitter="https://twitter.com/imBSVN" />
                <Card profile={require("./Durgesh.webp").default} name="Durgesh Chore" post="Graphic-Designer" linkedin="https://www.linkedin.com/in/durgesh-chore-158936214" twitter="https://twitter.com/uxseriousdesign?t=ihPDwzkkh377tc79uaHr8w&s=09" />
            </div>
        </div>
    )
}

export default Team