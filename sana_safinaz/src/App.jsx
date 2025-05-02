import SplashScreen from './Components/SplashScreen/SplashScreen';
import { useState, useEffect } from 'react';
import AppContent from './Components/AppContent/AppContent';
function App() {
  
  const [isLoading , setLoading] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  //const location = useLocation();
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000); // Splash duration in milliseconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    console.log('URL changed to:', location.pathname);
    <h1>Loading...</h1>
  }, [location]);
  return (
    <>
        {showSplash ? <SplashScreen /> : <AppContent />}

      
    </>
  );
}

export default App;
