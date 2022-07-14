export const getDogImage = () => () =>
  fetch("https://random.dog/woof.json").then((res) => res.json());

export users