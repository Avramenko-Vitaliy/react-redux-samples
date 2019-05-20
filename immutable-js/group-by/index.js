const fromJS = require('immutable').fromJS;

const people = [
    { name: 'Jora', age: 12 },
    { name: 'Liza', age: 32 },
    { name: 'Petya', age: 22 },
    { name: 'Nick', age: 12 },
    { name: 'John', age: 33 },
    { name: 'Ted', age: 22 },
    { name: 'Pit', age: 45 },
    { name: 'Elizabet', age: 12 },
];

/*-----------VanillaJS--------*/
(function () {
    const groupedPeople = people.reduce((result, item) => ({
        ...result,
        [item.age]: [...(result[item.age] || []), item]
    }), {});
    console.log('>>>>>>>>>>>> [VanillaJS] Grouped people by age: \n', groupedPeople);
})();


/*-----------ImmutableJS--------*/
(function () {
    const groupedPeople = fromJS(people).groupBy(item => item.get('age'));
    console.log('>>>>>>>>>>>> [ImmutableJS] Grouped people by age:\n', groupedPeople.toJS());
})();
