import Banner from '@/components/Banner';
import React from 'react'

export default function article({article}) {
    // console.log(props);
  return (
    <Banner image="post/1.jpg" data={article}/>
  )
}

export async function getStaticProps(context) {
    const id = context.params.article;

    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const article = await data.json();

    return {
      props: {
        article,
      },
    };
  }
  

export async function getStaticPaths() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const articles = await data.json();

    const paths = articles.map(item => ({
        params:{article: item.id.toString()}
    }))

    return {
      paths,
      fallback: false, // can also be true or 'blocking'
    }
  }