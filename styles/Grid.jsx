import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  column-gap: 2rem;
  padding: 5rem 2rem;
  row-gap: 2rem;

  .column {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    height: 100%;
  }
`;