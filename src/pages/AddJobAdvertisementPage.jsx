import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Dropdown, Input, TextArea, Card, Form, Grid } from "semantic-ui-react";
import CityService from "../services/cityService";
import JobTitleService from "../services/jobTitleService";
import WorkHourService from "../services/WorkHourService";
import WorkTypeService from "../services/WorkTypeService";
import JobAdvertService from "../services/jobAdvertService";
import { Link, useHistory } from "react-router-dom";
import EmployerService from "../services/employerService";

export default function AddJobAdvertisementPage() {  //AddJobAdvertisementPage
  let jobAdvertService = new JobAdvertService();
  const JobAdvertAddSchema = Yup.object().shape({
    appealExpirationDate: Yup.date().nullable().required("Bu alanın doldurulması zorunludur"),
    createdDate: Yup.date().nullable().required("Bu alanın doldurulması zorunludur"),
    description: Yup.string().required("Bu alanın doldurulması zorunludur"),
    jobTitleId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    workHourId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    workTypeId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    cityId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    minSalary: Yup.number().min(0,"0 Dan az olamaz").required("Bu alan zorunludur"),
    maxSalary: Yup.number().min(0,"0 Dan az olamaz").required("Bu alan zorunludur"),
  });


  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      description: "",
      jobTitleId: "",
      workHourId: "",
      workTypeId: "",
      cityId: "",
      minSalary: "",
      maxSalary: "",
      quota:"",
      appealExpirationDate:"",
      
      employerId: ""
      
    },




    
    validationSchema: JobAdvertAddSchema,    
    onSubmit:
    (values) => {
      values.employerId = 10;
      jobAdvertService.add(values).then((data) => console.log(data.data.data));
      alert("İş ilanı eklendi personelin onayı ardından listelenecektir");
      history.push("/jobads");
          console.log(values)
      
    },
  });

  const [workHours, setWorkHours] = useState([]);
  const [workType, setWorkType] = useState([]); 
  const [cities, setCities] = useState([]);
  const [jobTitles, setJobTitles] = useState([]);

  useEffect(() => {
    let workHourService = new WorkHourService();
    let workTypeService = new WorkTypeService();
    let cityService = new CityService();
    let jobTiteService = new JobTitleService();

    workHourService.getWorkHours().then((data) => setWorkHours(data.data.data));
    workTypeService.getWorkTypes().then((data) => setWorkType(data.data.data));
    cityService.getCities().then((data) => setCities(data.data.data));
    jobTiteService.getJobTitles().then((data) => setJobTitles(data.data.data));
  }, []);

  const workHourOption = workHours.map((workHour, index) => ({
    key: index,
    text: workHour.workHours,
    value: workHour.id,
  }));
  const workTypeOption = workType.map((workType, index) => ({
    key: index,
    text: workType.workType,
    value: workType.id,
  }));
  const cityOption = cities.map((city, index) => ({
    key: index,
    text: city.cityName,
    value: city.id,
  }));
  const jobTitleOption = jobTitles.map((jobTitle, index) => ({
    key: index,
    text: jobTitle.title,
    value: jobTitle.id,
  }));
  

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  }

  return (
    <div>
      <Card fluid>
      <Card.Content header='İş ilanı Ekle' />
      <Card.Content>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Field style={{marginBottom: "1rem"}}>
          <label>İş Pozisyonu</label>
        <Dropdown
          clearable
          item
          placeholder="İş pozisyonu"
          search
          selection
          onChange={(event, data) =>
            handleChangeSemantic(data.value, "jobTitleId")
          }
          onBlur={formik.onBlur}
          id="jobTitleId"
          value={formik.values.jobTitleId}
          options={jobTitleOption}
          />
          {formik.errors.jobTitleId && formik.touched.jobTitleId &&(
            <div className={"ui pointing red basic label"}>
              {formik.errors.jobTitleId}
            </div>
          )}
          </Form.Field>
          <Form.Field>
          <label>Şehir</label>
            <Dropdown
              clearable
              item
              placeholder="Şehir"
              search
              selection
              onChange={(event, data) =>
                handleChangeSemantic(data.value, "cityId")
              }
              onBlur={formik.onBlur}
              id="cityId"
              value={formik.values.cityId}
              options={cityOption}
              />
              {formik.errors.cityId && formik.touched.cityId && (
                <div className={"ui pointing red basic label"}>
                {formik.errors.cityId}
              </div>
              )}
          </Form.Field>
          <Form.Field>
          <label>Çalışma yeri</label>
          <Dropdown
                  clearable
                  item
                  placeholder="Çalışma yeri"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "workTypeId")
                  }
                  onBlur={formik.onBlur}
                  id="workTypeId"
                  value={formik.values.workTypeId}
                  options={workTypeOption}
                />
                {formik.errors.workTypeId && formik.touched.workTypeId && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.workTypeId}
                  </div>
                )}
          </Form.Field>
          <Form.Field>
          <label>Çalışma Süresi</label>
                <Dropdown
                  clearable
                  item
                  placeholder="Çalışma Süresi"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "workHourId")
                  }
                  onBlur={formik.onBlur}
                  id="workHourId"
                  value={formik.values.workHourId}
                  options={workHourOption}
                />
                {formik.errors.workHourId && formik.touched.workHourId && (
                  <div className={"ui pointing red basic label"}>{formik.errors.workHourId}</div>
                )}
              </Form.Field>
              <Form.Field>
              <Grid stackable>
              <Grid.Column width={5}>
              <label style={{fontWeight: "bold"}}>Maaş aralığı MİNİMUM</label>
                <Input
                  style={{ width: "100%" }}
                  type="number"
                  placeholder="Maaş aralığı MİNİMUM"
                  value={formik.values.minSalary}
                  name="minSalary"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                </Input>
                {formik.errors.minSalary && formik.touched.minSalary && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.minSalary}
                  </div>
                )}
                </Grid.Column>
                <Grid.Column width={6}>
                <label style={{fontWeight: "bold"}}>Maaş aralığı MAKSİMUM</label>
                <Input
                  style={{ width: "100%" }}
                  type="number"
                  placeholder="Maaş aralığı MAKSİMUM"
                  value={formik.values.maxSalary}
                  name="maxSalary"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                </Input>
                {formik.errors.maxSalary && formik.touched.maxSalary && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.maxSalary}
                  </div>
                )}
                </Grid.Column>
                <Grid.Column width={5}>
                <label style={{fontWeight: "bold"}}>Açık Pozisyon Sayısı</label>
                <Input
                  style={{ width: "100%" }}
                  type="number"
                  placeholder="Açık Pozisyon Sayısı"
                  value={formik.values.quota}
                  name="quota"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                </Input>
                {formik.errors.quota && formik.touched.quota && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.quota}
                  </div>
                )}
                </Grid.Column> 
                </Grid>
          
              </Form.Field>


              

              
              
                
              <Form.Field>
                <Grid.Column width={8}>
                <label style={{fontWeight: "bold"}}>Son başvuru tarihi</label>
                <Input
                  style={{ width: "100%" }}
                  type="date"
                  error={Boolean(formik.errors.appealExpirationDate)}
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "appealExpirationDate")
                  }
                  value={formik.values.appealExpirationDate}
                  onBlur={formik.handleBlur}
                  name="appealExpirationDate"
                  placeholder="Son başvuru tarihi"
                />
                {formik.errors.appealExpirationDate && formik.touched.appealExpirationDate && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.appealExpirationDate}
                  </div>
                )}
                </Grid.Column>
              </Form.Field>


              <Form.Field>
                <Grid.Column width={8}>
                <label style={{fontWeight: "bold"}}>Oluşturma Tarihi</label>
                <Input
                  style={{ width: "100%" }}
                  type="date"
                  error={Boolean(formik.errors.createdDate)}
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "createdDate")
                  }
                  value={formik.values.createdDate}
                  onBlur={formik.handleBlur}
                  name="createdDate"
                  placeholder="Oluşturulma Tarihi"
                />
                {formik.errors.createdDate && formik.touched.createdDate && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.createdDate}
                  </div>
                )}
                </Grid.Column>
              </Form.Field>

             
              

              <Form.Field>
              <label>Açıklama</label>
                <TextArea
                  placeholder="Açıklama"
                  style={{ minHeight: 100 }}
                  error={Boolean(formik.errors.description).toString()}
                  value={formik.values.description}
                  name="description"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.description && formik.touched.description && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.description}
                  </div>
                )}
              </Form.Field>
              <Button
                content="Ekle"
                labelPosition="right"
                icon="add"
                positive
                type="submit"
                style={{ marginLeft: "20px" }}
              />
      </Form>
      </Card.Content>
      </Card>
     <Link to="/">
     <Button className="ui button">
              İptal
     </Button>
     </Link>
    </div>
  );
}