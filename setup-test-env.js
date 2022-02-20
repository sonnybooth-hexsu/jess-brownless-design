import "@testing-library/jest-dom/extend-expect"

window.matchMedia =
  window.matchMedia ||
  function() {
    return {
      matches: false,
      addListener: function addListener() {
        return null
      },
      removeListener: function removeListener() {
        return null
      },
    }
  }
