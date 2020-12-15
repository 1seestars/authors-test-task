export const arraySorter = (field, order, arrayToSort) => {
  const sortFunctions = {
    asc: (a, b) => {
      if (a[field] === b[field]) return 0
      if (a[field] > b[field]) {
        return 1
      } else return -1
    },
    desc: (a, b) => {
      if (a[field] === b[field]) return 0
      if (a[field] > b[field]) {
        return -1
      } else return 1
    }
  }

  return [...arrayToSort].sort(sortFunctions[order])
}
