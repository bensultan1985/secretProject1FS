let image = document.getElementById("image");
let imageCover = document.getElementById("image-cover");
let imageContainer = document.getElementById("image-container");
let shareText = document.getElementById("custom-share-text");
let todaysGameDate = "";

const getTodaysGameDate = () => {
  let today = new Date();
  const yyyy = today.getFullYear().toString();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  today = mm + "/" + dd + "/" + yyyy;
  return today;
};

const state = {
  imageStep: 0,
  inputValue: "",
  answer: "",
  status: "",
  image: "",
  scoreCard: {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
  },
};

const stepMap = {
  0: 0.85,
  1: 0.75,
  2: 0.65,
  3: 0.58,
  4: 0.5,
  5: 0.45,
  6: 0.35,
  7: 0,
};

async function imageExists(image_url) {
  var http = new XMLHttpRequest();
  http.open("HEAD", "https://www.bensultan.com" + "/men/" + image_url, true);
  http.setRequestHeader("Access-Control-Allow-Origin: *");
  http.send();
  return http.status != 404;
}

const findLastSuccessfulImage = () => {
  let exists = false;
  let data;
  let gameDataKeys = Object.keys(gameData);
  for (let i = gameDataKeys.length - 1; i > 0; i--) {
    if (!isPastPuzzle(gameDataKeys[i])) {
      exists = false;
    } else {
      exists = imageExists(gameData[gameDataKeys[i]].image);
      data = gameDataKeys[i];
    }
    if (exists) return data;
  }

  return data;
};

function stripQueryStringAndHashFromPath(url) {
  return url.split("?")[0].split("#")[0];
}

const onLoad = (testDate) => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  let paramObj = Object.fromEntries(urlSearchParams);
  let param = Object.values(paramObj)[0];
  let lastPuzzle = findLastSuccessfulImage();
  todaysGameDate =
    testDate ||
    (((gameData[param] && isPastPuzzle(param)) ||
      Object.values(paramObj)[1] == "admin") &&
      param) ||
    (gameData[getTodaysGameDate()] && getTodaysGameDate()) ||
    lastPuzzle;
  state.answer = gameData[todaysGameDate].name;
  state.image =
    "https://www.bensultan.com/men/" + gameData[todaysGameDate].image;
  state.issue = gameData[todaysGameDate].issue;
  setImage();
  updateScoreCard();
  window.history.pushState(
    "string",
    "Beardle",
    stripQueryStringAndHashFromPath(location.href)
  );
};

const setImage = () => {
  image.src = state.image;
};

const adjustImage = (step) => {
  document.getElementById("loading-window").style.display = "none";
  document.getElementById("game-container").style.display = "block";
  let imageWin = document.getElementById("image-win");
  imageCover.style.overflow = "hidden";
  // let height = ($(image).height() * stepMap[step])
  imageCover.style.height = $(image).height() * stepMap[step] + "px";
  imageCover.style.width = $(image).width() + "px";
  imageCover.style.margin = "auto";
  imageCover.style.maxHeight = $(image).height() * stepMap[step] + "px";
  imageWin.style.height = $(image).height() + "px";
  imageWin.style.width = $(image).width() + "px";
  imageWin.style.margin = "auto";
  imageWin.style.maxHeight = $(image).height() + "px";
  imageContainer.style.width = $(image).width() + "px";
  imageContainer.style.maxHeight = $(image).height() + "px";
};

const getShareText = (forCopy) => {
  let y = "🟡";
  let g = "🟢";
  let date = todaysGameDate;
  let str = "";
  if (forCopy) {
    str = `https://beardle.app `;
  } else {
    str = `beardle.app `;
  }
  str += `puzzle #: ${state.issue} | tries: ${
    state.status == "win" ? state.imageStep + 1 : "X"
  } | `;
  for (let i = 0; i < state.imageStep; i++) {
    if (state.status == "win" || i < state.imageStep) str += y;
  }
  if (state.status == "win") str += g;
  return str;
};

const checkWin = () => {
  if (state.status == "win") {
    $("#controls-container").hide();
    $("#image-win").css("display", "block");
    $("#image-win").css("background", "none");
    $("#status-text").text("You Win!");
    $("#name-text").text(state.answer[0]);

    $("#image-cover").css("display", "none");
    $("#custom-share-container").show();
    $("#intro").css("display", "none");
    $("#countdown-clock").css("display", "block");

    shareText.innerHTML = getShareText();
  }
  if (state.status == "lose") {
    $("#controls-container").hide();
    $("#custom-share-container").show();
    $("#image-cover").css("display", "none");
    $("#image-win").css("display", "block");

    $("#status-text").text("You Lose!");
    $("#name-text").text(state.answer[0]);

    $("#intro").css("display", "none");
    $("#countdown-clock").css("display", "block");

    shareText.innerHTML = getShareText();
  }
};

