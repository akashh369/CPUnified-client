import React, { useState, useEffect } from "react";
import Cards from "../../Components/Cards/Cards";
import { useLocation } from "react-router-dom";
import axios from "../../config/axios-config";
import "./InfoPage.css";
import dots from "../../assets/3dots.gif";
import codeLoading from "../../assets/cardsLoading.gif";
import { getAllContests } from "../../service/contestInfo.service";

export const InfoPage = (props) => {
  const location = useLocation();

  const path = location.pathname.slice(1);

  const [contest, setContest] = useState({
    past: [], present: [], future: []
  });
  const [upcoming, setUpcoming] = useState([]);
  const [live, setLive] = useState([]);
  const [past, setPast] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setContest({
      past: [], present: [], future: []
    })
    getAllContests(path).then(res => {
      const data = res.data;
      setContest({
        past: data.past,
        present: data.present,
        future: data.future
      });
      setLoading(false);
    });
  }, [location.pathname]);

  return (
    <div className="contestContainer">
      {loading ? (
        <div className="bufferContainer">
          <div className="loadingInText">
            <div className="textLoadingInText">FETCHING DATA</div>
            <img src={dots} />
          </div>
          <div>
            <img src={codeLoading} />
          </div>
        </div>
      )
        :
        (
          contest.past?.length + contest.present?.length + contest.future?.length == 0
            ? <div className="info-title-NA header">NO CONTESTS AVAILABLE</div>
            :
            null
        )
      }

      {contest.present.length != 0 ? (
        <>
          <div className="info-title header">LIVE CONTESTS</div>
          <div className="cardContainer">
            {
              contest.present.map((data) => (
                <Cards
                  contestTime='present'
                  codingPlatform={data.platform}
                  contestName={data.name}
                  startTime={data.start}
                  endTime={data.end}
                  url={data.url}
                  banner={data.banner}
                  live={true}
                />
              ))}
          </div>
        </>
      ) : (
        // alert("no live contests")
        ""
      )}
      {contest.future.length != 0 ? (
        <>
          <div className="info-title header">UPCOMING CONTESTS</div>
          <div className="cardContainer">
            {contest.future.map((data) => (
              <Cards
                contestTime='future'
                codingPlatform={data.platform}
                contestName={data.name}
                startTime={data.start}
                endTime={data.end}
                url={data.url}
                banner={data.banner}
                live={false}
              />
            ))}
          </div>
        </>
      ) : (
        // alert("no live contests")
        ""
      )}
      {contest.past.length != 0 ? (
        <>
          <div className="info-title header">OLD CONTESTS</div>
          <div className="cardContainer">
            {contest.past.map((data) => (
              <Cards
                contestTime='past'
                codingPlatform={data.platform}
                contestName={data.name}
                startTime={data.start}
                endTime={data.end}
                url={data.url}
                banner={data.banner}
                live={false}
              />
            ))}
          </div>
        </>
      ) : (
        // alert("no live contests")
        ""
      )}
    </div>
  );
};
