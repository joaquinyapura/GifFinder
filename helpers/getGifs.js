export const getGifs = async (categoria) => {
  
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=bPACOeRgyd0JJf3v9fP2g4QHGfPo3ifR&limit=6&q=${categoria}`;
    const resp = await fetch(URL);
    const { data } = await resp.json();
  
    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }))

    return gifs
  };
  