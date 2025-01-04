import { ImagePath, MyPropertyTitle } from "@/Constants/Constants";
import { Myproperties, MypropertiesHead } from "@/Data/Pages/Others";
import RatioImage from "@/utils/RatioImage";
import { Edit2, Trash } from "iconsax-react";
import { Button, Table } from "reactstrap";

const MyProperty = () => {
  return (
    <div className='common-card'>
      <h4 className='dashboard-title'>{MyPropertyTitle}</h4>
      <div className='table-responsive property-table'>
        <Table>
          <thead className='table-white'>
            <tr>
              {MypropertiesHead.map((item, i) => {
                return <th key={i}>{item}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {Myproperties.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.id}</td>
                  <td>
                    <div className='table-box'>
                      <RatioImage src={`${ImagePath}/${item.image}`} alt='p-1' className='img-fluid' />
                      <h6>{item.title}</h6>
                    </div>
                  </td>
                  <td>
                    <span>{item.availableUnits}</span>
                  </td>
                  <td>
                    <h6>{item.soldUnits}</h6>
                  </td>
                  <td>
                    <div className='d-flex align-items-center gap-3 justify-content-center'>
                      <Button color='transparant' className='edit-btn'>
                        <Edit2 color='#188aec' size={20} />
                      </Button>
                      <Button color='transparant' className='delete-btn'>
                        <Trash color='#dc3545' size={20} />
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default MyProperty;
