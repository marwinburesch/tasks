export function parseJSONFromLocalStorage(key, defaultValue) {
  const json = localStorage.getItem(key);

  if (!json) {
    return defaultValue;
  }

  const data = JSON.parse(json);
  return data;
}
