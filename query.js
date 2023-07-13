fetch(
  "https://apis.scrimba.com/openweathermap/data/2.5/weather?q=Saint-quentin&units=metric"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

// 21a165a053e88742a0cdcf7c97d0f6ca
