import React from "react";

// if statememnt
function Component1() {
    return <h1>Team won the match</h1>;
}

function Component2() {
    return <h1>Team lost the match</h1>;
}

function Goal(props) {

    const isMatch = props.isMatch;

    if (isMatch) {
        return <Component1 />;
    }

    return <Component2 />;
}

export default Goal;
