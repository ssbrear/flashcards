const getData = new Promise((resolve) => {
  fetch("/data")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      resolve(data);
    });
});

export { getData };
