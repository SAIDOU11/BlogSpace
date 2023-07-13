fetch(
  "https://apis.scrimba.com/openweathermap/data/2.5/weather?q=Saint-Quentin&units=metric"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
