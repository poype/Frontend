function CityListGroup() {
  const cityList: string[] = [];

  return (
    <>
      <h1>City List</h1>
      {cityList.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {cityList.map((city) => (
          <li key={city} className="list-group-item">
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default CityListGroup;
