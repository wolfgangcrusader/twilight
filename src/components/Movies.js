import React, { useState } from 'react';
import "./Movies.css";

const twilightSagaMovies = [
  {
    title: 'Twilight',
    date: '2008',
    poster: 'https://i.ebayimg.com/images/g/LPoAAOSwX35jclMF/s-l1200.webp',
    description: "So, there's this girl Bella who moves to Cloud City, aka Forks, and falls for Edward, who's basically the epitome of the emo-boy dream but make it vampire. It's all moody glances and 'I'm dangerous' vibes, but let's be real, we're here for the supernatural drama and that iconic, budget-saving, sparkly skin. Imagine finding out your crush can literally read everyone's mind but yours. Convenient or suspicious? Anyway, it's a wild ride of high school romance with a side of vampire baseball. Yes, you read that right. #SparkleMotion",
    favoriteScene: 'The meadow scene!!! Hellurrrrrrrrrrr.',
    favoriteSceneImage: 'https://preview.redd.it/iigm8murrey61.jpg?auto=webp&s=e78b50779fec31e5ab5b50afcb536a38384546a6',
    favoriteSong: 'Flightless Bird, American Mouth by Iron & Wine (super massive blackhole was so close though)' ,
    favoriteSongLink: 'https://www.youtube.com/watch?v=RGVmhrfQqzg',
  },
  {
    title: 'New Moon',
    date: '2009',
    poster: 'https://nz.originalfilmart.com/cdn/shop/products/twilightnewmoon_2009_original_film_art_b4de3022-d6fa-43f4-815a-c2cc4df164f1_5000x.jpg?v=1618949594',
    description: "Just when you thought high school couldn't get more complicated, Bella gets dumped on her birthday because her BF doesn't want to 'accidentally' turn her into a vampire. Cue the emo music. But wait, there's more! Enter Jacob, the childhood friend who's suddenly hot and, surprise, a werewolf. Bella's like, 'Vampires, werewolves, why not?' and starts adrenaline-junkie hobbies to see visions of her ex. Meanwhile, Italy's vampire royalty wants a word with Edward, leading to a rescue mission in Volterra. It's a love triangle with fangs and fur, people. #TeamJacobOrEdward?",
    favoriteScene: 'Bella racing through the streets of Volterra to save Edward.',
    favoriteSceneImage: 'https://mediaim.expedia.com/localexpert/587491/c88360a2-de95-47f0-be27-657615cf4bd4.jpg?impolicy=resizecrop&rw=1005&rh=565',
    favoriteSong: 'Possibility by Lykke Li',
    favoriteSongLink: 'https://www.youtube.com/watch?v=kFwmgfINKa8',
  },
  {
    title: 'Eclipse',
    date: '2010',
    poster: 'https://m.media-amazon.com/images/M/MV5BNDMwNjAzNzYwOF5BMl5BanBnXkFtZTcwMDY5NzcyMw@@._V1_FMjpg_UX1000_.jpg',
    description: "The saga continues with Bella stuck in the ultimate supernatural love triangle. Edward's like 'marry me,' and Jacob's like 'but I'm also hot.' Meanwhile, Seattle's under attack by newborn vampires, and everyone's forced to play nice to protect Bella. The highlight? A tent scene that's basically a Gen Z meme waiting to happen, with Edward and Jacob having a heart-to-heart while Bella's freezing. Love, drama, and action cranked up to 100 with a side of moral dilemmas about immortality. Oh, and did we mention vampire-werewolf alliances? #AwkwardSleepover",
    favoriteScene: 'The tent scene muwahahahahaha',
    favoriteSceneImage: 'https://i.redd.it/a8t969vg1uv71.jpg',
    favoriteSong: 'My Love by Sia',
    favoriteSongLink: 'https://www.youtube.com/watch?v=8c81fXTZ-74',
  },
  {
    title: 'Breaking Dawn - Part 1',
    date: '2011',
    poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Breaking_Dawn_Part_1_Poster.jpg/220px-Breaking_Dawn_Part_1_Poster.jpg',
    description: "Get ready for the supernatural event of the century: Edward and Bella's wedding, which is as extra as you'd expect with a side of monster-in-law drama. The honeymoon's great until Bella's suddenly preggers with a half-vampire baby breaking her from the inside. As if high school wasn't hard enough, now she's dealing with a supernatural pregnancy. Jacob's still around, making puppy eyes while forming his own werewolf pack. It's a whole new level of family drama when you're debating names and whether your child will eat you. #BabyDrama",
    favoriteScene: 'Edward and Bella\'s wedding.',
    favoriteSceneImage: 'https://www.brides.com/thmb/ZtxpANBjel3XKt_8iP_mlCBQOt0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2021-11-15at4.01.23PM-75bc559d85eb4362941d317bb7df6a1b.jpg',
    favoriteSong: 'Turning Page by Sleeping At Last',
    favoriteSongLink: 'https://www.youtube.com/watch?v=M-AMu_iAcf8',
  },
  {
    title: 'Breaking Dawn - Part 2',
    date: '2012',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTcyMzUyMzY1OF5BMl5BanBnXkFtZTcwNDQ4ODk1OA@@._V1_.jpg',
    description: "Just when you thought it was safe to go back to Forks, Bella's a vampire, and mom to the fastest-growing child on the planet. But wait, the Volturi think Renesmee's an immortal child, which is a big no-no in the vampire world. Cue the gathering of the most eclectic group of vampires and werewolves for the supernatural showdown of the century. Spoiler: it's all a vision. Mind. Blown. Meanwhile, Bella's mastering her new powers and mom life. It's a finale filled with action, heart, and a glimpse of the Cullens' future. #EpicShowdown",
    favoriteScene: 'The final battle scene that turns out to be Alice’s vision.',
    favoriteSceneImage: 'https://img.buzzfeed.com/buzzfeed-static/static/2020-06/10/21/asset/6101b81e4aad/sub-buzz-2906-1591823457-51.png?downsize=900:*&output-format=auto&output-quality=autohttps://img.buzzfeed.com/buzzfeed-static/static/2020-06/10/21/asset/6101b81e4aad/sub-buzz-2906-1591823457-51.png?downsize=900:*&output-format=auto&output-quality=auto',
    favoriteSong: 'A Thousand Years by Christina Perri',
    favoriteSongLink: 'https://www.youtube.com/watch?v=rtOvBOTyX00',
  },
];

  

