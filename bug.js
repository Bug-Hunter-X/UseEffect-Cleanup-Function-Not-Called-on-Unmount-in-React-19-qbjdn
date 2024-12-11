```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted');
    // Perform some side effect here, such as fetching data
    return () => {
      console.log('Component unmounted');
      // Clean up the side effect here
    };
  }, []); // Empty dependency array ensures that the effect runs only once

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