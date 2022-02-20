import { useState, useEffect } from "react"

const duplicateCount = array => {
  const counts = {}
  const countsArray = []

  array.map(type => {
    return (counts[type] = (counts[type] || 0) + 1)
  })

  for (const key of Object.keys(counts)) {
    const item = {
      title: key,
      count: counts[key],
    }

    countsArray.push(item)
  }

  return countsArray
}

export const createListOfTypes = (arr, criterias) => {
  const criteriaLists = []

  criterias.map(({ uid, title }) => {
    const criteriaList = []
    arr.map(obj => {
      if (Array.isArray(obj[uid])) {
        return obj[uid].forEach(value => {
          criteriaList.push(value)
        })
      } else {
        return criteriaList.push(obj[uid])
      }
    })

    return criteriaLists.push({
      title,
      uid,
      checkboxes: duplicateCount(criteriaList),
    })
  })

  return criteriaLists
}

export const filterBySelected = (arr, types, values) => {
  const criteriaList = []

  types.forEach(type => {
    arr.map(obj => {
      for (const value of values) {
        if (Array.isArray(obj[type])) {
          return obj[type].forEach(objValue => {
            if (objValue == value) {
              criteriaList.push(obj)
            }
          })
        } else {
          if (obj[type] == value) {
            return criteriaList.push(obj)
          }
        }
      }
      return true
    })
  })

  return criteriaList.reduce((acc, current) => {
    const x = acc.find(({ id }) => id === current.id)
    if (!x) {
      return acc.concat([current])
    } else {
      return acc
    }
  }, [])
}

export const filterByAllSelected = (arr, types, values) => {
  const returnItems = []

  arr.map(item => {
    if (values.includes(item.category)) {
      returnItems.push(item)
    }
  })

  return returnItems
}

export function useScroll() {
  const [lastScrollTop, setLastScrollTop] = useState(0)
  const [bodyOffset, setBodyOffset] = useState(
    typeof window === "undefined" || !window.document
      ? 0
      : document.body.getBoundingClientRect()
  )
  const [scrollY, setScrollY] = useState(bodyOffset.top)
  const [scrollX, setScrollX] = useState(bodyOffset.left)
  const [scrollDirection, setScrollDirection] = useState()

  const listener = () => {
    setBodyOffset(
      typeof window === "undefined" || !window.document
        ? 0
        : document.body.getBoundingClientRect()
    )
    setScrollY(-bodyOffset.top)
    setScrollX(bodyOffset.left)
    setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up")
    setLastScrollTop(-bodyOffset.top)
  }

  useEffect(() => {
    window.addEventListener("scroll", listener)
    return () => {
      window.removeEventListener("scroll", listener)
    }
  })

  return {
    scrollY,
    scrollX,
    scrollDirection,
  }
}
