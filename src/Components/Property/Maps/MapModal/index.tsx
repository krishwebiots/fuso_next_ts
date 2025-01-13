"use client";
import { Fragment } from "react";
import GridView from "@/Components/CommonComponents/GridView";
import PropertyBreadCrumb from "../../../CommonComponents/PropertyBreadCrumb";
import TopFilter from "../../../CommonComponents/TopFilter";
import MapModal from "@/Components/CommonComponents/GridView/Filter/MapModal";
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