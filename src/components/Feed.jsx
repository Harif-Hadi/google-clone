import { Link } from "react-router-dom";

import "./Feed.css";

const Feed = ({ data, error }) => {
  if (!data) return;

  if (error) {
    return (
      <div>
        <h3 style={{ textAlign: "center", fontWeight: "400" }}>
          Failed to fetch
        </h3>
      </div>
    );
  }

  return (
    <div className="feed">
      <div>
        <p className="search_info">
          {`About ${data.searchInformation.formattedTotalResults} results (${data.searchInformation.formattedSearchTime} seconds)`}
        </p>

        {data.items.map((data, index) => (
          <div key={index}>
            <Link to={`${data.link}`} className="result_url">
              <div className="result_name-url">
                <h3>{data.title}</h3>
                <span>{data.link}</span>
              </div>
            </Link>
            <div className="result-url_info">
              <Link to={`${data.link}`}>{data.title}</Link>
              <p>{data.snippet}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
