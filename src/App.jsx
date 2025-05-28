import React from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Services from './component/Services';
import PortfolioSection from './component/PortfolioSection';
import CallToAction from './component/CallToAction';
import Footer from './component/Footer';
import ClientLogos from './component/ClientLogos';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Hero />
      <Services />
      
      <PortfolioSection 
        title="Our digital company has been developing products for 15 years."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget leo facilisis, gravida arcu ac, condimentum est."
        imageSrc="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        imagePosition="right"
        portfolioType="Web Design Portfolio"
        wrap  = "reverse"
      />
      
      <PortfolioSection 
        title="We've got a lot of awards for our work and develop applications that became popular in the world."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget leo facilisis, gravida arcu ac, condimentum est."
        imageSrc="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        imagePosition="left"
        portfolioType="Web Development Portfolio"
        wrap  = "normal"
      />
      
      <PortfolioSection 
        title="Promotion of your product is an important step in making money and constant popularity."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget leo facilisis, gravida arcu ac, condimentum est."
        imageSrc="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        imagePosition="right"
        portfolioType="Digital Marketing Portfolio"
        wrap  = "reverse"
      />
      
      <ClientLogos />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;