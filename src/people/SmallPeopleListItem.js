export const SmallPeopleListItem = ( { person }) => {
    const {name, age} = person;

    return <div>
        <h4>Name: {name}</h4>
        <p>Age: {age} years</p>
    </div>
}