import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const App = () => {

  // const [videos, setVideos] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:3000/initalState')
  //     .then(response => response.json())
  //     .then(data => setVideos(data));
  // }, []);

  const InitialState = useInitialState(API);

  return (
    <div className='App'>
      <Header />
      <Search />
      {InitialState.mylist && InitialState.mylist.length > 0 && (
        <Categories title='Mi Lista'>
          <Carousel>
            {InitialState.mylist && InitialState.mylist.map((item) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carousel>
          {InitialState.trends && InitialState.trends.map((item) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title='Originales'>
        <Carousel>
          {InitialState.originals && InitialState.originals.map((item) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
