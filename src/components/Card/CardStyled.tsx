import styled from "styled-components";

const CardStyled = styled.article`
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 5px;
  margin-bottom: 10px;

  .image {
    border-radius: 5px;
    overflow: hidden;
    position: relative;

    &__pet {
      display: block;
      height: 240px;
      min-width: 100%;
      object-fit: cover;
      object-position: center;
    }

    &__tag {
      bottom: 20px;
      font-family: "Baloo Bhai 2";
      font-size: 20px;
      font-weight: 600;
      line-height: 1.25;
      overflow: hidden;
      position: absolute;
      right: -70px;
      text-align: center;
      text-transform: uppercase;
      transform: rotate(-45deg);
      width: 200px;

      &--adopt {
        background-color: ${(props) => props.theme.colors.adopt};
      }

      &--care {
        background-color: ${(props) => props.theme.colors.care};
      }

      &--lost {
        background-color: ${(props) => props.theme.colors.lost};
      }
    }
  }

  .info {
    align-items: center;
    display: flex;
    gap: 15px;
    justify-content: space-between;

    &__text {
      align-items: center;
      display: flex;
      font-family: "Baloo Bhai 2";
      font-size: 20px;
      justify-content: space-between;
      width: 100%;

      .text__name {
        font-weight: 600;
      }
    }

    &__view-more {
      background-color: ${(props) => props.theme.colors.main};
      border-color: ${(props) => props.theme.colors.quaternary};
      color: ${(props) => props.theme.colors.terciary};
      font-size: 20px;
      font-weight: 600;
      min-width: 100px;

      &:hover {
        border-color: ${(props) => props.theme.colors.terciary};
      }
    }
  }
`;

export default CardStyled;