const checkGuess = () => {
  state.inputValue = state.inputValue.trimEnd();
  if (state.answer.find((name) => name == state.inputValue)) {
    state.scoreCard[state.imageStep] = "c";
    state.status = "win";
  } else {
    if (state.stepMap != 7) {
      state.scoreCard[state.imageStep] = "X";
      if (state.imageStep < 7) {
        state.imageStep++;
        adjustImage(state.imageStep);
      } else if (state.imageStep == 7) {
        state.status = "lose";
        state.imageStep++;
        adjustImage(state.imageStep);
      }
    }
  }
  if (state.imageStep == 7) $("#hint-button").text("give up");
  checkWin();
};

const updateScoreCard = (isWin) => {
  document.getElementById("score-tracker").innerHTML =
    state.imageStep < 8 ? `try ${state.imageStep + 1}/8:` : "no more tries";
  if (document.getElementById("score-tracker").innerHTML == "no more tries")
    document.getElementById("score-tracker").style.fontSize = "1rem";
  for (let card in state.scoreCard) {
    if (!isWin) {
      if (state.imageStep > 7) {
        document.getElementById("sc" + 7).style.color = "#F7B02B";
        document.getElementById("sc" + 7).innerHTML = "X";
        // state.imageStep = 7
        return;
      }
      if (card < state.imageStep) {
        if (state.scoreCard[card] == "c") {
          document.getElementById("sc" + state.imageStep).innerHTML = "check";
          document.getElementById("sc" + card).style.color = "green";
        } else {
          document.getElementById("sc" + card).style.color = "#F7B02B";
          document.getElementById("sc" + card).innerHTML = "X";
        }
      } else {
        return;
      }
    } else {
      if (card == state.imageStep) {
        if (state.scoreCard[card] == "c") {
          document.getElementById("sc" + card).style.color = "green";
          document.getElementById("sc" + state.imageStep).innerHTML = "✓";
        } else {
          document.getElementById("sc" + state.imageStep).style.color =
            "#F7B02B";
          document.getElementById("sc" + state.imageStep).innerHTML = "X";
        }
      }
    }
  }
};

const updateFbShare = () => {
  // let fbImage = (document.getElementsByName('fb-image'))[0];
  // fbImage.content = 'icon.jpeg'
  // console.log(fbImage)
  // let fbDescription = (document.getElementsByName('fb-description'))[0];
  // fbDescription = 'testtext'
  // fbShareButton = document.getElementById('fb-share-button')
  // fbShareButton['data-href'] = 'https://beardle.app/step5'
};

const checkStatus = () => {
  if (state.status != "win") {
    updateScoreCard(false);
  } else {
    updateScoreCard(true);
    // state.imageStep = 7
    adjustImage(state.imageStep);
  }
  updateFbShare();
};

const gameReset = () => {
  state = {
    imageStep: 0,
    inputValue: "",
    status: "",
  };
  $("#image-win").style.display = "none";
  $("#image-win").text = "You Win!";
};

$(image).on("load", function () {
  adjustImage(state.imageStep);
});

$("#hint-button").on("click", () => {
  checkGuess(state.inputValue);
  checkStatus();
  // if (state.imageStep > 7) state.imageStep = 7
});

$("#guess-input").on("change", function () {
  this.value = this.value.toUpperCase();
  state.inputValue = this.value;
});

$("#guess-button").on("click", function (event) {
  event.preventDefault();
  if (state.inputValue == "") return;

  checkGuess(state.inputValue);
  checkStatus();
  $("#guess-input").val("");
  state.inputValue = "";
  // if (state.imageStep > 7) state.imageStep = 7
});
$("#guess-button").on("submit", function (event) {
  event.preventDefault();
  if (state.inputValue == "") return;

  checkGuess(state.inputValue);
  checkStatus();
  $("#guess-input").val("");
  state.inputValue = "";
  // if (state.imageStep > 7) state.imageStep = 7
});

$("#custom-share-button").on("click", function () {
  /* Get the text field */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(getShareText(true));
  this.innerHTML = "score copied to clipboard!";
  this.style.color = "green";
  setTimeout(() => {
    this.innerHTML = "share score";
    this.style.color = "black";
  }, 2000);
});

window.addEventListener("resize", () => {
  adjustImage(state.imageStep);
});

