/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
export const generateAleatory = (arr) => {
  let i = arr.length;
  let j = 0;
  let temp;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));

    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return arr;
};
