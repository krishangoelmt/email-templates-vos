let dummaydata = {};
fetch("dummyData.json")
  .then(function(response) {
    if (response.status !== 200) {
      console.log(
        "Looks like there was a problem. Status Code: " + response.status
      );
      return;
    }

    // Examine the text in the response
    response.json().then(function(data) {
      console.log(data);
      dummaydata = data;
    });
  })
  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });

const getValueByToken = value => {
  return dummaydata[value] || value;
};

const beautify = () => {
  const innerHTML =
    (document && document.body && document.body.innerHTML) || "";
  const newHTMLAfterRemovingTokens = innerHTML.replace(
    /(\$[\w|\W]*?\$)/gim,
    value => getValueByToken(value)
  );

  document.body.innerHTML = newHTMLAfterRemovingTokens;
};
// window.onload = beautify();
