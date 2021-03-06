import React from "react";
import { Link } from "react-router-dom";
import api from "../../api/api";

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
        <div className="d-flex justify-content-between mb-4">
          <h3>Produto</h3>
          <Link className="btn btn-outline-dark" to="add-phone">
            <h5>
              +<i className="fas fa-mobile-alt"> Adicionar</i>
            </h5>
          </Link>
        </div>
        <table className="table border border-dark border-1-solid-dark">
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
                <tr key={mobile._id}>
                  <td>{mobile.code}</td>
                  <td>{mobile.model}</td>
                  <td>R$ {mobile.price},00</td>
                  <td>{mobile.brand}</td>
                  <td>{mobile.color}</td>
                  <td className="d-flex align-items-center justify-content-around">
                    <Link to={`/edit-phone/${mobile._id}`} title="Edit">
                      <i className="fas fa-pen text-black"></i>
                    </Link>

                    <Link
                      to={`/delete-phone/${mobile._id}`}
                      title="Delete Mobile"
                    >
                      <i className="fas fa-trash text-black"></i>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
