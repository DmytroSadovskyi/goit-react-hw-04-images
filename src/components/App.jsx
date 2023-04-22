import { useState, useEffect } from 'react';
import fetchImagesByQuery from 'services/api-service';
import Searchbar from './Searchbar';
import ScrollToTop from 'react-scroll-up';
import Container from './Container';
import { ToastContainer } from 'react-toastify';
import ImagesGallery from 'components/ImagesGallery';
import LoadMoreButton from 'components/Button';
import Spinner from 'components/Loader/Loader';

const App = () => {
  const [images, setImages] = useState([]);
  const [CurrentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmited, setIsSubmited] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    async function getImages() {
      try {
        setIsLoading(true);
        setError(null);
        const { hits } = await fetchImagesByQuery(query, CurrentPage);
        setImages(prevImages => [...prevImages, ...hits]);
        setIsSubmited(true);
      } catch (error) {
        setError('Try again');
      } finally {
        setIsLoading(false);
      }
    }

    getImages();
  }, [query, CurrentPage]);

  const onChangeQuery = query => {
    setQuery(query);
    setCurrentPage(1);
    setImages([]);
    setError(null);
  };

  const loadMore = () => {
    setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
  };

  const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <Searchbar onSubmit={onChangeQuery} />
      <Container>
        {!query && !images.length && (
          <div style={{ maxWidth: '280px', margin: 'auto' }}>
            <p>
              To start using this app please type your search query and press 🔍
              button
            </p>
          </div>
        )}
        {isSubmited && images.length === 0 && !isLoading && (
          <p style={{ maxWidth: '206px', margin: 'auto' }}>
            Sorry but we did not find any images 😔 Please try again
          </p>
        )}
        {images.length > 0 && <ImagesGallery images={images} />}
        {isLoading && <Spinner />}
        {shouldRenderLoadMoreButton && (
          <LoadMoreButton onButtonClick={loadMore} />
        )}

        <ScrollToTop
          showUnder={160}
          style={{
            backgroundColor: 'yellowgreen',
            padding: '20px',
            borderRadius: '50%',
          }}
        >
          <span>UP</span>
        </ScrollToTop>
        <ToastContainer autoClose={1000} />
      </Container>
    </>
  );
};

export default App;
