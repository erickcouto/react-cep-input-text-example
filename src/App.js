import React, { useState } from "react";
import CepInputText from "./CepInputText";

function App() {
  const [address, setAddress] = useState({});

  function handleOnSuccess(result) {
    setAddress(result);
  }
  return (
    <>
      <CepInputText
        style={{ fontSize: 18 }}
        onSuccess={result => handleOnSuccess(result)}
      />
      <main>
        {address.logradouro && (
          <>
            <p>
              <strong>Endereço:</strong> {address.logradouro}
            </p>
            <p>
              <strong>Bairro:</strong> {address.bairro}
            </p>
            <p>
              <strong>Cidade:</strong> {address.localidade}
            </p>
            <p>
              <strong>Estado:</strong> {address.uf}
            </p>
            <p>
              <strong>Endereço:</strong> {address.bairro}
            </p>
            <div>
              <strong>Payload:</strong>
              <p>{JSON.stringify(address)}</p>
            </div>
          </>
        )}
      </main>
    </>
  );
}
export default App;
