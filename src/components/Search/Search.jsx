import "./Search.css";
const Search = () => {
  return (
    <>
      <div className="searchContainer">
        <div className="d-flex justify-content-center">
          <h3 className="text-center title">
            Stay Up to Date with Midani
            <span style={{ color: "#C4253B" }}>.</span>
          </h3>
        </div>
        <div className="search">
          <input type="text" placeholder="Email address" name="" id="" />
          <button>Submit</button>
        </div>
      </div>
    </>
  );
};
export default Search;
