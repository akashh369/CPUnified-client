import axios from "axios"


const url = 'http://localhost:4999/' + 'codechef'

export const getUserData = async (username = "akashh_bhandar") => {
  try {
    const res = await axios.get(url + `/user/?username=${username}`)
    return res.data
  }
  catch (err) {
    console.log("err=", err)
  }
}

export const refreshUserData = async (username = "akashh_bhandar") => {
  try {
    const res = await axios.post(url + '/refresh-data', { username: username })
    return res.data
  }
  catch (err) {
    console.log("err=", err)
  }
}