/* document.getElementById('testingid').addEventListener('click', () => {
    FB.ui({
        href: location.origin,
        method: 'share',
        // method: 'share_open_graph',
        action_type: 'og.shares',
        display: 'popup',
        quote: 'this is a quote',
        action_properties: JSON.stringify({
          object: {
            'og:url': 'https://beardle.app',
            'og:title': 'Title to show',
            'og:description': 'The description',
            'og:image': 'icon.jpeg'
          }
        })
      }, function(response){console.log(response)}).then(data=> {console.log({data})});
}) */

////countdown clock

var today = new Date();

var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
tomorrow.setHours(0, 0, 0, 0);

var diffMs = tomorrow - today; // milliseconds between now & Christmas
var minutes = Math.floor(diffMs / 1000 / 60);

countdown(minutes);

//alert(diffDays + " days, " + diffHrs + " hours, " + diffMins + " minutes until Christmas 2015 =)");

function countdown(minutes) {
  var target_date = new Date().getTime() + minutes * 60 * 1000; // set the countdown date
  var time_limit = minutes * 60 * 1000;
  //set actual timer
  /*setTimeout(
    function() 
    {
      alert( 'done' );
    }, time_limit );*/

  var days, hours, minutes, seconds; // variables for time units

  var countdown = document.getElementById("tiles"); // get tag element

  getCountdown();

  setInterval(function () {
    getCountdown();
  }, 1000);

  function getCountdown() {
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    if (seconds_left >= 0) {
      if (seconds_left * 1000 < time_limit / 2) {
        $("#tiles").removeClass("color-full");
        $("#tiles").addClass("color-half");
      }
      if (seconds_left * 1000 < time_limit / 4) {
        $("#tiles").removeClass("color-half");
        $("#tiles").addClass("color-empty");
      }

      days = pad(parseInt(seconds_left / 86400));
      seconds_left = seconds_left % 86400;

      hours = pad(parseInt(seconds_left / 3600));
      seconds_left = seconds_left % 3600;

      minutes = pad(parseInt(seconds_left / 60));
      seconds = pad(parseInt(seconds_left % 60));

      // format countdown string + set tag value
      countdown.innerHTML =
        "<span>" +
        hours +
        ":</span><span>" +
        minutes +
        ":</span><span>" +
        seconds +
        "</span>";
    }
  }

  function pad(n) {
    return (n < 10 ? "0" : "") + n;
  }
}

const openPastModal = () => {
  $("#past-modal-body").text("");
  let parent = document.createElement("div");
  let dates = Object.keys(gameData);
  dates.reverse();

  dates.forEach((date) => {
    if (isPastPuzzle(date)) {
      let comp = document.createElement("div");
      let link = document.createElement("a");
      let label = document.createElement("span");
      if (!isTodaysPuzzle(date)) {
        label.innerHTML = date + " " + "puzzle #: " + gameData[date].issue;
      } else {
        label.innerHTML = `today,` + " " + "puzzle #: " + gameData[date].issue;
      }
      comp.id = date;
      var params = {
        date: date,
      };

      var esc = encodeURIComponent;
      var query = Object.keys(params)
        .map((k) => esc(k) + "=" + esc(params[k]))
        .join("&");
      link.href = location.origin + "?" + query;
      comp.appendChild(link);
      link.appendChild(label);
      parent.appendChild(comp);
    }
  });
  document.getElementById("past-modal-body").appendChild(parent);
  $("#exampleModalLong").modal("show");
};

const closePastModal = () => {
  $("#exampleModalLong").modal("hide");
};

const openBlogModal = () => {
  $("#blogModal").modal("show");
};

const closeBlogModal = () => {
  $("#blogModal").modal("hide");
};

const isPastPuzzle = (date) => {
  let today = getTodaysGameDate();
  date = date.split("/");
  today = today.split("/");
  var newDate = new Date(date[2], date[0] - 1, date[1]).getTime();
  var newToday = new Date(today[2], today[0] - 1, today[1]).getTime();
  return newDate <= newToday ? true : false;
};

const isTodaysPuzzle = (date) => {
  let today = getTodaysGameDate();
  date = date.split("/");
  today = today.split("/");
  var newDate = new Date(date[2], date[1], date[0]).getTime();
  var newToday = new Date(today[2], today[1], today[0]).getTime();
  return newDate === newToday ? true : false;
};

$("#header").on("click", () => window.open(window.location.origin, "_self"));

const isImage = async (image) => {
  var http = new XMLHttpRequest();
  let image_url = "https://www.bensultan.com/men/" + image;
  http.open("HEAD", image_url, true);
  http.setRequestHeader("Access-Control-Allow-Origin: *");
  http.send();
  // console.log(http.status, 'status')
  // console.log(image_url)
  return http.status != 404;
};

document.getElementById("sultanbros").addEventListener("click", () => {
  window.open("https://www.bensultan.com", "_blank");
});
