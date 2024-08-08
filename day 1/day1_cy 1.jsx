import React from 'react';

const App = () => {
    const compare = () => {
        const name1 = 'rokhith';
        const name2 = 'rokhith';

        const object1 = {name:'rokhith'};
        const object2 = {name:'rokhith'};

        alert("Check the console output!");

        console.log(name1 === name2);
        console.log(object1 === object2);
    };

    return (
        <>
        <button onClick={compare}>Click me!</button>
        </>
    );
};

export default App;
