function client(endpoint, customConfig = { method: "GET" }) {
  // 🐨 create the config you'll pass to window.fetch
  //    make the method default to "GET"
  // 💰 if you're confused by this, that's fine. Scroll down to the bottom
  // and I've got some code there you can copy/paste.
  // 🐨 call window.fetch(fullURL, config) then handle the json response
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  // 💰 here's how to get the full URL: `${process.env.REACT_APP_API_URL}/${endpoint}`
    const url = `${process.env.REACT_APP_API_URL}/${endpoint}`
    return window.fetch(url, customConfig).then(async res => {
        const data = await res.json()
        if (res.ok) {
            return data
        }
        return Promise.reject(data)
    })
}

export {client}

/*






























💰 spoiler alert below...



























































const config = {
    method: 'GET',
    ...customConfig,
  }
*/
