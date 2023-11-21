import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import VideoSearch from '../components/video/VideoSearch';
import { fetchFromAPI } from '../utils/api';
import Main from '../components/section/Main';

const Search = () => {
  const { searchId } = useParams();
  const [videos, setVideos] = useState([]);
  const [nextpageToken, setNextPageToken] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setVideos([]);
    setLoading(true);
    fetchVideos(searchId);
  }, [searchId]);

  const fetchVideos = (query, pageToken = '') => {
    fetchFromAPI(`search?type=video&part=snippet&q=${query}&pageToken=${pageToken}`)
      .then((data) => {
        setNextPageToken(data.nextPageToken)
        setVideos((prevVideos) => [...prevVideos, ...data.items])
        console.log(data)
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetch data", error);
        setLoading(false);
      })
  }

  const handleLoadMore = () => {
    if (nextpageToken) {
      fetchVideos(searchId, nextpageToken);
    }
  };

  const SearchPageClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <Main
      title="애니메이션 리뷰 검색페이지"
      description="애니메이션 리뷰 유튜버 검색 페이지입니다."
    >
      <section id='searchPage'>
        <h2>✨ <em>{searchId}</em>검색 결과 페이지입니다. ✨</h2>

        <div className={`video__inner ${SearchPageClass}`}>
          <VideoSearch videos={videos} />
        </div>

        <div className="video__more">
          <button onClick={handleLoadMore}>- 더 보기 -</button>
        </div>

      </section>
    </Main>

  )
}

export default Search