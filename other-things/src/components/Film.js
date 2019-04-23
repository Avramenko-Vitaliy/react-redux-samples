import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

const imgSize = { height: 500 };

const Film = ({ film }) => (
    <div className="container-fluid">
        <div className="row">
            <div className="col-sm-6 col-lg-3">
                <img
                    src={`https://image.tmdb.org/t/p/w500${film.get('poster_path')}`}
                    className="align-self-start mr-3"
                    alt="Banner"
                    style={imgSize}
                />
            </div>
            <div className="col">
                <h1 className="card-text">
                    {film.get('title')}
                </h1>
                <p>
                    {film.get('overview')}
                </p>
            </div>
        </div>
    </div>
);

Film.propType = {
    film: ImmutablePropTypes.map,
};

export default Film;
