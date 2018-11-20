
import React from 'react';

export default class CancerInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          cancerInfo: [],
        }
    }

    componentDidMount(){
       
        
            // fetch saved practitioner rec id
            // const urlProfession = properties.baseUrl + "practitionerscore/" ;
            console.log("SEL this.jsonId%%%%%%%%%%%%%%%%%%% : " + this.state.jsonId)
            const urlProfession = "http://localhost:8090/ProneSpringBoot/api/practitioners/175";
            fetch(urlProfession)
              .then(response => response.json())
              .then((data) => {
        
                console.log("score" + data);
                this.setState({
                    cancerInfo: data,
        
                });
                // this.state.profession.push(data);
              })
        
          
    }

    render() {
        let rows = this.state.data.map(person => {
            return <PersonRow key = {
              person.id
            }
            data = {
              person
            }
            />
        })

        return (
            <div>
                <table> 
                    <tr>
                        <th>
                            TUMOR_NO
                        </th>
                        <th>
                            SITE
                        </th>
                        <th>
                            LATERAL
                        </th>
                        <th>
                            HISTOLOGY
                        </th>
                        <th>
                            BEHAVIOR
                        </th>
                        <th>
                            DIAGNOSIS DATE
                        </th>
                        <th>
                            AGE DIAGNOSIS
                        </th>
                        <th>
                            DIAGNOSIS SOURCE:
                        </th>
                        <th>
                            TISSUE
                        </th>
                        <th>
                            UPDATE
                        </th>
                        


                    </tr>
                    <tr>
                        {rows}
                    </tr>
                    <tbody>
                    </tbody>
                </table>
            </div>
        )
    }
}


const PersonRow = (props) => {
    return (
      <tr>
        <td>
          { props.data.id }
        </td>
        <td>
          { props.data.name }
        </td>
      </tr>
    );
  }