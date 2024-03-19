import React, { useEffect, useState } from "react";
import { imageUrl } from "../../constants/constants";
import axios from "axios";
import "./RowPost.css";
import YouTube from "react-youtube";
import { API_KEY } from "../../constants/constants";

function RowPost(props) {
  const [row, SetRow] = useState([]);
  const [urlId, setID] = useState('');
  
  useEffect(() => {
    axios.get(props.url).then((response) => {
      SetRow(response.data.results);
    }, []);
  });
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie=(id)=>{
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&with_genres=99`).then((response)=>{
      if(response.data.results.length!==0){
        setID(response.data.results[0])
      }

    })


  }
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {row.map((obj) => {
          return (
            <figure>
              <img onClick={()=>handleMovie(obj.id)}
                className={props.isSmall ? "samllPoster" : "poster"}
                src={`${imageUrl + obj.backdrop_path}`}
                alt="card"
              />
              <figcaption>{obj.original_title}</figcaption>
            </figure>
          );
        })}
      </div>
     { urlId && <YouTube videoId={urlId.key} opts={opts}/>}
    </div>
  );
}

export default RowPost;
