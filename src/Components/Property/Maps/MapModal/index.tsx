"use client";
import { Fragment } from "react";
import GridView from "../../Common/GridView";
import MapModal from "../../Common/GridView/Filter/MapModal";
import PropertyBreadCrumb from "../../Common/PropertyBreadCrumb";
import TopFilter from "../../Common/TopFilter";
const MapModalContainer = () => {
   
  return (
    <Fragment>
      <TopFilter />
      <PropertyBreadCrumb />
      <GridView type={"property"} gridSize={3} modalType="modal" cardShow={9}/>
      <MapModal type="property"/>
    </Fragment>
  )
}

export default MapModalContainer