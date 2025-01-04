'use client';
import Breadcrumbs from '@/Components/CommonComponents/BreadCrumb';
import Testimonials from '@/Components/Themes/Cardemo-1/Testimonials';
import CompanyLogo from '@/Components/Themes/JobDemo-1/CompanyLogo';
import { RouteList } from '@/utils/RouteList';
import { Fragment } from 'react';

const TestimonialContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs title='Testimonial' subTitle='Testimonial' url={RouteList.Pages.Blog.Detail.BlogLeftClassic} mainclass='car-breadcrumbs-section' image />
      <Testimonials type='testimonial'/>
      <CompanyLogo testimonial/>       
    </Fragment>
  )
}

export default TestimonialContainer
