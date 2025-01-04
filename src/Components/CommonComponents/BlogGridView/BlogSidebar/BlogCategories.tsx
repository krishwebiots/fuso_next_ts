import { CategoriesTitle } from "@/Constants/Constants";
import { SideBarCategories } from "@/Data/Pages";
import Link from "next/link";
import React from "react";

const BlogCategories = () => {
  return (
    <div className='blog-sidebar-box'>
      <div className='sidebar-title'>
        <h4>{CategoriesTitle}</h4>
      </div>
      <ul className='category-list'>
        {SideBarCategories.map((item, i) => {
          return (
            <li key={i}>
              <Link href={item.link}>
                <i className={item.icon} />
                {item.category}
                <span>({item.count})</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BlogCategories;
