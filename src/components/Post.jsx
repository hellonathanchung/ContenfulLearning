import React from "react";

const Post = ({ article }) => {
  const { name, featuredImage, description } = article.fields;

  return (
    <div className="post">
      <h2 className="title">{name}</h2>
      <img className="featuredImage" src={featuredImage.fields.file.url} />
      <section className=""> {description}</section>
    </div>
  );
};

export default Post;
