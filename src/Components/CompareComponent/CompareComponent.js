import React, { useState, useEffect } from "react";
import "./CompareComponent.css";
import Profile from "../Profile/Profile";
import ContestInfo from "../ContestInfo/ContestInfo";
import ProblemsSolved from "../ProblemsSolved/ProblemsSolved";
import {
  getUserData,
  refreshUserData,
  getFacts,
} from "../../service/codechef.service";
import codeLoading from "../../assets/contentLoading.gif";
import scrapping from "../../assets/mining.gif";
import { STORAGE_KEYS } from "../../commonService/enum";
function CompareComponent(props) {
  const ccUserRefNumber = props.ccUserRefNumber;
  const [userData, setUserData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [currentFact, setCurrentFact] = useState();
  const [showFactInfo, setShowFactInfo] = useState(false);
  useEffect(() => {
    let currentCompareUser;
    switch (ccUserRefNumber) {
      case 1:
        currentCompareUser = localStorage.getItem(STORAGE_KEYS.CC_USER1);
        break;
      case 2:
        currentCompareUser = localStorage.getItem(STORAGE_KEYS.CC_USER2);
        break;
    }
    setLoading(true);
    getUserData(currentCompareUser)
      .then((res) => {
        let response = res.data;
        response.previousContests = response.previousContests.reverse();
        setUserData(response);
      })
      .catch((err) => {
        // alert(err)
      });
  }, []);

  useEffect(() => {
    if (userData != undefined) setLoading(false);
  }, [userData]);

  function updateCCUserInLocalStorage(username) {
    switch (ccUserRefNumber) {
      case 1:
        window.localStorage.setItem(STORAGE_KEYS.CC_USER1, username);
        break;
      case 2:
        window.localStorage.setItem(STORAGE_KEYS.CC_USER2, username);
        break;
    }
  }

  const updateUserData = async function (username) {
    await getFactsFromService();
    setLoading(true);
    const data = await refreshUserData(username);
    const response = data.data;
    response.previousContests = response.previousContests.reverse();
    setUserData(response);
    setLoading(false);
    // response.previousContests = response.previousContests.reverse()
    // setUserData(response)
  };

  const getUserDataFromService = async function (username) {
    await getFactsFromService();
    setLoading(true);
    const data = await getUserData(username, ccUserRefNumber);
    const response = data.data;
    if (response?.success == false) {
      // alert(response.error)
    } else {
      response.previousContests = response.previousContests.reverse();
      setUserData(response);
      updateCCUserInLocalStorage(username);
    }
    setLoading(false);

    // response.previousContests = response.previousContests.reverse()
    // setUserData(response)
  };

  function getFactsFromService() {
    getFacts().then((facts) => {
      let i = 0;
      facts.forEach((fact, index) => {
        setTimeout(() => {
          setCurrentFact(fact.fact);
          if (index + 1 == facts.length && loading == true) {
            getFactsFromService();
          }
          // setCurrentFact(fact)
        }, 8000 * index);
      });
    });
  }

  return (
    <>
      {!loading ? (
        <div className="compare-container">
          <Profile
            username={userData.username}
            userinfo={userData.userInfo}
            updateUserData={updateUserData}
            getUserData={getUserDataFromService}
          />
          <ContestInfo contestData={userData} />
          <ProblemsSolved heatArray={userData.heatMap} />
        </div>
      ) : (
        <div className="data-loading common-container">
          <div className="allignement">
            <div className="gif-text">
              <h2>Scrapping your data from The Web</h2>
              {/* <img src={scrapping} /> */}
            </div>
            <div>
              <img src={codeLoading} height={"3px"} />
            </div>
            <h1>Did You Know</h1>
            <h3
              onClick={() => {
                setShowFactInfo(!showFactInfo);
              }}
            >
              {currentFact?.fact}
            </h3>
            {showFactInfo ? <h4>{currentFact?.info}</h4> : null}
          </div>
        </div>
      )}
    </>
  );
}

export default CompareComponent;
