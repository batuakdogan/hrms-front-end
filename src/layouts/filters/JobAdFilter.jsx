import React, { useEffect, useState } from 'react'
import CityService from '../../services/cityService' 
import JobTitleService from '../../services/jobTitleService';
import WorkTypeService from '../../services/workTypeService.jsx';
import WorkHourService from '../../services/workHourService.jsx';
import { Label, Dropdown, Segment, Checkbox, Button } from 'semantic-ui-react'

export default function JobAdFilter({ clickEvent}) {

    const [cities, setCities] = useState([]);
    const [jobTitles, setJobTitles] = useState([]);
    const [workTypes, setWorkTypes] = useState([]);
    const [workHours, setWorkHours] = useState([]);

    useEffect(() => {
        let cityService = new CityService()
        cityService.getCities().then(result => setCities(result.data.data)) 

        let jobTitleService = new JobTitleService()
        jobTitleService.getJobTitles().then(result => setJobTitles(result.data.data))
 
        let workTypeService = new WorkTypeService()
        workTypeService.getWorkTypes().then(result => setWorkTypes(result.data.data))

        let workHourService = new WorkHourService();
        workHourService.getWorkHours().then(result => setWorkHours(result.data.data))
    },[])

    const [cityIndex, setCityIndex] = useState([])
    const handleChangeCity = (e, { value }) => {
        setCityIndex(value)
    }

    const [jobTitleIndex] = useState([])
    const handleChangeJobTitle = (e, { value, checked}) => {
        if(checked){
            jobTitleIndex.push(value)
        }else {
            let index = jobTitleIndex.indexOf(value)
            if(index > -1) {
                jobTitleIndex.splice(index, 1)
            }
        }
    }

    const [workTypeIndex] = useState([])
    const handleChangeWorkType = (e, { value, checked}) => {
        if(checked){
            workTypeIndex.push(value)
        }else {
            let index = workTypeIndex.indexOf(value)
            if(index > -1) {
                workTypeIndex.splice(index, 1)
            }
        }
    }

    const [workHourIndex] = useState([])
    const handleChangeWorkHour = (e, { value, checked}) => {
        if(checked){
            workHourIndex.push(value)
        }else {
            let index = workHourIndex.indexOf(value)
            if(index > -1) {
                workHourIndex.splice(index, 1)
            }
        }
    }

    return (
        <div>
            <Segment color="black" raised>
                <Label size="large">Şehir</Label>
                <Dropdown
                    placeholder="Şehir seçiniz"
                    selection
                    search
                    multiple
                    clearable
                    options={cities.map((city, index) => {
                        return { text: city.cityName, key: city.index, value: city.id }
                    })}
                    onChange={handleChangeCity}
                    value={cityIndex}
                />
            </Segment>
            <Segment color="black" raised>
                <Label attached="top" size="large">İş Pozisyonu</Label>
                {
                    jobTitles.map(jobTitle => (
                        <Checkbox
                            key={jobTitle.id}
                            label={jobTitle.title}
                            onChange={handleChangeJobTitle}
                            value={jobTitle.id}
                        />
                    ))
                }
            </Segment>
            <Segment color="black" raised>
                <Label attached="top" size="large">Çalışma Yeri</Label>
                {
                    workTypes.map(workType => (
                        <Checkbox
                            key={workType.id}
                            label={workType.workType}
                            onChange={handleChangeWorkType}
                            value={workType.id}
                        />
                    ))
                }
            </Segment>
            <Segment color="black" raised>
                <Label attached="top" size="large">Çalışma Süresi</Label>
                {
                    workHours.map(workHour => (
                        <Checkbox
                            key={workHour.id}
                            label={workHour.workHours}
                            onChange={handleChangeWorkHour}
                            value={workHour.id}
                        />
                    ))
                }
            </Segment>
            <Button
                type="button"
                fluid
                color="green"
                onClick={() => clickEvent({ cityId: cityIndex, jobTitleId: jobTitleIndex, workTypeId: workTypeIndex, workHourId: workHourIndex})}
            >
                Filtrele
            </Button>
        </div>
    )
}




// import axios from "axios";

// export default class WorkHourService{
//     getWorkHours(){
//         return axios.get("http://localhost:8080/api/workhour/getall")
//     }
// } 

// import axios from "axios";

// export default class WorkTypeService{
//     getWorkTypes(){
//         return axios.get("http://localhost:8080/api/worktype/getall")
//     }
// }

