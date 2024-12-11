```javascript
import { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const isMountedRef = useRef(true);

  useEffect(() => {
    console.log('Component mounted');
    const controller = new AbortController();
    const signal = controller.signal;
    
    const fetchData = async () => {
      try {
        const response = await fetch('/some-api-endpoint', { signal });
        const data = await response.json();
        if (isMountedRef.current) {
          // Update state only if the component is still mounted
          // ...
        }
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
    return () => {
      console.log('Component unmounted');
      isMountedRef.current = false; // Prevent updating state after unmount
      controller.abort();
    };
  }, []);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```