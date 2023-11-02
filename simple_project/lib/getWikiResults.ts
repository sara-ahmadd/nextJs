const url = "https://en.wikipedia.org/w/api.php";
export const getWikiResults = async (searchTerm: string) => {
  const searchParams = new URLSearchParams({
    action: "query",
    list: "search",
    generator: "search",
    format: "json",
    origin: "*",
    gsrsearch: searchTerm,
    srsearch: searchTerm,
    gsrnamespace: "0",
    gsrlimit: "20",
    prop: "pageimages|pageterms|extracts",
    exchars: "200",
    exlimit: "max",
    explaintext: "1",
    exintro: "1",
  });
  // gsrsearch parameter is the search term for the Wikipedia API
  // gsrnamespace parameter is set to 0 to only search the main namespace
  // gsrlimit parameter is set to 20 to limit the number of results to 20
  // props parameter is set to pageimages|pageterms|extracts to get the page thumbnail, description, and extract
  // exchars parameter is set to 200 to limit the number of characters in the extract to 200
  // exlimit parameter is set to max to get all the extracts
  // explaintext parameter is set to 1 to remove any HTML tags from the extract
  // exintro parameter is set to 1 to only get the intro section of the extract
  // generator parameter is set to search to use the search results as the pages to get data for
  // format parameter is set to json to get the data in JSON format
  // origin parameter is set to * to allow cross-origin requests
  const res = await fetch(`${url}?${searchParams.toString()}`);
  const data = res.json();
  console.log(data);
  return data;
};
