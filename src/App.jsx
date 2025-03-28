import React, { useState, useEffect } from 'react';
import { Loader } from './components/ui'
import {  Header, Footer, Main } from './components/layout';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
 
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="">
      <div className="flex flex-col items-center justify-between p-0 min-h-screen bg-background">
        <Header />
        <main className="flex-1 container py-8">
         <Main />
        </main>
        <Footer />
      </div>
    </div>
  );
}
export default App;
