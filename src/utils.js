// Returns today's date as YYYY-MM-DD
export function todayStr() {
  return daysAgo(0);
}

// Returns the date N days ago as YYYY-MM-DD
export function daysAgo(n) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
