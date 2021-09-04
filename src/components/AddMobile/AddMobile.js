import React from "react";
import TextInput from "../Inputs/TextInput";
import SelectInput from "../Inputs/SelectInput";
import DataInput from "../Inputs/DataInput";
import { Link } from "react-router-dom";
import "./AddMobile.css";
import api from "../../api/api";

export default class Mobile extends React.Component {
  ToISODate = (value) => {
    let date = new Date(value);
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

    const month =
      date.getMonth() + 1 < 10
        ? `0${date.getMonth() + 1}`
        : date.getMonth() + 1;
    const year = date.getFullYear();
    const allDate = `${year}-${month}-${day}`;
    console.log(year);
    return allDate;
  };

  state = {
    code: "",
    model: "",
    price: "",
    brand: "",
    color: "",
    date: this.ToISODate(new Date()),
    endDate: this.ToISODate(new Date().setDate(new Date().getDate() + 1)),
  };

  convertDate = (date) => new Date(date).toLocaleDateString("pt-BR");

  Random(code) {
    let maxNumber = 1000000;
    let randomNumber = Math.floor(Math.random(code) * maxNumber + 1);
    return randomNumber;
  }

  handleChange = (event) => {
    let value = event.target.value;
    this.setState({ [event.target.name]: value });
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
                      items={["BLACK", "WHITE", "GOLD", "PINK"]}
                      required
                    />
                  </th>
                  <th>
                    <TextInput
                      label="Preço"
                      type="text"
                      name="price"
                      onChange={this.handleChange}
                      value={this.state.price}
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
                      min={this.ToISODate(new Date(this.state.date))}
                      required
                    />
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="form-group d-flex justify-content-around">
            <Link className="btn btn-outline-dark text-black" to="/">
              <h6>Voltar</h6>
            </Link>
            <div className="salve">
              <button className="btn btn-outline-dark text-black" type="submit">
                <h6>Salvar</h6>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
