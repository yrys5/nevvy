export function convertToReadableDate(date) {
    let dateObject = new Date(date);
    let hours = dateObject.getHours().toString().padStart(2, "0");
    let minutes = dateObject.getMinutes().toString().padStart(2, "0");
    let day = dateObject.getDate().toString().padStart(2, "0");
    let month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
    let year = dateObject.getFullYear();
  
    return `${hours}:${minutes} ${day}.${month}.${year}`;
  }