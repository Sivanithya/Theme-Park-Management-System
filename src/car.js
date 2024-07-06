import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';

const MyComponent = () => {
  return (
    <>
    
      <ScrollCarousel
        autoplay
        autoplaySpeed={4}
        speed={5}
        onReady={() => console.log('I am ready')}
      >
        {[
          {
            src: 'https://tse1.mm.bing.net/th?id=OIP.wOWqc5UH5SRwoWm9oncQdQHaE8&pid=Api&P=0&h=180',
            width: '400px',  
            height: '300px', 
          },
          {
            src: 'https://tse2.mm.bing.net/th?id=OIP.LEAoX6HsU48ss27-_j1zAAHaE8&pid=Api&P=0&h=180',
            width: '500px',  
            height: '300px', 
          },
          {
            src: 'https://tse4.mm.bing.net/th?id=OIP.eeDv0jT5elie9FPY0ZHwSgHaEN&pid=Api&P=0&h=180',
            width: '500px',  
            height: '300px', 
          },
          {
            src: 'https://tse2.mm.bing.net/th?id=OIP.vPPpM-AxrEsGVj6-x6MICgHaDY&pid=Api&P=0&h=180',
            width: '500px',  
            height: '300px', 
          },
          {
            src: 'https://tse1.mm.bing.net/th?id=OIP._QIR32903-DwXDtW6VZqHwHaE7&pid=Api&P=0&h=180',
            width: '500px',  
            height: '300px', 
          },
          {
            src: 'https://tse4.mm.bing.net/th?id=OIP.u61T7XWroPuDa_LENbol4gAAAA&pid=Api&P=0&h=180',
            width: '500px',  
            height: '300px', 
          },
          {
            src: 'https://i.ytimg.com/vi/l416PuWUYH4/maxresdefault.jpg',
            width: '500px',  
            height: '300px', 
          },
        ].map((image, index) => (
          <div key={index} className='bg-blue-100/20 border-1 border-blue-800/50 rounded'>
            <img
              src={image.src}
              alt={`Image ${index}`}
              style={{ width: image.width, height: image.height }}
            />
          </div>
        ))}
      </ScrollCarousel>
    </>
  );
};

export default MyComponent;