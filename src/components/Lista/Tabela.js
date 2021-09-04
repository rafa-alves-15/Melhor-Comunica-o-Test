import React from "react";
import { Link } from "react-router-dom";
import api from "../../api/api";
import "./Tabela.css";

export default class ListPhone extends React.Component {
  state = {
    phone: [],
  };

  componentDidMount = async () => {
    try {
      const res = await api.get("/phone");

      this.setState({ phone: [...res.data] });
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <div>
        <div>
          <tr className="d-flex justify-content-between ">
            <th>
              <h3>Produto</h3>
            </th>
            <th>
              <Link to="add-phone">
                <h3>
                  <i className="fas fa-mobile-alt" />
                </h3>
              </Link>
            </th>
          </tr>
          <table className="table table-hover border border-secondary justify-content-">
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Modelo</th>
                <th>Preço</th>
                <th>Marca</th>
                <th>Cor</th>
              </tr>
            </thead>
            <tbody>
              {this.state.phone.map((mobile) => {
                return (
                  <tr key={mobile.id}>
                    <td>{mobile.code}</td>
                    <td>{mobile.model}</td>
                    <td>{mobile.price}</td>
                    <td>{mobile.brand}</td>
                    <td>{mobile.color}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
