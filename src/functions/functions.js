export const getSumOfDate = ()=> {
    const date = new Date();
    const [month, day, year] = [date.getMonth() + 1, date.getDate(), date.getFullYear()];
    const sum = month + '' + day + year;
    const result = sum.split('').reduce((total, current) => {
      return Number(total) + Number(current);
    }, 0);
    return result;
  }

export const getData = () =>{
    const data = fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    .then((res) => res.json())
    .then((res) => res);

    return data
}