import { useEffect } from "react";

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

export {
	useClickOutside
}