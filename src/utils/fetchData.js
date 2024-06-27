export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': "97cff61e30msh7dc39aa7dac03e1p15445ajsnf2b94494af69",
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const videoOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': "97cff61e30msh7dc39aa7dac03e1p15445ajsnf2b94494af69",
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
}
};
export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
}



// KJwZZIJSFimshuivMSVGaiYzKRomp15f2vkjsnk4bkzuUzVLzA