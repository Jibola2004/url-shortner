import { useState } from "react";

const TinyURLShortener = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied,setCopied]=useState(false);

  const shortenUrl = async () => {
    const API_KEY = import.meta.env.VITE_TINYURL_API_KEY ||"9NcI5dUL8bnhDlBEXp0PsdIYx0JV7ZlfTqj1NwJAt0dbe0W99vis9UGNsoql"; 
    // Replace with your actual TinyURL API key
    const API_URL = import.meta.env.VITE_TINYURL_API_URL||"https://api.tinyurl.com/create";

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ url: longUrl, domain: "tinyurl.com" })
      });

      const data = await response.json();
      if (data.data && data.data.tiny_url) {
        setShortUrl(data.data.tiny_url);
      } else {
        alert("Error: " + JSON.stringify(data.errors));
      }
    } catch (error) {
      console.error("Error shortening URL:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center rounded-lg
     bg-neutral-400 gap-4 p-10 sm:w-full max-w-[600px] w-full">
      <h2 className="text-3xl mt-2 text-white">URL Shortener</h2>
      <p className="text-black text-2xl capitalize font-bold">
        paste the URL to be shortened</p>
      <div className="w-full space-x-4 flex justify-center">
       
      <input
        type="text"
        placeholder="Enter long URL"
        className="text-black w-1/2 h-10.5 bg-white p-2"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
      />
      <button onClick={shortenUrl} className="p-2 bg-green-500 hover:bg-green-600
       rounded-md shadow-2xl border-2
       border-green-600 text-white font-bold">Shorten</button>
      </div>
      {shortUrl && (<div className="flex gap-2 items-center 
      flex-col text-center font-semibold"><p>Shortened URL: </p>
                      <p className="bg-white p-4">{shortUrl}</p>
                      <button
                       className="p-1 w-16 bg-blue-500 hover:bg-blue-600 rounded-md
                        shadow-2xl
                        border-2 border-blue-600 text-white font-bold"
                        onClick={()=>{navigator.clipboard.writeText(shortUrl) 
                        setCopied(true)}}>
                        Copy
                    </button>
                      {copied && <small>shortened link copied successfully</small>}
                    </div>
                )}
    </div>
  );
};

export default TinyURLShortener;
