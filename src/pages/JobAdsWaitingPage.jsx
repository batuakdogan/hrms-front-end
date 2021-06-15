import React from "react";

import ShadowBox from "../layouts/ShadowBox";

import "./Pages.css";
import CityService from "../services/cityService";
import JobTitleService from "../services/jobTitleService";
import RoundedBox from "../layouts/RoundedBox";
import JobAdvertService from '../services/jobAdvertService'

import nodata from "../assets/images/nodata.svg"

import TextTransition, { presets } from "react-text-transition";

import moment from "moment";
import 'moment/locale/tr' 
import MiniRoundedBox from "../layouts/MiniRoundedBox";

import {FaClipboardCheck, FaEye, FaTrash} from "react-icons/fa"
import { useHistory } from "react-router-dom";


function JobAdsWaitingPage() {
  

moment.locale('tr')

const TEXTS = [
  "Üzgünüz Henüz Hiç İş İlani Yayınlanmamış",
  "Üzgünüz Henüz Hiç İş İlani Yayınlanmamış ",
];

  const [jobAds, setjobAds] = React.useState([]);

  React.useEffect(() => {
    let jobAdvertService = new JobAdvertService();
   

      jobAdvertService.getWaitingJobAds().then((data) => {
        setjobAds(data.data.data);
        console.log(data.data.data)
      });
    

  },[]);

  const [indexOfTexts, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);


  const history = useHistory();
  
    
  return (
    <div style={{paddingTop:100}}>
      <div className="row  margintop ">
        <div className="col-2">
            <div>
              <ul className="customList">
                <li><span className="active"></span> Bekleyen İş İlanlari</li>
                <li><span className="unactive"></span> Geçmiş</li>
              </ul>
            </div>
        </div>
        <div>
          
          {
            jobAds.length > 0 ? (
              jobAds.map(data=>(
                <div className="zoomed d-flex" onClick={(e) => history.push("/admin/is-ilanlari/detail/"+data.id)}>
                <div className="p-10">
                <div>
                <div>
                <span >{data.employer.companyName}</span>
                <span className="yeni">Yeni</span>
                </div>
                <div className="d-flex jobads-right align-items-center">
                <span >{data.city.cityName}</span>
                </div>
                </div>
                <div className="jobads-right align-items-center">
                <span className="font-light">{data.jobtitle.title}</span>
                </div>
                <div className="jobads-right mtop-10 d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-evenly">
                <RoundedBox title={data.workHour.workHours}/>
                <RoundedBox title={data.workType.workType}/>
                </div>
                <span>{moment(data.createdDate).locale("tr").fromNow()}</span>
                </div>
    
                </div>
              <div className="d-flex flex-column" style={{marginLeft:40}}>
                <MiniRoundedBox
                className="d-flex justify-content-center align-items-center bg-color1 transformed pointer"
                width={45}
                height={45}
                >
                    <span className="icon3d">
                  </span>
                </MiniRoundedBox>
                <MiniRoundedBox
                className="d-flex justify-content-center align-items-center bg-color2 transformed2 pointer"
                width={45}
                height={45}
                margined={10}
                >
                   <span className="icon3d">
                  <FaTrash />
                  </span>
                </MiniRoundedBox>
               <div className="relative">
               <MiniRoundedBox
                className="d-flex justify-content-center align-items-center bg-color3 transformed pointer"
                width={45}
                height={45}
                >
                  <span className="icon3d">
                  </span>
                </MiniRoundedBox>
                 </div>
                </div>
              </div>
              ))
            ):(
              <div className="d-flex flex-column justify-content-center align-items-center h-100">
                <h3 className="d-flex justify-content-center align-items-center" style={{color:"var(--navlink)"}}>
                <TextTransition
        text={ TEXTS[indexOfTexts % TEXTS.length] }
        springConfig={ presets.wobbly }
      />

                </h3>
                <img src={nodata} height={250} style={{paddingTop:20}} />
                </div>
            )
          }
        
        </div>
      </div>
    </div>
  );
}

export default JobAdsWaitingPage;