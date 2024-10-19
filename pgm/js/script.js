/*
** FileName: script.js
** Description: js for Kenny's English website
** Date: 2024/9
**
*/
document.addEventListener("DOMContentLoaded", function(event) { 
  addEvent("int_des", typeText);
});

 function type(param) {
    var setParam = param + "";
    if (setParam.length < 2) {
      return "0" + setParam;
    } else {
      return setParam;
    }
  }

  function measure(cond) {
    if (cond < 10) {
      cond = "0" + cond;
    }
    return cond;
  }
  
  // start timer
  setInterval(timer, 1000);
  
  function timer() {
    var cur = new Date();
    var hh = cur.getHours();
    var mm = cur.getMinutes();
    var ss = cur.getSeconds();
    mm = measure(mm);
    ss = measure(ss);
    document.getElementById('time').innerHTML = hh + ":" + mm + ":" + ss;
    set = setTimeout(function() {
      timer()
    }, 500);
  }

  var typeText = [
    "「英語脳への改造」", 
    "オンライン英会話",
    "Prject English",
  ]

var cond = 0,
    stat = 0,
    del = false,
    br = false,
    typeTime = 80,
    typeInt = 1000,
    typeMar = 1000,
    typeDel = 20;

function addEvent(hi, bell) {
  var holdID = $("#" + hi),
      statText = bell[stat],
      mainText = holdID.children("h1"),
      subText = holdID.children("p");

  if (!del) {

    if (cond < statText.length) {
      if (statText.charAt(cond) == "|") {
        br = true;
        mainText.removeClass("bee");
        subText.addClass("bee");
        i++;
        setTimeout(function(){ addEvent(hi, bell); }, typeMar);
      } else {
        if (!br) {
          mainText.text(mainText.text() + statText.charAt(cond));
        } else {
          subText.text(subText.text() + statText.charAt(cond));
        }
        cond++;
        setTimeout(function(){ addEvent(hi, bell); }, typeTime);
      }

    } else if (cond == statText.length) {
      del = true;
      setTimeout(function(){ addEvent(hi, bell); }, typeInt);
    }

  } else {

    if (mainText.text().length > 0 || subText.text().length > 0) {
      if (subText.text().length > 0) {
        subText.text(subText.text().substring(0, subText.text().length - 1));
      } else if (mainText.text().length > 0) {
        subText.removeClass("bee");
        mainText.addClass("bee");
        mainText.text(mainText.text().substring(0, mainText.text().length - 1));
      }
      setTimeout(function(){ addEvent(hi, bell); }, typeDel);

    } else { 
      del = false;
      cond = 0;
      br = false;
      stat = (stat + 1) % bell.length;
      setTimeout(function(){ addEvent(hi, bell); }, 50);
    }
  }
}
