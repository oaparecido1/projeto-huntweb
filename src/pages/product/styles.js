import styled from 'styled-components';

export const Container = styled.div`
  font-family: Arial, Helvetica, sans-serif;

  .product-info {
    max-width: 700px;
    margin: 20px;
    padding: 10px;
    background: #fff;
    border-radius: 5px;
    border: 1px solid #ddd;    
  }

  .product-info h1 { 
    font-size: 32px;
  }

  .product-info p { 
    color: #666;
    line-height: 24px;
    margin-top:5px;
    display: flex;
    justify-content: space-between;
  }

  .get-out {
    border: 2px solid #069;
    border-radius: 5px;
    padding: 5px 20px 5px 20px;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
  }

  .get-out:hover {
    transition: 0.2s;
    background: #069;
    color: #fff;
  }


  .product-info p a {
    color: #069;
  }
`;
