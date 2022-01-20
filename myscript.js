const data = [
  {
    title: "Refactoring Third Party Service Consumption Logs",
    time: "3:45PM",
    buttonText: "main",
    url: "https://apigw-personal.fast-pay.iq",
    commit: "5 more commits",
  },
  {
    title: "Refactoring Third Party Service Consumption Logs",
    time: "3:45PM",
    buttonText: "main",
    url: "https://apigw-personal.fast-pay.iq",
    commit: "5 more commits",
  },
  {
    title: "Refactoring Third Party Service Consumption Logs",
    time: "3:45PM",
    buttonText: "main",
    url: "https://apigw-personal.fast-pay.iq",
    commit: "5 more commits",
  },
  {
    title: "Refactoring Third Party Service Consumption Logs",
    time: "3:45PM",
    buttonText: "main",
    url: "https://apigw-personal.fast-pay.iq",
    commit: "5 more commits",
  },
  {
    title: "Refactoring Third Party Service Consumption Logs",
    time: "3:45PM",
    buttonText: "main",
    url: "https://apigw-personal.fast-pay.iq",
    commit: "5 more commits",
  },
];

function getData() {
  console.log("working");
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}

function myData(id) {
  const divTimeline = document.getElementById(id);
  divTimeline.innerHTML = `${data
    .map((item, i) => {
      if (i % 2 === 0) {
        return `<div id="container" class="container left"> 
            <div class="content"> 
                <div class="contentDetailSide"> 
                  <h2>${item.title}</h2> 
                  <div class="middleDiv"> 
                      <i class="fa fa-clock-o" aria-hidden="true"></i>  
                      <label class="timeText">${item.time}</label>
                      <button class="button">${item.buttonText}</button> 
                  </div>

                  <div>
                      <i class="fa fa-at" aria-hidden="true"></i>
                      <a href=${item.url} target="_blank" class="timeText">${
          item.url
        }</a>
                  </div>
                  <hr />
                  <div class="linkDiv" >
                      <details>
                      <summary>${item.commit}</summary>
                      ${[1, 2, 3, 4, 5]
                        .map(
                          (el) =>
                            `<p class="list">Epcot is a theme park at Walt Disney World Resort featuring exciting attractions.</p>`
                        )
                        .join("")}
                      </details> 
                  </div>
                </div> 
                <div class="contentTimeSide"> 
                    <p>Jan</p> 
                    <h4>14</h4> 
                    <p>2022</p>
                </div> 
            </div> 
          </div>`;
      } else {
        return `<div id="container" class="container right"> 
          <div class="content"> 
            <div class="contentDetailSide"> 
              <h2>${item.title}</h2> 
              <div class="middleDiv"> 
                <i class="fa fa-clock-o" aria-hidden="true"></i>  
                <label class="timeText">${item.time}</label>
                <button class="button">${item.buttonText}</button> 
              </div>
              <div>
                <i class="fa fa-at" aria-hidden="true"></i>
                <a href=${item.url} target="_blank" class="timeText">${
          item.url
        }</a>
              </div>
              <hr />
              <div class="linkDiv" >
                <details>
                      <summary>${item.commit}</summary>
                      ${[1, 2, 3, 4, 5]
                        .map(
                          (el) =>
                            `<p class="list">Epcot is a theme park at Walt Disney World Resort featuring exciting attractions.</p>`
                        )
                        .join("")}
                      </details> 
              </div>
            </div>
            <div class="contentTimeSide">
              <p>Jan</p> 
              <h4>14</h4> 
              <p>2022</p>
              </div>
          </div>
        </div>`;
      }
    })
    .join("")}`;
}
