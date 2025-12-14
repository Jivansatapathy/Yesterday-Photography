import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const NavigationListener = () => {
  const location = useLocation();
  const previousPathRef = useRef<string | null>(null);

  useEffect(() => {
    const currentPath = location.pathname;
    const previousPath = previousPathRef.current;

    // If navigating to home page from another page, set flag
    if (currentPath === "/" && previousPath && previousPath !== "/") {
      sessionStorage.setItem("navigatedFromOtherPage", "true");
    } else if (currentPath !== "/") {
      // Clear the flag when navigating away from home
      sessionStorage.removeItem("navigatedFromOtherPage");
    }
    
    // Update the previous path reference
    previousPathRef.current = currentPath;
    // Also store in sessionStorage for persistence across refreshes
    sessionStorage.setItem("previousPath", currentPath);
  }, [location.pathname]);

  return null;
};

export default NavigationListener;

