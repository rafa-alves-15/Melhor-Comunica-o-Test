import React from "react";
import api from "../../api/api"


export default class DeletePhone extends React.Component {
  
    componentDidMount = () => {
    const id = this.props.match.params.id;

    api
      .delete(`/phone/${id}`)
      .then((response) => {
        console.log(response);
        this.props.history.push("/");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return <div>Deleting...</div>;
  }
}

