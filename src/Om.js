import React from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import "firebase/storage";



const Om = () => {
    return (
        <div className="app__body">
                <div className="body__left">
                  <h1>Om meg</h1>
                  <h3>
                        Hei, Jeg er Morten.<br/>
                        Jeg studerer IT og Informasjonssystemer på Universitetet i Sørøst-Norge.<br/>
                        Dette er en side hvor jeg skal laste opp ting jeg jobber/har jobba med.<br/>
                        
                        <br>
                        
                        </br>
                        For øyeblikket jobber jeg mye med React, nodeJS, Java og Firebase.
                        
                        <div>
                          <br>
                          </br>
                        </div>
                        </h3>
                        <div className="knapp">
                          <a href="https://firebasestorage.googleapis.com/v0/b/bergepro-3c486.appspot.com/o/Morten__Berge__pdf.pdf?alt=media&token=e50292e6-b272-434c-bc57-ae79fd3bb176">
                          <Button
                          variant="contained"
                          color="primary"
                          size="large"
                          startIcon={<SaveIcon />}>
                          Last ned CV
                        </Button>
                          </a>
                        
                        </div>
                        
                        
                </div>
        </div>)
           
    
    }
export default Om;