const Map = require("immutable").Map;

/*-----------VanillaJS--------*/
(function () {
    const person = {
        address: {
            country: {
                code: 'UK',
            },
        },
    };
    console.log(`>>>>>>>>>> [VanillaJS]: Created new person: ${JSON.stringify(person)}`);
})();



/*-----------ImmutableJS--------*/
(function () {
    const person = Map().setIn(['address', 'country', 'code'], 'UK');
    console.log(`>>>>>>>>>> [ImmutableJS]: Created new person: ${JSON.stringify(person.toJS())}`);
})();