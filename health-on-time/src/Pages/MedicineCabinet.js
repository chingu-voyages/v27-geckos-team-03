import React, { useState, useEffect } from "react";
import SearchMedication from "../Components/SearchMedication";

const MedicineCabinet = (props) => {

  const initialMeidcationState = {
    id: null,
    title: "",
    description: "",
    published: false
  };

  const [currentMedication, setCurrentMedication] = useState(initialMeidcationState);



  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentMedication({ ...currentMedication, [name]: value });
  };

  const updatePublished = status => {
    var data = {
      id: currentMedication.id,
      title: currentMedication.title,
      description: currentMedication.description,
      published: status
    };

    /* MedicationDataService.update(currentMedication.id, data) */
    fetch(`${props.BASE_URL}medicineCabinet`).update(currentMedication.id, data)
      .then(response => {
        setCurrentMedication({ ...currentMedication, published: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

const deleteMedication = () => {
   /* DataService.remove(currentMedication.id) */
   fetch(`${props.BASE_URL}medicineCabinet`).remove(currentMedication.id)
      .then(response => {
        console.log(response.data);
        props.history.push("/medications");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
      <div>
    <div>
      <h1>MedicineCabinet</h1>
      <SearchMedication />
    </div> 
    <div>
      {currentMedication ? (
        <div className="edit-form">
          <h4>Medication</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentMedication.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Medication</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentMedication.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentMedication.published ? "Published" : "Pending"}
            </div>
          </form>

          {currentMedication.published ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )}

          <button className="badge badge-danger mr-2" onClick={deleteMedication}>
            Delete
          </button>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Medication...</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default MedicineCabinet;
