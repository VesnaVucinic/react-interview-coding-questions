import { useState,useEffect } from 'react'

function AstFunc() {
    const [astronauts, setAstronauts] = useState([]);

    // setting the dependencies array in useEffect to an empty array
    // ensures this fetch request only runs once instead of infinitely

    useEffect(() => {
        fetch('http://api.open-notify.org/astros.json')
            .then(res => res.json())
            .then(data => setAstronauts(data.people))
            .catch(err => console.error(err))
    }, []);

    // create a list node to add to the DOM
    const astronautList = astronauts.map((astronaut, index) => (
        <li key={`astro-${index}`}>
        <p>{astronaut.name} is flying in the {astronaut.craft} spacecraft</p>
        </li>
    )); 

    return (
        <div className="AstFunc">
            <ul>
              {astronautList}
            </ul>
        </div>
    );
    
}

export default AstFunc
