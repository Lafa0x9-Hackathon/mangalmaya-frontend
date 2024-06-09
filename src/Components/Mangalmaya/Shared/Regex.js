export const validEmail = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
);
export const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

export const validName = new RegExp(" /^[a-zA-Z ]{2,30}$/");
export const validNumber = new RegExp("^[0-9]{10}$");
