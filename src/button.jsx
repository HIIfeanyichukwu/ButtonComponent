import styled from 'styled-components'

export const Button = styled.button`

    color: #3f3f3f;
    font-weight: 500;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 14px;
    border-radius: 6px;
    line-height: 20.27px;
    background-color: #E0E0E0;
    text-transform: capitalize;
    text-align: center;
    box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
    padding-inline: 1rem;
    padding-block: .5rem;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-block-start: 12px;


    &.btn-hover{
        background-color: #aeaeae;
    }

    &.btn-outline {
        color: #3d5afe;
        background-color: #fff;
        box-shadow: none;
        border: 1px solid #3d5afe;
    }

    &.btn-outline-hover {
        color: #3d5afe;
        background: rgba(41, 98, 255, 0.1);
        border: 1px solid #3d5afe;
        box-shadow: none;
    }

    &.text {
        background: #fff;
        color: #3d5afe;
        border: none;
        box-shadow: none;
    }

    &.text-hover {
        color: #3d5afe;
        box-shadow: none;
        background: rgba(41, 98, 255, 0.1);
    }

    &.dis-shadow {
        box-shadow: none;
        color: #fff;
        background: #3d5afe;
    }

    &.disabled {
        background: #e0e0e0;
        border: none;
        box-shadow: none;
        color: #9e9e9e;
    }

    &.disabled-hover {
        border: none;
        background: none;
        box-shadow: none;
        color: #9e9e9e;
    }

    &.start-icon {
        color: #fff;
        background: #2962ff;
        box-shadow: 0px 2px 3px rgba(0, 49, 202, 0.2);
    }

    &.end-icon {
        color: #fff;
        background: #2962ff;
        box-shadow: 0px 2px 3px rgba(0, 49, 202, 0.2);
        direction: rtl;
    }

    &.sm {
        color: #fff;
        background: #2962ff;
        padding-block: 6px;
        padding-inline: 12px;
        box-shadow: 0px 2px 3px rgba(0, 49, 202, 0.2);
        margin-block-start: 17px;

    }

    &.md {
        color: #fff;
        background: #2962ff;
        box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
        margin-block-start: 15px;
    }

    &.lg {
        color: #fff;
        background: #2962ff;
        padding-block: 11px;
        padding-inline: 22px;
        box-shadow: 0px 2px 3px rgba(0, 49, 202, 0.2);
    }

    &.primary {
        color: #fff;
        background: #2962ff;
        box-shadow: 0px 2px 3px rgba(41, 98, 255, 0.2);
    }
    &.primary-hover {
        color: #fff;
        background: #0039cb;
        box-shadow: 0px 2px 3px rgba(41, 98, 255, 0.2);
    }

    &.secondary {
        color: #fff;
        background: #455A64;
        box-shadow: 0px 2px 3px rgba(69, 90, 100, 0.2);
    }

    &.secondary-hover {
        color: #fff;
        background: #1C313A;
        box-shadow: 0px 2px 3px rgba(69, 90, 100, 0.2);
    }

    &.danger {
        color: #fff;
        background: #D32F2F;
        box-shadow: 0px 2px 3px rgba(211, 47, 47, 0.2);
    }

    &.danger-hover {
        color: #fff;
        background: #9a0007;
        box-shadow: 0px 2px 3px rgba(211, 47, 47, 0.2);
    }

`

