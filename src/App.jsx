import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Alert } from './components/alert';
import { Card } from './components/card';

const options = {
  root: null,
  rootMargin: '27px',
  threshold: 0.5,
};

function App() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const headerRef = useRef(null)

  const handleIntersection = ([entry]) => setIsHeaderVisible(entry.isIntersecting)

  useEffect(() => {
    if (headerRef.current) {
      const observer = new IntersectionObserver(handleIntersection, options);
      observer.observe(headerRef.current);
      
      // eslint-disable-next-line react-hooks/exhaustive-deps
      return () => {observer.unobserve(headerRef.current)};
    }
  }, [headerRef]);


  return (
    <div className="App">
      <header ref={headerRef} className="App-header">
        <Alert></Alert>
      </header>
      <Card isHeaderVisible={isHeaderVisible} />
    </div>
  );
}

export default App;
