export const arraySorter = (field, order, arrayToSort) => {
  const sortFunctions = {
    asc: (a, b) => a[field] > b[field] ? 1 : -1,
    desc: (a, b) => a[field] > b[field] ? -1 : 1
  }

  return [...arrayToSort].sort(sortFunctions[order])
}
