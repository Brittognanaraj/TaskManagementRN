import Moment from 'moment';

export const getTaskLabel = () => {
  const data = [
    {label: 'Alpha', value: 'Alpha'},
    {label: 'Beta', value: 'Beta'},
    {label: 'Release 1', value: 'Release 1'},
    {label: 'Release 2', value: 'Release 2'},
    {label: 'Release 3', value: 'Release 3'},
    {label: 'Release 4', value: 'Release 4'},
  ];

  return data;
};

export function convertToDDMMYYY(str) {
  var date = new Date(str),
    mnth = ('0' + (date.getMonth() + 1)).slice(-2),
    day = ('0' + date.getDate()).slice(-2);
  return [day, mnth, date.getFullYear()].join('/');
}

export function getCurrentDateInDDMMYYYY() {
  var currentDate = Moment().format('DD/MM/YYYY');
  return currentDate;
}

export function msToTime(d) {
  console.log('--D--', d);
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);
  var s = Math.floor((d % 3600) % 60);

  var hDisplay = h > 0 ? h + (h == 1 ? '' : '') : '00';
  var mDisplay = m > 0 ? m + (m == 1 ? '' : '') : '00';
  var sDisplay = s > 0 ? s + (s == 1 ? '' : '') : '00';

   
  console.log('--DTTT--', hDisplay + ':' + mDisplay + ':' + sDisplay);
  return hDisplay + ':' + mDisplay + ':' + sDisplay;
}
