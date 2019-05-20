const fromJS = require('immutable').fromJS;

const rectangle = {
    upperBound: 2000,
    lowerBound: 1000,
    minTime: 100,
    maxTime: 200,
};

const points = [
    { position: 1333, time: 110 },
    { position: 1232, time: 115 },
    { position: 1999, time: 120 },
    { position: 1500, time: 125 },
    { position: 3444, time: 130 },
    { position: 334, time: 135},
    { position: 4321, time: 145 },
    { position: 12331, time: 150 },
    { position: 123, time: 155 },
    { position: 1334, time: 160 },
    { position: 145, time: 165 },
    { position: 11232, time: 170 },
    { position: 19999, time: 175 },
];

const inRange = (position, time) => (
    position >= rectangle.lowerBound
    && position <= rectangle.upperBound
    && time >= rectangle.minTime
    && time <= rectangle.maxTime
);

/*-----------VanillaJS--------*/
(function () {
    const pointsInRange = [];
    for (let i = 0; i < points.length && inRange(points[i].position, points[i].time); i++) {
        pointsInRange.push(points[i]);
    }
    console.log('>>>>>>>>>>>> [VanillaJS] Get points after first entering:\n', pointsInRange);
})();


/*-----------ImmutableJS--------*/
(function () {
    const pointsInRange = fromJS(points).takeWhile(item => (
        inRange(item.get('position'), item.get('time'))
    ));
    console.log('>>>>>>>>>>>> [ImmutableJS] Get points after first entering:\n', pointsInRange.toJS());
})();
