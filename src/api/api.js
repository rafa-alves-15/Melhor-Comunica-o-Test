import axios from "axios";

export default axios.create({
  baseURL: `https://phones--melhorcom.repl.co`,
  headers: {
    cpf: "04925787454",
    "Content-Type": "application/json",
  },
});