const Movies = () => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  const movie = twilightSagaMovies[currentMovieIndex];

  return (
    <>
    <div className="characters-hero">
      <h1>The Twilight Saga</h1>
    </div>
    <div className="movie-info">
  <img src={movie.poster} alt={`${movie.title} Poster`} style={{ maxWidth: '200px', borderRadius: '10px' }} />
  <div>
    <h2>{movie.title} ({movie.date})</h2>
    <p><strong>Description:</strong> {movie.description}</p>
    <p><strong>Favorite Scene:</strong> {movie.favoriteScene}</p>
    {/* Scene Image */}
    <img src={movie.favoriteSceneImage} alt={`Favorite Scene from ${movie.title}`} style={{ maxWidth: '200px', borderRadius: '10px', margin: '10px 0' }} />
    <p>
      <strong>Favorite Song:</strong> <a href={movie.favoriteSongLink} target="_blank" rel="noopener noreferrer">{movie.favoriteSong}</a>
    </p>
  </div>
</div>

<button onClick={() => setCurrentMovieIndex((prevIndex) => (prevIndex -1) % twilightSagaMovies.length)}>
    Previous Movie
  </button>
  <button onClick={() => setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % twilightSagaMovies.length)}>
    Next Movie
  </button>
  </>
  );
};

export default Movies;