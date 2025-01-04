import { ImagePath, LatestArticleTitle } from "@/Constants/Constants";
import { BlogArticledata } from "@/Data/Pages";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const Article = () => {
  return (
    <div className='blog-sidebar-box'>
      <div className='sidebar-title'>
        <h4>{LatestArticleTitle}</h4>
      </div>
      <ul className='article-list'>
        {BlogArticledata.map((item, i) => {
          return (
            <li key={i}>
              <Link href={item.link} className='article-list-img'>
                <Image width={108} height={70} src={`${ImagePath}${item.image}`} alt={item.altText} className='img-fluid' />
              </Link>
              <div className='article-list-content'>
                <div className='post-flex'>
                  <label>{item.category}</label>
                  <span>{item.date}</span>
                </div>
                <Link href={item.link}>{item.title}</Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Article;
