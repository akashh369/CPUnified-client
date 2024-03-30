import { PATHS } from "../commonService/enum";

export const redirectIfPathInvalid = () => {
  const location = window.location.pathname;
  const completeLocation = window.location.href;
  const pathTruthy = Object.values(PATHS).find(
    (path) => path == location
  );
  if (!pathTruthy) {
    window.location.href =
      completeLocation.slice(0, completeLocation.lastIndexOf("/")) + PATHS.CODECHEF_COMPARE;
  }
};

export const clearLocalStorage = () => {
  window.localStorage.clear();
}

export const previousContests= [
  {
    "contestRating": {
      "rating": 1626,
      "change": 35
    },
    "contestName": "Starters 117 Division 3 (Rated)",
    "contestDate": {
      "$date": "2024-01-17T16:30:04.000Z"
    },
    "_id": {
      "$oid": "6607ace8080c1a5f2b9e05f0"
    }
  },
  {
    "contestRating": {
      "rating": 1591,
      "change": 7
    },
    "contestName": "Starters 116 Division 3 (Rated)",
    "contestDate": {
      "$date": "2024-01-10T16:45:04.000Z"
    },
    "_id": {
      "$oid": "6607ace8080c1a5f2b9e05f1"
    }
  },
  {
    "contestRating": {
      "rating": 1584,
      "change": -12
    },
    "contestName": "Starters 115 Division 3 (Rated)",
    "contestDate": {
      "$date": "2024-01-03T17:00:04.000Z"
    },
    "_id": {
      "$oid": "6607ace8080c1a5f2b9e05f2"
    }
  },
  {
    "contestRating": {
      "rating": 1596,
      "change": -40
    },
    "contestName": "Starters 113 Division 2 (Rated)",
    "contestDate": {
      "$date": "2023-12-20T17:00:02.000Z"
    },
    "_id": {
      "$oid": "6607ace8080c1a5f2b9e05f3"
    }
  },
  {
    "contestRating": {
      "rating": 1636,
      "change": -5
    },
    "contestName": "Starters 99 Division 2 (Rated)",
    "contestDate": {
      "$date": "2023-07-19T16:45:02.000Z"
    },
    "_id": {
      "$oid": "6607ace8080c1a5f2b9e05f4"
    }
  },
  {
    "contestRating": {
      "rating": 1641,
      "change": 51
    },
    "contestName": "Starters 96 Division 3 (Rated)",
    "contestDate": {
      "$date": "2023-06-28T16:30:04.000Z"
    },
    "_id": {
      "$oid": "6607ace8080c1a5f2b9e05f5"
    }
  },
  {
    "contestRating": {
      "rating": 1590,
      "change": -15
    },
    "contestName": "Starters 95 Division 2 (Rated)",
    "contestDate": {
      "$date": "2023-06-21T16:30:02.000Z"
    },
    "_id": {
      "$oid": "6607ace8080c1a5f2b9e05f6"
    }
  },
  {
    "contestRating": {
      "rating": 1605,
      "change": -44
    },
    "contestName": "Starters 94 Division 2 (Rated)",
    "contestDate": {
      "$date": "2023-06-14T16:30:02.000Z"
    },
    "_id": {
      "$oid": "6607ace8080c1a5f2b9e05f7"
    }
  },
  {
    "contestRating": {
      "rating": 1649,
      "change": 50
    },
    "contestName": "Starters 88 Division 3 (Rated)",
    "contestDate": {
      "$date": "2023-05-03T16:30:04.000Z"
    },
    "_id": {
      "$oid": "6607ace8080c1a5f2b9e05f8"
    }
  },
  {
    "contestRating": {
      "rating": 1599,
      "change": -30
    },
    "contestName": "Starters 70 Division 2 (Rated)",
    "contestDate": {
      "$date": "2022-12-21T17:30:02.000Z"
    },
    "_id": {
      "$oid": "6607ace8080c1a5f2b9e05f9"
    }
  }
]