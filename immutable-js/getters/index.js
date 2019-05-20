const fromJS = require("immutable").fromJS;

const person = {
    full_name: 'John Black',
    address: {
        country: {
            code: 'UK',
            name: 'United Kingdom',
        },
        street: {
            zip_code: 'OL9 6HB',
            name: 'Oldham Street',
        }
    },
};

/*-----------VanillaJS--------*/
(function () {
    const { address = {} } = person;
    const { country = {} } = address;
    const { code = 'Unknown' } = country;

    console.log(`>>>>>>>>>> [VanillaJS]: country code is ${code}`);
})();

/*-----------ImmutableJS--------*/
(function () {
    const personImmutable = fromJS(person);
    const code = personImmutable.getIn(['address', 'country', 'code'], 'Unknown');

    console.log(`>>>>>>>>>> [ImmutableJS]: country code is ${code}`);
})();
