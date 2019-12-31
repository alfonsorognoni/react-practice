import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

// import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

// const API = 'http://localhost:3000/initalState';

const Home = ({ myList, trends, originals }) => {

  // const [videos, setVideos] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:3000/initalState')
  //     .then(response => response.json())
  //     .then(data => setVideos(data));
  // }, []);

  // const InitialState = useInitialState(API);

  return (
    <>
      <Search />
      {myList && myList.length > 0 && (
        <Categories title='Mi Lista'>
          <Carousel>
            {myList && myList.map((item) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <CarouselItem key={item.id} {...item} isList />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carousel>
          {trends && trends.map((item) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title='Originales'>
        <Carousel>
          {originals && originals.map((item) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};
// export default Home;
export default connect(mapStateToProps, null)(Home);
