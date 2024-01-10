import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const focusOnBody = setTimeout(() => {
      document.querySelector("body").focus();
    }, 0);

    return () => clearTimeout(focusOnBody);
  }, [pathname]);

  return null;
}
export default ScrollToTop;
