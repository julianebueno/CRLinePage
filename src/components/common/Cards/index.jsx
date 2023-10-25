import React from 'react'
import Product from "/product.jpg"
import * as S from "./Style"
import { Link } from "react-router-dom";
const Cards = ({ display, data }) => {
  return (
    <S.Card display={display}>
      <Link to={`/produto/${data._id}`} className="link">
        <img src={Product} alt="" />
        <div className='divDetails'>

          <h1>{data.nome}</h1>
          <h2>{data.descricao}</h2>

          <div className='divPrice'>

            <p className='principalPrice'>{data.preco}</p>
            <p className='discount'>{data.desconto}</p>
          </div>


        </div>
      </Link>

    </S.Card>
  )
}

export default Cards