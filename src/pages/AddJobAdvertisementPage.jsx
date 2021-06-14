import React from "react";




import { Form, Input, TextArea, Button, Select} from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import CityService from "../services/cityService";
import JobTitleService from "../services/jobTitleService";
import WorkHourService from "../services/WorkHourService";
import WorkTypeService from "../services/WorkTypeService";
import $ from "jquery"

import * as Yup from "yup";
import { Formik } from "formik";
import JobAdvertService from "../services/jobAdvertService"
import { useHistory } from "react-router-dom";

function AddJobAdvertisementPage() {
  const [cities, setCities] = React.useState([]);
  const [titles, setTitles] = React.useState([]);
  const [hours, setWorkHours] = React.useState([]); 
  const [types, setWorkTypes] = React.useState([]); 

  React.useEffect(() => {
    let cityService = new CityService();
    let titleService = new JobTitleService();
    let hourService = new WorkHourService();
    let typeService = new WorkTypeService();
    cityService.getCities().then((data) => {
      setCities(data.data.data);
    });
    titleService.getJobTitles().then((data) => {
      setTitles(data.data.data);
    });

    hourService.getWorkHours().then((data) => {
      setWorkHours(data.data.data);
    });

    typeService.getWorkTypes().then((data) => {
      setWorkTypes(data.data.data);
    });


  }, []);
  const history = useHistory();

  const jobAdvertService = new JobAdvertService();

  return (
    <div style={{ paddingTop: 100 }}>
      <div className="row  margintop">
        <div className="col">
          <div style={{ padding: 20 }}>
            <Formik
              initialValues={{
                appealExpirationDate: "",
                cityId: "",
                description: "",
                employerId: "",
                jobtitleId: "",
                maxSalary: "",
                minSalary: "",
                quota: "",
                workHourId: "",
                workTypeId: "",
              }}
              validationSchema={Yup.object({
                description: Yup.string().required(
                  "İş Tanıtımı Boş Bırakılamaz"
                ),
                minSalary: Yup.number()
                  .typeError("Metin Girilemez !")
                  .required("Boş Bırakılamaz"),
                maxSalary: Yup.number()
                  .typeError("Metin Girilemez !")
                  .required("Boş Bırakılamaz"),
                cityId: Yup.number().required("Doldurulması gerekiyor!"),
                jobtitleId: Yup.number().required("Doldurulması gerekiyor!"),
                workHourId: Yup.number().required("Doldurulması gerekiyor!"),
                workTypeId: Yup.number().required("Doldurulması gerekiyor!"),
                quota: Yup.number().typeError("Metin Girilemez !").min(1, "Kontenjan minimum 1 olmak zorunda").required("Doldurulması gerekiyor!"),
              })}
              onSubmit={(
                values,
                { setSubmitting, setErrors, setStatus, resetForm }
              ) => {

                //Transformed Values
                values.jobtitleId = parseInt(values.jobtitleId);
                values.workHourId = parseInt(values.workHourId);
                values.workTypeId = parseInt(values.workTypeId);
                values.cityId = parseInt(values.cityId);
                values.quota = parseInt(values.quota);
                values.minSalary = parseInt(values.minSalary);
                values.maxSalary = parseInt(values.maxSalary);
                values.employerId = 3;


                jobAdvertService.add(values).then((data) => {
                  console.log(data)
                  history.push("/is-ilanlari")
                })

              }}
            >
              {({
                values,
                touched,
                errors,
                dirty,
                isSubmitting,
                handleSubmit,
                handleReset,
                handleBlur,
                handleChange,
              }) => (
                <form onSubmit={handleSubmit}>
                  

                <p className="b"><font size="5" color="purple" face=" Comic Sans MS">İş İlanı Ekle</font></p>

                  <div >
                    <div>
                      <strong>Şehir</strong>
                      <div >

                        <select 

                          id="cityId"
                          name="cityId"
                          value={values.cityId}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="" label="Şehir Seçin" />
                          {cities.map((data, index) => (
                            <option key={index} value={data.id}>
                              {data.cityName}


                            </option>

                          ))}
                        </select>
                        <span />
                      </div>
                      {errors.cityId && touched.cityId ? (
                        <div>{errors.cityId}</div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div>
                      <strong>Pozisyon</strong>
                      <div>
                        <select
                          name="jobtitleId"
                          value={values.jobtitleId}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="" label="Pozisyon Seçin" />
                          {titles.map((data, index) => (
                            <option
                              key={index}
                              value={data.id}
                              label={data.title}
                            >
                              {data.title}
                            </option>
                          ))}
                        </select>
                        <span />
                      </div>
                      {errors.jobtitleId && touched.jobtitleId ? (
                        <div className="input-feedback">
                          {errors.jobtitleId}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>

                  <div>
                    <div>
                      <font color="black">
                        <strong>
                          Minimum Maaş
                        </strong>
                      </font>
                      <br />
                      <div class="ui input">
                        <input class="ui input"
                          type="text"
                          name="minSalary"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          values={values.minSalary}
                        />
                      </div>
                      {errors.minSalary && touched.minSalary ? (
                        <div>
                          {errors.minSalary}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div>
                      <strong>
                        Maksimum Maaş
                      </strong>
                      <br />
                      <div class="ui input">
                        <input
                          type="text"
                          name="maxSalary"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          values={values.maxSalary}
                        />
                      </div>
                      {errors.maxSalary && touched.maxSalary ? (
                        <div className="input-feedback">
                          {errors.maxSalary}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>

                  <div>
                    <div>
                      <strong>İş Türü</strong>
                      <br />
                      <div >
                        <select
                          name="workHourId"
                          value={values.workHourId}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          {hours.map((data, index) => (
                            <option
                              key={index}
                              value={data.id}
                              label={data.workHours}
                            >
                              {data.workHours}
                            </option>
                          ))}
                        </select>
                        <span />
                      </div>
                    </div>
                    <div>
                      <br />
                      <strong>
                        Çalışma Zamanı
                      </strong>
                      <div>
                        <select

                          name="workTypeId"
                          value={values.workTypeId}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <br />
                          {types.map((data, index) => (
                            <option
                              key={index}
                              value={data.id}
                              label={data.workType}
                            >
                              {data.workType}
                            </option>
                          ))}
                        </select>
                        <span />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div>
                      <strong>
                        İlan Bitiş Tarihi
                      </strong>
                      <br />
                      <div class="ui input">

                        <input
                          name="appealExpirationDate"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          values={values.appealExpirationDate}

                          type="datetime-local"
                          id="appealExpirationDate"
                        />
                      </div>
                      {errors.appealExpirationDate && touched.appealExpirationDate ? (
                        <div className="input-feedback">
                          {errors.appealExpirationDate}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>


                  <div>
                    <strong>Kontenjan</strong>
                    <br />
                    <div class="ui input">
                      <input
                        name="quota"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        values={values.quota[0] || ""}
                        type="text"
                      />
                    </div>
                    {errors.quota && touched.quota ? (
                      <div className="input-feedback">
                        {errors.quota}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <Form>
                    <div class="equal width fields">
                      <Form.Field class="ui form"
                        id='form-textarea-control-opinion'
                        control={TextArea}
                        label='İş Tanımı'
                        placeholder='İş Tanımı'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        values={values.description[0] || ""}
                        type="text"
                      />
                    </div>
                    {errors.description && touched.description ? (
                      <div className="input-feedback">
                        {errors.description}
                      </div>
                    ) : (
                      ""
                    )}
                    <div>
                    <div>



<Link to ="/">
                      <button class="ui button"
                      >
                        İptal Et
                      </button>
                      <button class="ui button"
                        type="submit"
                        disabled={!dirty || isSubmitting}
                      >
                        Oluştur
                      </button>
                      </Link>
                    </div>
                  </div>
                  </Form>





                </form>
              )}
            </Formik>






            
              







          </div>
        </div> 
      </div>
    </div>

  );

}

export default AddJobAdvertisementPage;