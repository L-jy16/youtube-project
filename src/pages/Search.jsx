import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import VideoSearch from '../components/video/VideoSearch';
import { fetchFromAPI } from '../utils/api';

const Search = () => {
  const { searchId } = useParams();
  const [videos, setVideos] = useState([]);
  const [nextpageToken, setNextPageToken] = useState(null);

  useEffect(() => {
    setVideos([]);
    fetchVideos(searchId);
  }, [searchId]);

  const fetchVideos = (query, pageToken = '') => {
    fetchFromAPI(`search?type=video&part=snippet&q=${query}&pageToken=${pageToken}`)
      .then((data) => {
        setNextPageToken(data.nextPageToken)
        setVideos((prevVideos) => [...prevVideos, ...data.items])
        console.log(data)
      })
      .catch((error) => {
        console.log("Error fetch data", error)
      });
  }

  const handleLoadMore = () => {
    if (nextpageToken) {
      fetchVideos(searchId, nextpageToken);
    }
  };

  return (
    <section id='searchPage'>
      <h2>✨ <em>{searchId}</em>검색 결과 페이지입니다. ✨</h2>

      <div className='video__inner'>
        <VideoSearch videos={videos} />
      </div>

      <div className="video__more">
        <button onClick={handleLoadMore}>- 더 보기 -</button>
      </div>

    </section>
  )
}

export default Search