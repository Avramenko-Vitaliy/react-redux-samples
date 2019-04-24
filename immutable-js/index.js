const fromJS = require("immutable").fromJS;
const List = require("immutable").List;

(function () {
    const list = fromJS([
        { name: 'Jora', age: 12 },
        { name: 'Liza', age: 32 },
        { name: 'Petya', age: 22 },
        { name: 'Nick', age: 12 },
        { name: 'John', age: 33 },
        { name: 'Ted', age: 22 },
        { name: 'Pit', age: 45 },
        { name: 'Elizabet', age: 12 },
    ]);

    const grouped = list.groupBy(item => item.get('age'));
    console.log('>>>>>>>>>>>> Grouped people by age');
    console.log(grouped.toJS());
})();


(function () {
    const list = fromJS([
        { name: 'Jora', interests: ['Sport', 'Games', 'Pets', 'Traveling'] },
        { name: 'Liza', interests: ['Films', 'Music', 'IT', 'React'] },
        { name: 'Petya', interests: ['Redux', 'Fashion', 'Natural', 'Coffee'] },
        { name: 'Nick', interests: ['Games', 'Films', 'Pets', 'Sport'] },
        { name: 'John', interests: ['Traveling', 'Sport', 'Music', 'Natural'] },
        { name: 'Ted', interests: ['TV', 'IT', 'Coffee', 'React'] },
        { name: 'Pit', interests: ['Redux', 'Sport'] },
        { name: 'Elizabet', interests: [] },
    ]);

    const countLikeSport = list.flatMap(item => item.get('interests'))
        .filter(item => item === 'Sport')
        .size;

    console.log('>>>>>>>>>>>> Count of people who has interests "Sport": ', countLikeSport);
})();

(function () {
    const list = fromJS([
        { name: 'Jora', interests: ['Sport', 'Games', 'Pets', 'Traveling'] },
        { name: 'Liza', interests: ['Films', 'Music', 'IT', 'React'] },
        { name: 'Petya', interests: ['Redux', 'Fashion', 'Natural', 'Coffee'] },
        { name: 'Nick', interests: ['Games', 'Films', 'Pets', 'Sport'] },
        { name: 'John', interests: ['Traveling', 'Sport', 'Music', 'Natural'] },
        { name: 'Ted', interests: ['TV', 'IT', 'Coffee', 'React'] },
        { name: 'Pit', interests: ['Redux', 'Sport'] },
        { name: 'Elizabet' },
    ]);

    const updatedInterests = list.updateIn(['interests'], List(), item => {
        const index = item.indexOf('Sport');
        if (index >= 0) {
            return item.set(index, 'Programming');
        }
        return item;
    });

    console.log('>>>>>>>>>>>> Replaced interest "Sport" at "Programming": ', updatedInterests.toJS());
})();
