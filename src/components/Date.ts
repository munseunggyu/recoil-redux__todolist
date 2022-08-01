export function NowDate(){
  const today = new Date()
  const WEEKDAY = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'];
  const day = WEEKDAY[today.getDay()]
  return{
    year:today.getFullYear(),
    month:today.getMonth()+1,
    date:today.getDate(),
    day:day,
  }
}