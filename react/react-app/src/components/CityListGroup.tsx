function CityListGroup() {
  const cityList = ["北京", "上海", "广州", "深圳", "杭州", "哈尔滨"];

  return (
    <>
      <h1>City List</h1>
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
