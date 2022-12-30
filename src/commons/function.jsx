import { useEffect } from "react";

// Click out side element
function useClickOutside(ref, setState) {
  useEffect(() => {
    function handClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setState(false);
      }
    }
    document.addEventListener("mousedown", handClick);
    return () => {
      document.removeEventListener("mousedown", handClick);
    };
  }, [ref, setState]);
}

// Check number is float or integer
function isInt(number) {
  return Number(number) === number && number % 1 === 0;
}

export {
	useClickOutside,
  isInt
}