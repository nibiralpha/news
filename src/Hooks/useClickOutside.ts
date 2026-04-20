import { useEffect } from "react";
import { isMobile } from "../Utils/helper";

const useOnClickOutside = (ref: any, handler: any) => {
  useEffect(
    () => {
      const listener = (event: any) => {

        if (
          !ref.current ||
          ref.current.contains(event.target) ||
          event.target.id == "standard-select" ||
          isMobile.any()
        ) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    [ref, handler],
  );
};

export default useOnClickOutside;
