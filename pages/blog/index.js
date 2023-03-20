import Link from "next/link";
import React from "react";

export default function index(props) {
  console.log(props);

  const displaydata = props.articles.map((item) => {
    return (
      <div className="col-lg-3 col-sm-6" key={item.id}>
        <div className="single-post-wrap style-white">
          <div className="thumb">
            <img src="assets/img/post/1.jpg" alt="img" />
            <a className="tag-base tag-blue" href="#">
              BLOG
            </a>
          </div>
          <div className="details">
            <h6 className="title">
              <Link href={`/blog/${item.id.toString()}`}>
                {item.title}
              </Link>
            </h6>
            <div className="post-meta-single mt-3">
              <ul>
                <li>
                  <i className="fa fa-clock-o"></i>20.03.2023
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="pd-top-80 pd-bottom-50" id="grid">
        <div className="container">
          <div className="section-title">
            <h6 className="title">Blog</h6>
          </div>
          <div className="row">
            {displaydata}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const articles = await data.json();
  return {
    props: {
      articles,
    },
  };
}
