import React, { useState, useEffect } from "react";
import Cards from "../../Components/Cards/Cards";
import { useLocation } from "react-router-dom";
import axios from "../../config/axios-config";
import "./InfoPage.css";
import dots from "../../assets/3dots.gif";
import codeLoading from "../../assets/cardsLoading.gif";

export const InfoPage = (props) => {
  const location = useLocation();
  const path = location.pathname;
  const [upcoming, setUpcoming] = useState([]);
  const [live, setLive] = useState([]);
  const [loading, setLoading] = useState(true);
  const page = currentPage();
  function currentPage() {
    switch (path) {
      case "/all": {
        return "all";
      }
      case "/codechef": {
        return "code_chef";
      }
      case "/hackerearth": {
        return "hacker_earth";
      }
      case "/codeforces": {
        return "codeforces";
      }
      case "/leetcode": {
        return "leet_code";
      }
      default: {
        return "all";
      }
    }
  }
  async function getData() {
    setLive([]);
    setUpcoming([]);
    let flag = false;
    setLoading(true);
    setTimeout(() => {
      if (fetchData) {
        setLoading(false);
        flag = true;
      }
    }, 1000);
    const startTime = performance.now();
    var fetchData = await axios.get(`https://kontests.net/api/v1/${page}`);
    const endTime = performance.now();
    if (endTime - startTime > 1000) {
      setLoading(false);
      flag = true;
    }
    let interval = setInterval(() => {
      if (flag) {
        const upcomingContests = [],
          liveContests = [];
        fetchData.data.forEach((cardData) => {
          cardData.status.toLowerCase() == "before"
            ? upcomingContests.push(cardData)
            : liveContests.push(cardData);
        });
        setLive(liveContests);
        setUpcoming(upcomingContests);
        clearInterval(interval);
      }
    }, 100);
  }
  useEffect(() => {
    getData();
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
      ) : null}
      {live.length == 0 && upcoming.length == 0 ? (
        <div className="info-title-NA">NO CONTESTS AVAILABLE</div>
      ) : null}
      {live.length != 0 ? (
        <>
          <div className="info-title">LIVE CONTESTS</div>
          <div className="cardContainer">
            {live.map((data) => (
              <Cards
                codingPlatform={data.site}
                contestName={data.name}
                startTime={data.start_time}
                endTime={data.end_time}
                live={true}
              />
            ))}
          </div>
        </>
      ) : (
        // alert("no live contests")
        ""
      )}
      {upcoming.length != 0 ? (
        <>
          <div className="info-title">UPCOMING CONTESTS</div>
          <div className="cardContainer">
            {upcoming.map((data) => (
              <Cards
                codingPlatform={data.site}
                contestName={data.name}
                startTime={data.start_time}
                endTime={data.end_time}
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
