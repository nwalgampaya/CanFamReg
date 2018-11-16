import React from "react";
import ReactDOM from "react-dom";
// import { Field } from 'react-final-form'
import '../App.css';
import '../index.css';
import "../styles/styles.scss";
import Wizard from '../Wizard.js'
import Welcome from './steps/Welcome.js'
import DatePicker from 'react-date-picker';
// import DropdownMenu, { DropdownItemGroup, DropdownItem } from '@atlaskit/dropdown-menu';
import { withFormik, Form, Field } from 'formik'
import Yup from 'yup'

// import ComboDatePicker from '../reactComboDatePicker.js'


class CancerFamilyReg extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
// Values form Db
            gender: 'Male',
            dateOFDOB: 'mm/dd/yyyy',
            status:'zzz',
            dateOfDeath:'1/1/1',
            //todu
            aodeath:'',
            sourceOFDeath:'',
            courseOFDeath:'',
            dateOfLKDA:'',
            sourceOfLiveDate:'',
            fPI1Status:'',
            fPI2Status:'',
            fPI3Status:'',
            fPI4Status:'',
            relationshipCode:'',

// current values
            currentGender:'',
            currentDOB: '',
            currentStatus:'',
            currentDeath:'',
            //todu
            currentaodeath:'',
            currentSourceOFDeath:'',
            currentCourseOFDeath:'',
            currentLKDA:'',
            // currentsourceOfLiveDate:'',
            currentCourseOfLiveDate:'',
            currentfPI1Status:'',
            currentfPI2Status:'',
            currentfPI3Status:'',
            currentfPI4Status:'',
            currentRelationshipCode:'',

        };
        this.oncurrentDOBChange = this.oncurrentDOBChange.bind(this);
        this.setCurrentLKDA = this.setCurrentLKDA.bind(this);
        this.setCurrentDeath = this.setCurrentDeath.bind(this);
        this.setcurrentRelationshipCode = this.setcurrentRelationshipCode.bind(this);
    }

    setSex(event) {
        console.log("Sex :" + event.target.value);
        this.setState({
            currentGender: event.target.value,
        });
    }
    oncurrentDOBChange(currentDOB) {
            console.log("Sex :" + currentDOB);
    this.setState ({
            currentDOB: currentDOB
        });
    }
    // onnewdobChange = newdob => this.setState({ newdob })

    setCurrentStatus(event){
        this.setState({
            currentStatus: event.target.value,
          });
    }

    setCurrentDeath(currentDeath){
        this.setState({
            currentDeath: currentDeath,
          });
    }

    setCurrentSource(event){
        this.setState({
            currentSourceOFDeath: event.target.value,
          });
    }
    
    setCurrentLKDA(currentLKDA) {
        console.log("setCurrentLKDA :" + currentLKDA);
        this.setState ({
            currentLKDA: currentLKDA
        });
    }

    setSourceLKD(event){
        console.log("setSourceLKD :" + event.target.value); 
        this.setState({
            currentCourseOfLiveDate: event.target.value,
          });
    }

    setcurrentfPI1Status(event){
        console.log("setcurrentfPI1Status :" + event.target.value); 
        this.setState({
            currentfPI1Status: event.target.value,
          });
    }
    setcurrentfPI2Status(event){
        console.log("setcurrentfPI2Status :" + event.target.value); 
        this.setState({
            currentfPI2Status: event.target.value,
          });
    }
    setcurrentfPI3Status(event){
        console.log("setcurrentfPI3Status :" + event.target.value); 
        this.setState({
            currentfPI3Status: event.target.value,
          });
    }
    setcurrentfPI4Status(event){
        console.log("setcurrentfPI4Status :" + event.target.value); 
        this.setState({
            currentfPI4Status: event.target.value,
          });
    }

    setcurrentRelationshipCode(event){
        console.log("setcurrentRelationshipCode :" + event.target.value); 
        this.setState({
            currentRelationshipCode: event.target.value,
          });
    }
    render() {

        // Formik : Passing the props
        const {      
            values,
            errors,
            touched,
            isSubmitting
          
        } = this.props;


        return (
            <Wizard>
                <Wizard.Page>
                    <Welcome />
                </Wizard.Page>
                <Wizard.Page>
                    <div className="row">
                        {/* <div className="form-horizontal"> */}
                        <div className="modal-body row">
                            <div className="col-sm-12">
                                <div className="row">
{/* Existing Details Start */}
                                    <div className="col-sm-6">
                                        <div className="col-sm-12">
                                            Existing Details
                                        </div> <br/>   
                                        <div className="col-sm-12">
                                            Gender:
                                        </div>

                                        <div className="col-sm-12">
                                            <span>{this.state.gender}</span>
                                        </div><br/>
                                        <div className="col-sm-12">
                                            Date of Birth:
                                        </div>

                                        <div className="col-sm-12">
                                            <span>{this.state.dateOFDOB}</span>
                                        </div> <br/>                                       
                                        <div className="col-sm-12">
                                            Vital Status: 
                                        </div>

                                        <div className="col-sm-12">
                                            <span>{this.state.status}</span>
                                        </div><br/>

                                        <div className="col-sm-12">
                                            Date of Death:
                                        </div>

                                        <div className="col-sm-12">
                                            <span>{this.state.dateOfDeath}</span>
                                        </div><br/>

                                        <div className="col-sm-12">
                                            Age of Death: 
                                        </div>

                                        <div className="col-sm-12">
                                            <span><label className="form-check-label" name ="aodeathColumn"  >{values.aodeathColumn}</label></span>
                                            {/* {this.state.aodeath} */}
                                        </div><br/>
                                        
                                        <div className="col-sm-12">
                                            Source of Death Information: 
                                        </div>

                                        <div className="col-sm-12">
                                            <span>{this.state.sourceOFDeath}</span>
                                        </div><br/>

                                        <div className="col-sm-12">
                                            Cause of Death:  
                                        </div>

                                        <div className="col-sm-12">
                                            <span>{this.state.courseOFDeath}</span>
                                        </div><br/>

                                        <div className="col-sm-12">
                                            Last Known Date:  
                                        </div>

                                        <div className="col-sm-12">
                                            <span>{this.state.dateOfLKDA}</span>
                                        </div><br/>

                                        <div className="col-sm-12">
                                            Source of Last Known Date:   
                                        </div>

                                        <div className="col-sm-12">
                                            <span>{this.state.sourceOfLiveDate}</span>
                                        </div><br/>

                                        <div className="col-sm-12">
                                            EPI FUP 1 STATUS: 
                                        </div>

                                        <div className="col-sm-12">
                                            <span>{this.state.fPI1Status}</span>
                                        </div><br/>

                                        <div className="col-sm-12">
                                            EPI FUP 2 STATUS: 
                                        </div>

                                        <div className="col-sm-12">
                                            <span>{this.state.fPI2Status}</span>
                                        </div><br/>

                                        <div className="col-sm-12">
                                            EPI FUP 3 STATUS: 
                                        </div>

                                        <div className="col-sm-12">
                                            <span>{this.state.fPI3Status}</span>
                                        </div><br/>


                                        <div className="col-sm-12">
                                            EPI FUP 4 STATUS: 
                                        </div>

                                        <div className="col-sm-12">
                                            <span>{this.state.fPI4Status}</span>
                                        </div><br/>
                                     </div>


{/* Existing Details End */}    

{/* New Details Start*/}
                                    <div className="col-sm-6">
                                        <div className="col-sm-12">
                                            New Details
                                        </div><br/>
                                        <div className="col-sm-12">
                                            Gender:
                                            </div>
                                        <div className="col-sm-12">
                                            <div className="form-check form-check-inline" onChange={this.setSex.bind(this)} >
                                                <input className="form-check-input" type="radio" value="1" checked={this.state.currentGender == 1 ? true : false} name="genderColumn" />
                                                <label className="form-check-label" >Male</label>
                                                <input className="form-check-input" type="radio" value="2" checked={this.state.currentGender == 2 ? true : false} name="genderColumn" />
                                                <label className="form-check-label" >Female</label>
                                                <input className="form-check-input" type="radio" value="3" checked={this.state.currentGender == 3 ? true : false} name="genderColumn" />
                                                <label className="form-check-label" >Unknown</label>

                                            </div><br/>
                                        </div> <br/>   
                                        <div className="col-sm-12">
                                            Date of Birth:
                                        </div>
                                        <div className="col-sm-4"> 
                                            <DatePicker
                                            onChange={this.oncurrentDOBChange}
                                            value={this.state.currentDOB}
                                            />
                                        </div><br/>
                                        <div className="col-sm-12">
                                            Vital Status:
                                        </div>
                                        <div className="col-sm-12" value={this.state.currentStatus}>
                                            <div className="form-check form-check-inline" onChange={this.setCurrentStatus.bind(this)} >
                                                <input className="form-check-input" type="radio" value="1" checked={this.state.currentStatus == 1 ? true : false} name="vitalStatusColumn" />
                                                <label className="form-check-label" >Alive</label>
                                                <input className="form-check-input" type="radio" value="2" checked={this.state.currentStatus == 2 ? true : false} name="vitalStatusColumn" />
                                                <label className="form-check-label" >Dead</label>
                                                <input className="form-check-input" type="radio" value="3" checked={this.state.currentStatus == 3 ? true : false} name="vitalStatusColumn" />
                                                <label className="form-check-label" >Unknown</label>

                                        </div>
                                        </div><br/>                                        
                                        <div className="col-sm-12">
                                            Date of Death: 
                                        </div>

                                        <div className="col-sm-5"> 
                                            <DatePicker
                                            onChange={this.setCurrentDeath}
                                            value={this.state.currentDeath}
                                            />
                                        </div><br/>
                                        <div className="col-sm-12">
                                            Age of Death: 
                                        </div>
                                        <div className="col-sm-4">
                                            <span name ="currentaodeathColumn" > </span>
                                                {/* // {this.state.currentaodeath}
                                                value={"values.currentaodeathColumn"} */}
                                             {/* <label type="label" name ="currentaodeathColumn" value={values.currentaodeathColumn}></input> */}
                                             
                                        </div><br/>


                                        <div className="col-sm-12">
                                            Source of Death Information: 
                                        </div>
                                        <div className="col-sm-5">
                                            <select className="form-control dorp-box" value={this.state.currentSourceOFDeath} onChange={this.setCurrentSource.bind(this)} name="currentDeathColumn">
                                            {
                                                // this.state.ageData.map((ageGroup, i) => {
                                                    
                                                //     this.state.ageGroup = ageGroup.name;
                                                //     console.log("location ID :  " + ageGroup.id);
                                                //     return <option key={ageGroup.value} value={ageGroup.id}>{ageGroup.name}</option>
                                                    
                                                // })
                                                
                                                <option >{"Hospital Rec"}</option>
                                            }
                                            </select>
                                        </div>
                                        <div className="col-sm-12">
                                            Cause of Death:  
                                        </div>

                                        <div className="col-sm-12">
                                            <span>{this.state.currentCourseOFDeath}</span>
                                        </div><br/>

                                        <div className="col-sm-12">
                                            Last Known Date:  
                                        </div>
                                        <div className="col-sm-4"> 
                                            <DatePicker
                                            onChange={this.setCurrentLKDA}
                                            value={this.state.currentLKDA}
                                            />
                                        </div><br/> 
                                        <div className="col-sm-12">
                                            Source of Last Known Date:  
                                        </div>
                                        <div className="col-sm-5">
                                            <select className="form-control dorp-box" value={this.state.currentCourseOfLiveDate} onChange={this.setSourceLKD.bind(this)} name="sourceLKDColumn">
                                            {
                                                // this.state.ageData.map((ageGroup, i) => {
                                                    
                                                //     this.state.ageGroup = ageGroup.name;
                                                //     console.log("location ID :  " + ageGroup.id);
                                                //     return <option key={ageGroup.value} value={ageGroup.id}>{ageGroup.name}</option>
                                                    
                                                // })
                                                
                                                <option >{"Hospital Rec"}</option>
                                            }
                                            </select>
                                        </div><br/>
                                        <div className="col-sm-12">
                                            EPI FUP 1 STATUS:   
                                        </div>
                                        <div className="col-sm-5">
                                            <select className="form-control dorp-box" value={this.state.currentfPI1Status} onChange={this.setcurrentfPI1Status.bind(this)} name="fPI1StatusColumn">
                                            {
                                                // this.state.ageData.map((ageGroup, i) => {
                                                    
                                                //     this.state.ageGroup = ageGroup.name;
                                                //     console.log("location ID :  " + ageGroup.id);
                                                //     return <option key={ageGroup.value} value={ageGroup.id}>{ageGroup.name}</option>
                                                    
                                                // })
                                                
                                                <option >{"Hospital Rec"}</option>
                                            }
                                            </select>
                                        </div><br/>
                                        <div className="col-sm-12">
                                            EPI FUP 2 STATUS:   
                                        </div>
                                        <div className="col-sm-5">
                                            <select className="form-control dorp-box" value={this.state.currentfPI2Status} onChange={this.setcurrentfPI2Status.bind(this)} name="fPI2StatusColumn">
                                            {
                                                // this.state.ageData.map((ageGroup, i) => {
                                                    
                                                //     this.state.ageGroup = ageGroup.name;
                                                //     console.log("location ID :  " + ageGroup.id);
                                                //     return <option key={ageGroup.value} value={ageGroup.id}>{ageGroup.name}</option>
                                                    
                                                // })
                                                
                                                <option >{"Hospital Rec"}</option>
                                            }
                                            </select>
                                        </div><br/>
                                        <div className="col-sm-12">
                                            EPI FUP 3 STATUS:   
                                        </div>
                                        <div className="col-sm-5">
                                            <select className="form-control dorp-box" value={this.state.currentfPI3Status} onChange={this.setcurrentfPI3Status.bind(this)} name="fPI3StatusColumn">
                                            {
                                                // this.state.ageData.map((ageGroup, i) => {
                                                    
                                                //     this.state.ageGroup = ageGroup.name;
                                                //     console.log("location ID :  " + ageGroup.id);
                                                //     return <option key={ageGroup.value} value={ageGroup.id}>{ageGroup.name}</option>
                                                    
                                                // })
                                                
                                                <option >{"Hospital Rec"}</option>
                                            }
                                            </select>
                                        </div><br/>
                                        <div className="col-sm-12">
                                            EPI FUP 4 STATUS:   
                                        </div>
                                        <div className="col-sm-5">
                                            <select className="form-control dorp-box" value={this.state.currentfPI4Status} onChange={this.setcurrentfPI4Status.bind(this)} name="fPI4StatusColumn">
                                            {
                                                // this.state.ageData.map((ageGroup, i) => {
                                                    
                                                //     this.state.ageGroup = ageGroup.name;
                                                //     console.log("location ID :  " + ageGroup.id);
                                                //     return <option key={ageGroup.value} value={ageGroup.id}>{ageGroup.name}</option>
                                                    
                                                // })
                                                
                                                <option >{"Hospital Rec"}</option>
                                            }
                                            </select>
                                        </div><br/>
                                        <div className="col-sm-12">
                                            Relationship Code:    
                                        </div>
                                        <div className="col-sm-5">
                                            <select className="form-control dorp-box" value={this.state.currentRelationshipCode} onChange={this.setcurrentRelationshipCode.bind(this)} name="currentRelCodeColumn">
                                            {
                                                // this.state.ageData.map((ageGroup, i) => {
                                                    
                                                //     this.state.ageGroup = ageGroup.name;
                                                //     console.log("location ID :  " + ageGroup.id);
                                                //     return <option key={ageGroup.value} value={ageGroup.id}>{ageGroup.name}</option>
                                                    
                                                // })
                                                
                                                <option >{"Hospital Rec"}</option>
                                            }
                                            </select>
                                        </div><br/>                                        
                                        


                                            <br></br>
                                        
                                        <div className="col-sm-12">

                                        </div>
                                    </div>
{/* current Details End*/}                                    
                                </div>

                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                </Wizard.Page>
            </Wizard>


        );

    }
}
const FormikApp = withFormik({
    mapPropsToValues({aodeathColumn, currentaodeathColumn}) {
    
        return {
            aodeathColumn:'fromDb',
            currentaodeathColumn: "testin",
        }
    }

})(CancerFamilyReg)

export default FormikApp;
    {/* <DropdownMenu
      trigger="Choices"
      triggerType="button"
      shouldFlip={false}
      position="right middle"
      onOpenChange={this.setcurrentRelationshipCode.bind(this)}
    >         <DropdownItemGroup>
    <DropdownItem>Sydney</DropdownItem>
    <DropdownItem>Melbourne</DropdownItem>
  </DropdownItemGroup>
</DropdownMenu> */}
{/* <div style={{ margin: '20px' }}> */}
// ReactDOM.render(template, document.getElementById("app"));