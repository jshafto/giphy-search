import React from 'react';

// TODO: Take in an destructure the `urls` prop

const GifsList = ({gifUrls}) => (

  // TODO: Render a `<div>` as the parent element of your `GifsList` component.
  <div>
    {gifUrls.map(gif => <img src={gif} alt="gif" key={gif}></img>)}
  </div>
  // TODO: Map over your `urls` array to render an `<img>` for each `url`.
);

export default GifsList;
// gifUrls.map(gif => <img src={gif} alt="gif"></img>)
