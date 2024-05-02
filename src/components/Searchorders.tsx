import Table from "./Table";

const Searchorders = () : JSX.Element => {

    return (
        <div className="searchBox">
            <label htmlFor="orderId">Order Id:</label>
            <input id="orderId" type="text" />
            <button>Search</button>
            <Table />
        </div>
    );
}

export default Searchorders