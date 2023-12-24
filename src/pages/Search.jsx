import { useEffect } from "react";
import Header from "../components/Header";
import Feed from "../components/Feed";
import useSearch from "../hooks/useSearch";
import { Spinner } from "react-spinners-css";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const { isLoading, data, error, fetchDataHandler } = useSearch();

  const user = localStorage.getItem("user");
  useEffect(() => {
    if (!user) navigate("/");
  }, []);

  return (
    <div>
      <Header onSubmit={fetchDataHandler} />
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <Spinner />
        </div>
      ) : (
        <div className="feed_container">
          <Feed data={data} error={error} />
        </div>
      )}
    </div>
  );
};

export default Search;
