export const LargePeopleListItem = ( {person }) => {
    const {name, age, hairColor, hobbies} = person;

    return <div>
        <h4>Name: {name}</h4>
        <p>Age: {age} years</p>
        <p>HairColor: {hairColor} </p>
        <h3>
            {hobbies.map(hobbi => <li key={hobbi}>{hobbi}</li>)}
        </h3>
    </div>
}