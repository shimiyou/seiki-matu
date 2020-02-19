'use strict';

var countWord = '22世紀まであと'
var endDate = new Date('2101/01/01 00:00:00');
var interval = 1000;


function countdownTimer(){
  var nowDate = new Date();
  var period = endDate - nowDate;
  var addZero = function(n){return('0'+n).slice(-2);}
  var addZeroDay = function(n){return('0'+n).slice(-5);}
  if (period >= 0) {
    var day = Math.floor(period / (interval * 60 * 60 * 24));
    period -= (day *(interval * 60 * 60 * 24));
    var hour = Math.floor(period / (interval * 60 * 60));
    period -= (hour *(interval * 60 * 60));
    var minutes =  Math.floor(period / (interval * 60));
    period -= (minutes * (interval * 60));
    var second = Math.floor(period / interval);
    var insert = "";
    insert += '<span class="d">' + addZeroDay(day) + '日' + '</span>';
    insert += '<span class="h">' + addZero(hour) + '時間' + '</span>';
    insert += '<span class="m">' + addZero(minutes) + '分' + '</span>';
    insert += '<span class="s">' + addZero(second) + '秒' + '</span>';
    document.getElementById('introduction').innerHTML = countWord;
    document.getElementById('result').innerHTML = insert;
    setTimeout(countdownTimer,10);
  } else {
    var introduction = 'あけましておめでとうございます';
    var finish = '22世紀になりました';
    document.getElementById('introduction').innerHTML = introduction;
    document.getElementById('result').innerHTML = finish;
  }
}

countdownTimer();