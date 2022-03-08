import React, { useState } from "react";
import FetchAction from "./UI/FetchAction";
import Table from "./UI/Table/Table";

const fetchActionOptions = [
  "Characters",
  "Planets",
  "Starships",
  "Vehicles",
  "Species"
];

const MovieCard = ({ movie }) => {
  const [data, setData] = useState([]);

  const producers = movie.producer.split(",");

  return (
    <div className="card m-2">
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.opening_crawl}</p>

        <span className="badge badge-primary mr-1">{movie.director}</span>
        {producers.map((producer, i) => (
          <span className="badge badge-warning mr-1" key={i}>
            {producer}
          </span>
        ))}

        <div className="mt-2">
          <small>See </small>
          {fetchActionOptions.map((option, index) => (
            <FetchAction
              key={index}
              title={option}
              fetchTarget={movie[option.toLowerCase()]}
              onDataFetched={(fetchedData) => setData(fetchedData)}
            />
          ))}
          {data.length > 0 && (
            <Table
              columns={Object.keys(data[0])}
              data={data}
              onTableClose={() => setData([])}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
