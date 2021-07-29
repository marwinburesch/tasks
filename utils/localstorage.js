export function parseJSONFromLocalStorage(key, defaultValue) {
  const json = localStorage.getItem(key);

  if (!json) {
    return defaultValue;
  }

  const data = JSON.parse(json);
  return data;
}

export function stringifyJSONToLocalStorage(key, value) {
  const json = JSON.stringify(value);

  localStorage.setItem(key, json);
}
