import React from 'react';

type ButtonProps = {
  label?: string;
  name?: string;
  onClick?: () => void;
  toto?: string;
};

export default function Button({ label, name, onClick, toto}: ButtonProps) {
  return <button type='button' onClick={onClick}>{label || `remote1=${name} - ${toto}`}</button>;
}
