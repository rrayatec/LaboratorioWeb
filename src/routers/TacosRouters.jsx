function Tacos({ data }) {
  return data.map((a) => <li key={a.id}>{a.name}</li>);
}

export default Tacos;
