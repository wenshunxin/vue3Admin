export function setLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
export function getLocal(key) {
  return JSON.parse(localStorage.getItem(key));
}
export function clearLocal() {
  localStorage.clear();
}
export function deleteItem(data) {
  localStorage.removeItem(data);
}
