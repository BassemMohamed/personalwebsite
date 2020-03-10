import { css } from "styled-components";

export default css`
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 1.5rem;
    top: 1.5rem;
    color: ${props => props.theme.colors.main};
  }

  .bm-burger-bars {
    background: ${props => props.theme.colors.main};
  }

  .bm-burger-bars-hover {
    background: ${props => props.theme.colors.accent};
  }

  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  .bm-cross {
    background: ${props => props.theme.colors.accent};
    height: 24px !important;
  }

  .bm-cross-button:hover .bm-cross {
    background: ${props => props.theme.colors.black};
  }

  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  .bm-menu {
    background: ${props => props.theme.colors.main};
    padding: 1rem 1rem 0;
    font-size: 1.15rem;
  }

  .bm-item-list {
    padding: 0 1rem;
  }

  .bm-item,
  .bm-item a {
    color: ${props => props.theme.colors.accent};
  }
  .bm-item.disabled {
    pointer-events: none;
  }

  .bm-item h2 {
    color: ${props => props.theme.colors.black};
  }

  .bm-item a span {
    display: block;
    font-size: 0.7rem;
  }

  .bm-item.active a,
  .bm-item a:hover {
    color: ${props => props.theme.colors.black};
  }

  .bm-item-list i {
    margin-right: 5px;
  }

  .bm-item {
    display: inline-block;
    padding: 0.5rem 0;
    outline: none;
  }
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`;
