import React from "react";
import TextInput from "../Inputs/TextInput";
import SelectInput from "../Inputs/SelectInput";
import DataInput from "../Inputs/DataInput";
import { Link } from "react-router-dom";
import "./AddMobile.css";
import api from "../../api/api";

export default class AddMobile extends React.Component {
  ToDate = (value) => {
    let date = new Date(value);

    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

    const month =
      date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth();

    const year = date.getFullYear();

    const allDate = `${year}-${month}-${day}`;

    return allDate;
  };

  state = {
    code: [`#`],
    model: "",
    price: "",
    brand: "",
    color: "",
    date: this.ToDate(new Date()),
    endDate: this.ToDate(new Date().setDate(new Date().getDate() + 1)),
  };

  convertDate = (date) => new Date(date).toLocaleDateString("pt-BR");

  handleAddClick = () => {
    const randomCode = Math.floor(Math.random() * 100000000);
    return this.state.code.push(randomCode);
  };

  handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    this.setState({ [name]: value });
  };

  Value = () => {
    const cloneState = {
      ...this.state,
      date: this.convertDate(this.state.date),
      endDate: this.convertDate(this.state.endDate),
    };
    return cloneState;
  };

  hadleSubmit = (event) => {
    event.preventDefault();

    api
      .post("/phone", JSON.stringify(this.Value()))
      .then((res) => {
        console.log(res);
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  render() {
    return (
      <div>
        <div className="title">
          <h3>Detalhes do Produto</h3>
        </div>
        <br />
        <form onSubmit={this.hadleSubmit}>
          <div className="d-flex justify-content-center">
            <table className="icon-text">
              <tbody>
                <tr>
                  <th>
                    <TextInput
                      label="Modelo"
                      type="text"
                      name="model"
                      onChange={this.handleChange}
                      value={this.state.model}
                      required
                    />
                  </th>
                  <th>
                    <TextInput
                      label="Marca"
                      type="text"
                      name="brand"
                      onChange={this.handleChange}
                      value={this.state.brand}
                      required
                    />
                  </th>
                </tr>
                <tr>
                  <th>
                    <SelectInput
                      label="Cor"
                      type="text"
                      name="color"
                      onChange={this.handleChange}
                      value={this.state.color}
                      items={[
                        "Selecionar Cor",
                        "BLACK",
                        "WHITE",
                        "GOLD",
                        "PINK",
                      ]}
                      required
                    />
                  </th>
                  <th>
                    <TextInput
                      label="Preço"
                      type="number"
                      name="price"
                      onChange={this.handleChange}
                      value={this.state.price}
                      input=""
                      required
                    />
                  </th>
                </tr>
                <tr>
                  <th>
                    <DataInput
                      label="Início das Vendas"
                      name="date"
                      onChange={this.handleChange}
                      value={this.state.date}
                      min="2018-12-25"
                      required
                    />
                  </th>
                  <th>
                    <DataInput
                      label="Fim das Vendas"
                      name="endDate"
                      onChange={this.handleChange}
                      value={this.state.endDate}
                      min={this.state.date}
                      required
                    />
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="add-footer">
            <div className="add-voltar">
              <Link className="btn btn-outline-dark text-black " to="/">
                <h6>Voltar</h6>
              </Link>
            </div>

            <div className="add-salvar">
              <button
                className="btn btn-outline-dark text-black"
                type="submit"
                onClick={this.handleAddClick}
              >
                <h6>Salvar</h6>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
