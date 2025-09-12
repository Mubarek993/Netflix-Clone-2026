import React from 'react'
import Row from "../Row/Row"
import requests from '../../../Utils/Requests'

const Rowlst = () => {
  return (
    <>
      {/* <Row title="NEtflix ORGINALS" fetchUrl={requests.fetchNetflixOriginals} /> */}
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isLargeRow={true}
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="TV Shows" fetchUrl={requests.fetchTVShows} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </>
  );

}

export default Rowlst
