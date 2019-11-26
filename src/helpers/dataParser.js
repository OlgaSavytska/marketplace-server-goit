const getData = data => {
  try {
    const parsedData = JSON.parse(data);

    return parsedData;
  } catch (err) {
    console.error('Get state error: ', err);
  }
};

module.exports = getData;