import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useScrollToHash() {
  const location = useLocation();

  // useLayoutEffect is generally preferred for DOM manipulations like scrolling
  // to ensure they happen before the browser paints.
  useLayoutEffect(() => {
    if (location.hash) {
      // Remove the '#' from the hash to get the ID
      const id = location.hash.substring(1); 
      const element = document.getElementById(id);

      if (element) {
        // Scroll smoothly to the element
        element.scrollIntoView({ behavior: 'smooth', block: 'center' }); 
      }
    } else {
      // Optional: Scroll to the top of the page if there's no hash on navigation
      window.scrollTo(0, 0); 
    }
  }, [location]); // Re-run this effect whenever the location object changes
}

export default useScrollToHash;