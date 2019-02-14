function openTimeline(open_num){
  document.getElementById("OpenTimeline" + open_num).style.display = "block";
  return false;
}
function closeTimeline(close_num){
  document.getElementById("OpenTimeline" + close_num).style.display = "none";
  return false;
}